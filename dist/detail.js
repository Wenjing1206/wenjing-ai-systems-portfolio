// English: Render technical case studies from the same records as the home page.
// 中文：详情页读取与首页相同的项目记录，并按项目证据展示相应模块。
(() => {
  const projects = window.PROJECTS;
  const { categories, contact } = window.PORTFOLIO;
  const { escape, projectUrl, resourceLink, tags } = window.PortfolioUI;
  const id = new URLSearchParams(location.search).get('id');
  const project = projects.find((item) => item.id === id);
  const root = document.querySelector('#case-content');

  if (!project) {
    document.title = 'Project not found | Wenjing Tian';
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.append(robots);
    root.innerHTML = '<h1>Project not found</h1><p>Browse the project library to choose a case study.</p>' +
      '<a class="button primary" href="./#library">Explore the project library</a>';
    return;
  }

  document.title = project.title + ' | Wenjing Tian';
  document.querySelector('meta[name="description"]').content = project.summary;
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = 'https://wenjing1206.github.io/wenjing-ai-systems-portfolio/' + projectUrl(project.id);
  document.head.append(canonical);

  const list = (items = []) => items.length
    ? '<ul class="case-list">' + items.map((item) => '<li>' + escape(item) + '</li>').join('') + '</ul>'
    : '';
  const para = (value) => value ? '<p>' + escape(value) + '</p>' : '';
  const section = (id, title, body) => ({ id, title, body });
  const architecture = project.process?.length ? '<figure class="flow-diagram"><figcaption>' +
    escape(project.architectureLabel || 'Conceptual view of the project workflow') + '</figcaption>' +
    '<ol>' + project.process.map((step) => '<li>' + escape(step) + '</li>').join('') + '</ol></figure>' : '';
  const stages = project.analysisProcess?.length ? '<ol class="implementation-list">' +
    project.analysisProcess.map(({ title, body }) => '<li><h3>' + escape(title) + '</h3>' + para(body) + '</li>').join('') +
    '</ol>' : '';
  const example = project.example ? '<figure class="code-block"><figcaption><strong>' +
    escape(project.example.title) + '</strong><span>' + escape(project.example.language) +
    '</span></figcaption><pre tabindex="0"><code>' + escape(project.example.code) + '</code></pre>' +
    '<p class="example-note">' + escape(project.example.note) + '</p></figure>' : '';
  const cover = project.cover ? '<figure class="evidence-image"><img loading="lazy" decoding="async" src="' +
    escape(project.cover) + '" alt="' + escape(project.coverAlt || project.title + ' project figure') + '"' +
    (project.coverSize ? ' width="' + project.coverSize[0] + '" height="' + project.coverSize[1] + '"' : '') +
    '><figcaption>Figure from the original project materials</figcaption></figure>' : '';

  const table = project.evidenceTable;
  const evidenceTable = table ? '<div class="table-wrap" tabindex="0" role="region" aria-label="' + escape(table.caption) +
    '"><table><caption>' + escape(table.caption) + '</caption><thead><tr>' +
    table.headings.map((heading) => '<th scope="col">' + escape(heading) + '</th>').join('') +
    '</tr></thead><tbody>' + table.rows.map(([label, ...values]) =>
      '<tr><th scope="row">' + escape(label) + '</th>' + values.map((value) => '<td>' + escape(value) + '</td>').join('') +
      '</tr>').join('') + '</tbody></table></div>' : '';

  const resources = project.links.map(resourceLink).join('') ||
    '<a class="text-link" href="mailto:' + escape(contact.email) + '?subject=' +
    encodeURIComponent(project.title + ' case study') + '">Ask about this project</a>';

  const evidence = project.evidence;
  const evidenceSummary = evidence ? '<section class="case-evidence" id="evidence" aria-labelledby="evidence-title">' +
    '<div><h2 id="evidence-title">Project evidence</h2><p class="card-topic">' + escape(evidence.label) + '</p></div>' +
    '<div><p>' + escape(evidence.summary) + '</p>' +
    (evidence.links?.length ? '<div class="profile-links">' + evidence.links.map(resourceLink).join('') + '</div>' : '') +
    '</div></section>' : '';

  const body = [
    section('overview', 'Project overview', para(project.context) + para(project.analysisQuestion)),
    section('problem', 'Problem & objectives', para(project.problem) + para(project.objective)),
    section('contributions', 'My role & contributions', list(project.built)),
    section('data', 'Data & methodology', list(project.dataInputs) + tags(project.tech)),
    section('architecture', 'System architecture', architecture),
    section('implementation', 'Technical implementation', stages + example),
    section('results', 'Evaluation & results', evidenceTable + list(project.results) + cover),
    section('challenges', 'Challenges & solutions', para(project.challenge || project.analysisOutcome)),
    section('impact', 'Impact & deliverables', para(project.productOutcome)),
    section('limitations', 'Limitations & next steps', para(project.limitations) + para(project.nextSteps || project.learned)),
    section('resources', 'Resources', '<div class="profile-links">' + resources + '</div>')
  ].filter((item) => item.body);
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  root.innerHTML = '<article><header class="case-hero"><p class="card-topic">' +
    escape(project.categories.map((category) => categories[category]).join(' · ')) + '</p>' +
    '<h1>' + escape(project.title) + '</h1><p class="case-lede">' + escape(project.summary) + '</p>' +
    '<dl class="case-meta"><div><dt>Organization</dt><dd>' + escape(project.type) + '</dd></div>' +
    '<div><dt>My role</dt><dd>' + escape(project.role) + '</dd></div>' +
    (project.period ? '<div><dt>Period</dt><dd>' + escape(project.period) + '</dd></div>' : '') +
    '</dl></header>' + evidenceSummary + '<div class="case-layout"><nav class="case-toc" aria-label="Case study contents">' +
    '<p class="label">On this page</p><ul>' +
    body.map(({ id, title }) => '<li><a href="#' + id + '">' + title + '</a></li>').join('') +
    '</ul></nav><div class="case-sections">' + body.map(({ id, title, body: content }) =>
      '<section class="case-section" id="' + id + '" aria-labelledby="' + id + '-title"><h2 id="' + id +
      '-title">' + title + '</h2>' + content + '</section>').join('') +
    '<a class="next-case" href="' + projectUrl(next.id) + '"><span class="label">Next case study</span><strong>' +
    escape(next.title) + '</strong></a></div></div></article>';
  // English: Locate deep links after the dynamic case sections are present.
  // 中文：详情内容渲染后定位直达链接的锚点。
  const target = document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView();
})();
