// English: Render project cards, skills, experience, and the filterable library.
// 中文：渲染项目、技能、实习经历和带分类筛选的项目库。
(() => {
  const projects = window.PROJECT_INDEX;
  const { categories, tracks, skills, experience, resumeSubject, contact } = window.PORTFOLIO;
  const { escape, projectUrl, resourceLink } = window.PortfolioUI;
  const byId = new Map(projects.map((project) => [project.id, project]));

  const card = (project, featured = false) => {
    const url = projectUrl(project.id);
    const title = escape(project.title);
    const evidence = project.evidence;
    return '<article class="' + (featured ? 'feature-card' : 'library-card') + '">' +
      '<p class="card-org">' + escape(project.type) + '</p>' +
      '<h3><a href="' + url + '">' + title + '</a></h3>' +
      '<p class="card-copy">' + escape(project.summary) + '</p>' +
      (featured ? '<p class="card-role"><strong>My contribution</strong> ' +
        escape(project.keyContribution) + '</p>' : '') +
      (featured && evidence ? '<div class="card-evidence"><p class="card-topic">' + escape(evidence.label) +
        '</p><p>' + escape(evidence.summary) + '</p></div>' : '') +
      (featured && evidence?.links?.length ? '<div class="card-links">' +
        resourceLink(evidence.links[0]) + '</div>' : '') + '</article>';
  };

  // English: Keep role selections shareable and preserve browser history.
  // 中文：求职方向保存在 URL 中，支持分享、前进与后退。
  const roles = document.querySelector('#role-nav');
  const roleDescription = document.querySelector('#role-description');
  const featureGrid = document.querySelector('#featured-grid');
  const trackById = new Map(tracks.map((track) => [track.id, track]));
  const roleUrl = (id) => {
    const url = new URL(location.href);
    if (id === 'all') url.searchParams.delete('role');
    else url.searchParams.set('role', id);
    url.hash = 'projects';
    return url.search + url.hash;
  };
  roles.innerHTML = tracks.map(({ id, title }) => '<a data-role="' + id + '" href="' +
    escape(roleUrl(id)) + '">' + escape(title) + '</a>').join('');
  roles.hidden = false;

  const renderRole = () => {
    const requested = new URLSearchParams(location.search).get('role');
    const track = trackById.get(requested) ?? tracks[0];
    roles.querySelectorAll('a').forEach((link) => {
      link.href = roleUrl(link.dataset.role);
      if (link.dataset.role === track.id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
    if (featureGrid.dataset.renderedRole === track.id) return;
    featureGrid.dataset.renderedRole = track.id;
    roleDescription.textContent = track.description;
    roleDescription.hidden = !track.description;
    featureGrid.innerHTML = track.projects.map((id) => card(byId.get(id), true)).join('');
  };
  roles.addEventListener('click', (event) => {
    const link = event.target.closest('[data-role]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (link.getAttribute('aria-current') === 'true') return;
    history.pushState(null, '', link.href);
    renderRole();
  });
  window.addEventListener('popstate', renderRole);
  renderRole();

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
      filter === 'all' || (filter === 'featured' ? tracks[0].projects.includes(project.id) : project.categories.includes(filter)));
    filterGroup.querySelectorAll('button').forEach((button) =>
      button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    if (library.dataset.filter === filter) return;
    library.dataset.filter = filter;
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
    renderRole();
  });
  window.addEventListener('popstate', renderLibrary);
  window.addEventListener('hashchange', renderLibrary);
  renderLibrary();

  document.querySelector('#skill-grid').innerHTML = skills.map(({ title, methods, project }) =>
    '<article class="skill-card"><h3>' + escape(title) + '</h3><p>' + escape(methods) + '</p>' +
    '<a class="text-link" href="' + projectUrl(project) + '">' + escape(byId.get(project).title) + '</a></article>'
  ).join('');

  document.querySelector('#experience-list').innerHTML = experience.map((entry) =>
    '<article class="experience-item"><p class="experience-meta"><strong>' + escape(entry.date) +
    '</strong><br>' + escape(entry.place) + '</p><div><h3>' + escape(entry.company) +
    '</h3><p class="experience-role">' + escape(entry.role) + '</p><p>' + escape(entry.description) +
    '</p><div class="profile-links">' + entry.projects.map((id) =>
      '<a class="text-link" href="' + projectUrl(id) + '">' + escape(byId.get(id).title) + '</a>').join('') + '</div></div></article>'
  ).join('');

  const resumeRequest = document.querySelector('#resume-request');
  resumeRequest.href = 'mailto:' + contact.email + '?subject=' + encodeURIComponent(resumeSubject);
  resumeRequest.hidden = false;
})();
