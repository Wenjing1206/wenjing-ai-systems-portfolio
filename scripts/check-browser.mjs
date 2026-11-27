// English: Check the built site in Chromium under its GitHub Pages subpath.
// 中文：在 Chromium 中验证构建产物在 GitHub Pages 子目录下的行为。
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const root = fileURLToPath(new URL('../dist', import.meta.url));
const prefix = '/wenjing-ai-systems-portfolio/';
const types = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.pdf': 'application/pdf', '.png': 'image/png', '.svg': 'image/svg+xml', '.py': 'text/plain',
  '.sql': 'text/plain', '.md': 'text/plain',
};
const server = createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url, 'http://localhost');
    if (!pathname.startsWith(prefix)) throw new Error('Unknown site path');
    const file = join(root, decodeURIComponent(pathname.slice(prefix.length) || 'index.html'));
    if (!file.startsWith(root + sep)) throw new Error('Path outside build');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'text/plain' });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});
await new Promise((resolve, reject) => server.once('error', reject).listen(0, '127.0.0.1', resolve));
const site = 'http://127.0.0.1:' + server.address().port + prefix;
let browser;
try {
  browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 }, colorScheme: 'light' });
  page.setDefaultTimeout(5000);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (response.url().startsWith(site) && response.status() >= 400) errors.push(response.url());
  });
  await page.goto(site);
  assert.equal(await page.locator('.feature-card').count(), 5);
  assert.equal(await page.locator('.library-card').count(), 21);
  assert.ok(await page.getByText('Expected December 2027').first().isVisible());

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'Download résumé (PDF)', exact: true }).click(),
  ]);
  const pdf = await readFile(await download.path());
  assert.equal(pdf.subarray(0, 5).toString(), '%PDF-');
  assert.match(pdf.toString(), /Expected December 2027/);

  const selections = {
    'data-science': 'tabular-classification',
    'applied-ai': 'shopping-copilot',
    'analytics-bi': 'kze-marketing',
    'data-governance': 'carbon-data-platform',
    'ai-product': 'shopping-copilot',
  };
  for (const [role, first] of Object.entries(selections)) {
    await page.locator('#role-nav a[data-role="' + role + '"]').click();
    assert.equal(await page.locator('#role-nav [aria-current=true]').getAttribute('data-role'), role);
    assert.equal(await page.locator('.feature-card h3 a').first().getAttribute('href'), 'project.html?id=' + first);
    assert.equal(new URL(page.url()).searchParams.get('role'), role);
  }
  await page.goBack();
  assert.equal(await page.locator('#role-nav [aria-current=true]').getAttribute('data-role'), 'data-governance');
  await page.goForward();
  assert.equal(await page.locator('#role-nav [aria-current=true]').getAttribute('data-role'), 'ai-product');
  await page.goto(site + '?role=analytics-bi');
  assert.equal(await page.locator('#role-nav [aria-current=true]').getAttribute('data-role'), 'analytics-bi');
  const filters = await page.locator('#project-filters button[data-filter]').evaluateAll((buttons) => buttons.map((button) => button.dataset.filter));
  assert.equal(filters.length, 9);
  for (const filter of filters) {
    await page.locator('#project-filters button[data-filter="' + filter + '"]').click();
    assert.ok(await page.locator('.library-card').count() > 0);
    assert.equal(new URL(page.url()).searchParams.get('role'), 'analytics-bi');
  }
  await page.goto(site + '#research');
  assert.equal(await page.locator('[aria-pressed=true][data-filter]').getAttribute('data-filter'), 'research');
  await page.goto(site + '?role=invalid&filter=invalid');
  assert.equal(await page.locator('#role-nav [aria-current=true]').getAttribute('data-role'), 'all');
  assert.equal(await page.locator('#skill-grid a[href*="id="]').count(), 6);
  const routes = await page.locator('.library-card h3 a').evaluateAll((links) => links.map((link) => link.getAttribute('href')));
  let evidenceCount = 0;
  for (const route of routes) {
    await page.goto(site + route);
    assert.equal(await page.locator('.case-hero h1').count(), 1);
    assert.equal(await page.locator('link[rel=canonical]').count(), 1);
    assert.ok(await page.locator('.case-toc a').evaluateAll((links) => links.every((link) => document.querySelector(link.hash))));
    evidenceCount += await page.locator('#evidence').count();
    const artifactUrls = await page.locator('#case-content a[href^="assets/"]').evaluateAll((links) => links.map((link) => link.href));
    for (const url of artifactUrls) assert.ok((await page.request.get(url)).ok(), url);
    const figure = page.locator('.evidence-image img');
    if (await figure.count()) {
      await figure.scrollIntoViewIfNeeded();
      await page.waitForFunction(() => document.querySelector('.evidence-image img').naturalWidth > 0);
    }
  }
  assert.equal(evidenceCount, 8);
  await page.goto(site + 'project.html?id=breast-tumor-classification#results');
  assert.match(await page.locator('#results').textContent(), /108 of 114/);
  await page.goto(site + 'project.html?id=missing');
  assert.equal(await page.locator('h1').textContent(), 'Project not found');

  const pages = ['', '?role=ai-product#projects', 'project.html?id=tabular-classification',
    'project.html?id=breast-tumor-classification', 'project.html?id=carbon-data-platform', 'project.html?id=ntu-omnibus'];
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of pages) {
      await page.goto(site + path);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), path + ' overflow at ' + width);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(site);
  const menu = page.getByRole('button', { name: 'Menu' });
  assert.equal(await page.locator('#site-nav').isVisible(), false);
  await menu.focus();
  await page.keyboard.press('Enter');
  assert.equal(await menu.getAttribute('aria-expanded'), 'true');
  await page.keyboard.press('Escape');
  assert.equal(await menu.getAttribute('aria-expanded'), 'false');
  await menu.click();
  await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Experience' }).click();
  assert.equal(await page.evaluate(() => document.activeElement.id), 'experience');
  await page.getByRole('button', { name: 'Dark mode' }).click();
  await page.goto(site + 'project.html?id=carbon-data-platform');
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  assert.deepEqual(errors, []);
  console.log('Passed: 21 case routes, 5 role views, 9 filters, 8 evidence panels, PDF, keyboard, theme, and URL history.');
  console.log('Passed: 30 responsive combinations from 320 to 1440 px. No page errors or failed local requests.');
} finally {
  await browser?.close();
  server.close();
}
