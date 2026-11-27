// English: Render project cards, skills, experience, and the filterable library.
// 中文：渲染项目、技能、实习经历和带分类筛选的项目库。
(() => {
  const projects = window.PROJECTS;
  const { categories, skills, experience, resumes, contact } = window.PORTFOLIO;
  const { escape, projectUrl, external, tags } = window.PortfolioUI;
  const byId = new Map(projects.map((project) => [project.id, project]));

  const card = (project, featured = false) => {
    const topics = project.categories.map((category) => categories[category]).join(' · ');
    return '<article class="' + (featured ? 'feature-card' : 'library-card') + '">' +
      '<p class="card-topic">' + escape(featured ? categories[project.categories[0]] : topics) + '</p>' +
      '<h3><a href="' + projectUrl(project.id) + '">' + escape(project.title) + '</a></h3>' +
      '<p class="card-org">' + escape(project.type) + '</p>' +
      '<p class="card-copy">' + escape(project.summary) + '</p>' +
      '<dl class="card-facts"><div><dt>My role</dt><dd>' + escape(project.role) + '</dd></div>' +
      '<div><dt>Key contribution</dt><dd>' + escape(project.keyContribution || project.built[0]) + '</dd></div></dl>' +
      tags(project.tech.slice(0, 5)) +
      '<div class="card-links"><a class="text-link" href="' + projectUrl(project.id) + '" aria-label="View case study: ' +
      escape(project.title) + '">View case study <span aria-hidden="true">↗</span></a>' +
      (project.links[0] ? external(project.links[0].url, project.links[0].label) : '') + '</div></article>';
  };

  document.querySelector('#featured-grid').innerHTML = projects.filter((project) => project.featured)
    .map((project) => card(project, true)).join('');

  const filterGroup = document.querySelector('#project-filters');
  const library = document.querySelector('#project-library');
  const count = document.querySelector('#project-count');
  filterGroup.innerHTML = Object.entries(categories).map(([key, title]) =>
    '<button type="button" data-filter="' + key + '" aria-pressed="false">' + escape(title) + '</button>').join('');

  // English: Use a query parameter so filtered views can be shared and revisited.
  // 中文：把分类保存于 URL，允许分享、重载和浏览器前进后退。
  const getFilter = () => new URLSearchParams(location.search).get('filter') ||
    (location.hash === '#research' ? 'research' : 'all');
  const renderLibrary = () => {
    const requested = getFilter();
    const filter = Object.hasOwn(categories, requested) ? requested : 'all';
    const visible = projects.filter((project) =>
      filter === 'all' || (filter === 'featured' ? project.featured : project.categories.includes(filter)));
    filterGroup.querySelectorAll('button').forEach((button) =>
      button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    library.innerHTML = visible.length ? visible.map((project) => card(project)).join('') : '<p>No projects in this category.</p>';
    count.textContent = visible.length + (visible.length === 1 ? ' project' : ' projects');
  };

  filterGroup.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button || button.getAttribute('aria-pressed') === 'true') return;
    const url = new URL(location.href);
    if (url.hash === '#research') url.hash = '#library';
    if (button.dataset.filter === 'all') url.searchParams.delete('filter');
    else url.searchParams.set('filter', button.dataset.filter);
    history.pushState(null, '', url);
    renderLibrary();
  });
  window.addEventListener('popstate', renderLibrary);
  window.addEventListener('hashchange', renderLibrary);
  renderLibrary();

  const filterUrl = (category) => '?filter=' + category + '#library';
  document.querySelector('#skill-grid').innerHTML = skills.map(([category, ...items]) =>
    '<article class="skill-card"><h3>' + escape(category === 'product' ? 'Product & Experimentation' :
      category === 'analytics' ? 'Data Analytics & Business Intelligence' : categories[category]) + '</h3>' +
    '<ul class="tags" aria-label="Filter projects by skill area">' + items.map((skill) =>
      '<li><a data-skill href="' + filterUrl(category) + '" aria-label="' + escape(skill + ' · Explore related projects') +
      '">' + escape(skill) + '</a></li>').join('') + '</ul>' +
    '<a class="text-link" data-skill href="' + filterUrl(category) + '" aria-label="Explore projects in ' +
    escape(categories[category]) + '">Related projects <span aria-hidden="true">↗</span></a></article>'
  ).join('');

  document.querySelector('#skill-grid').addEventListener('click', (event) => {
    const link = event.target.closest('[data-skill]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    history.pushState(null, '', link.href);
    renderLibrary();
    document.querySelector('#library-title').focus({ preventScroll: true });
    document.querySelector('#library').scrollIntoView();
  });

  document.querySelector('#experience-list').innerHTML = experience.map((entry) =>
    '<article class="experience-item"><p class="experience-meta"><strong>' + escape(entry.date) +
    '</strong><br>' + escape(entry.place) + '</p><div><h3>' + escape(entry.company) +
    '</h3><p class="experience-role">' + escape(entry.role) + '</p><p>' + escape(entry.description) +
    '</p><div class="profile-links">' + entry.projects.map((id) =>
      '<a class="text-link" href="' + projectUrl(id) + '">' + escape(byId.get(id).title) + ' ↗</a>').join('') + '</div></div></article>'
  ).join('');

  document.querySelector('#resume-list').innerHTML = resumes.map(({ title, pdf }) =>
    '<div class="resume-row"><h4>' + escape(title) + '</h4><div class="resume-actions">' +
    (pdf ? '<a class="text-link" href="' + escape(pdf) + '" target="_blank" rel="noopener noreferrer">Preview</a>' +
      '<a class="text-link" href="' + escape(pdf) + '" download>Download</a>' :
      '<a class="text-link" aria-label="Request ' + escape(title) + ' resume by email" href="mailto:' +
      escape(contact.email) + '?subject=' + encodeURIComponent(title + ' resume') + '">Request by email</a>') + '</div></div>'
  ).join('');
})();
