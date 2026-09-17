// 中文备注：根据 URL 中的项目 id 渲染统一案例结构；找不到项目时提供安全回退。
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const projects = window.PROJECTS || [];
const project = projects.find((item) => item.id === id) || projects[0];
const root = document.querySelector('#case-content');

const escapeText = (value) => String(value).replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[character]));
const list = (items, className, formatter) => `<div class="${className}">${items.map(formatter).join('')}</div>`;

if (project && root) {
  document.title = `${project.title} — Wenjing Tian`;
  const accent = `var(--${project.accent || 'blue'})`;
  const cover = project.cover ? `<div class="case-cover"><img src="${escapeText(project.cover)}" alt="${escapeText(project.title)} project evidence"></div>` : '';
  const links = project.links.length
    ? project.links.map((link) => `<a class="button primary" href="${escapeText(link.url)}" target="_blank" rel="noreferrer">${escapeText(link.label)} ↗</a>`).join('')
    : '<a class="button primary" href="mailto:tiantianbinggan@126.com?subject=Portfolio%20walkthrough">Request a walkthrough</a>';
  const currentIndex = projects.indexOf(project);
  const next = projects[(currentIndex + 1) % projects.length];

  root.innerHTML = `<article style="--case-accent:${accent}">
    <header class="case-hero"><div class="case-breadcrumb">${escapeText(project.categories.join(' · '))} / Case study</div><h1 class="case-title">${escapeText(project.title)}</h1><p class="case-summary">${escapeText(project.subtitle)}. ${escapeText(project.summary)}</p><div class="case-meta"><div><span>Role</span>${escapeText(project.role)}</div><div><span>Context</span>${escapeText(project.type)}</div></div></header>
    ${cover}
    <section class="case-section intro-grid"><div class="context-card"><p class="eyebrow">Context / Problem</p><h2>Why this mattered.</h2><p>${escapeText(project.context)}</p></div><div class="context-card problem"><p class="eyebrow">Product challenge</p><h2>What had to change.</h2><p>${escapeText(project.problem)}</p></div></section>
    <section class="case-section built-section"><div class="built-inner"><p class="eyebrow">Role / What I built</p><h2>From problem frame to working system.</h2>${list(project.built,'built-grid',(item)=>`<div class="built-item"><p>${escapeText(item)}</p></div>`)}</div></section>
    <section class="case-section process-band"><div class="process-inner"><p class="eyebrow">Process / Architecture</p><h2>A visible decision path.</h2>${list(project.process,'process-flow',(step)=>`<span>${escapeText(step)}</span>`)}<div class="tech-list">${project.tech.map((tech)=>`<span>${escapeText(tech)}</span>`).join('')}</div></div></section>
    <section class="case-section"><p class="eyebrow">Results / Impact</p><h2>What the work produced.</h2>${list(project.results,'result-grid',(result,index)=>`<div class="result-card"><b>0${index+1}</b><p>${escapeText(result)}</p></div>`)}<div class="learning"><p class="eyebrow">What I learned</p><blockquote>${escapeText(project.learned)}</blockquote></div><div class="case-links">${links}<a class="button dark-outline" href="assets/Wenjing_Tian_Resume.pdf" download>Download résumé</a></div><a class="next-project" href="project.html?id=${next.id}"><span>Next case study</span><strong>${escapeText(next.title)} ↗</strong></a></section>
  </article>`;
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
