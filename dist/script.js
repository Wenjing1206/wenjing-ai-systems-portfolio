// 中文备注：移动端导航只在用户点击时展开，并同步可访问状态。
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const projects = window.PROJECTS || [];
const featuredGrid = document.querySelector('#featured-grid');
const projectLibrary = document.querySelector('#project-library');

const tagMarkup = (tags, light = false) => `<div class="tag-row${light ? ' light' : ''}">${tags.slice(0, 4).map((tag) => `<span>${tag}</span>`).join('')}</div>`;

// 中文备注：首页只展示六个重点项目，其余项目通过筛选器快速浏览。
if (featuredGrid) {
  featuredGrid.innerHTML = projects.filter((project) => project.featured).map((project, index) => {
    const visual = project.cover
      ? `<div class="project-image"><img src="${project.cover}" alt="${project.title} project evidence"></div>`
      : `<div class="mini-system" aria-hidden="true"><span>${project.process[0]}</span><i>→</i><span>${project.process[Math.floor(project.process.length / 2)]}</span><i>→</i><span>${project.process.at(-1)}</span></div>`;
    // 中文备注：前三个主线项目采用通栏，突出 AI、Data 与 Product 的关联。
    return `<article class="feature-card ${index < 3 ? 'wide' : ''}" style="--accent:var(--${project.accent || 'blue'})">
      <div class="feature-card-top"><span>${String(index + 1).padStart(2, '0')} ${project.flagship ? '/ FLAGSHIP' : ''}</span><span>${project.categories[0]}</span></div>
      ${visual}<div class="feature-copy">${tagMarkup(project.tags, true)}<h3>${project.title}</h3><p>${project.summary}</p><a class="text-link" href="project.html?id=${project.id}">Read case study <span aria-hidden="true">↗</span></a></div>
    </article>`;
  }).join('');
}

const renderLibrary = (filter = 'All') => {
  if (!projectLibrary) return;
  const visible = projects.filter((project) => filter === 'All' || project.categories.includes(filter));
  projectLibrary.innerHTML = visible.map((project) => `<a class="library-card" href="project.html?id=${project.id}">
    <div><span class="library-type">${project.categories.join(' · ')}</span><h3>${project.title}</h3><p>${project.subtitle}</p></div><span class="library-arrow" aria-hidden="true">↗</span>
  </a>`).join('');
};

renderLibrary();
document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    renderLibrary(button.dataset.filter);
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
