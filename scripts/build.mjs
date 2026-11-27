// English: Generate the mirrored static hosting output from canonical root files.
// 中文：以根目录为唯一源码，生成供静态托管使用的 dist 镜像。
import { cp, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'dist');
const siteFiles = [
  'index.html', 'project.html', 'styles.css', 'project.css',
  'projects.js', 'site-data.js', 'theme.js', 'ui.js', 'script.js', 'detail.js', 'assets'
];

await rm(output, { recursive: true, force: true });
await mkdir(output);
await Promise.all(siteFiles.map((name) => cp(join(root, name), join(output, name), { recursive: true })));
console.log('Static build ready in dist/');
