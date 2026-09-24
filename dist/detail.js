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

  const dataInputs = project.dataInputs || project.tech;
  const analysisProcess = project.analysisProcess || project.process.map((step) => ({
    title: step,
    body: 'Reviewed this stage as part of the project workflow.'
  }));

  root.innerHTML = `<article style="--case-accent:${accent}">
    <header class="case-hero"><div class="case-breadcrumb">${escapeText(project.categories.join(' · '))} / Data Analysis Case Study</div><h1 class="case-title">${escapeText(project.title)}</h1><p class="case-summary">${escapeText(project.subtitle)}. ${escapeText(project.summary)}</p><div class="case-meta"><div><span>My role</span>${escapeText(project.role)}</div><div><span>Project context</span>${escapeText(project.type)}</div></div></header>
    ${cover}
    <section class="case-section intro-grid"><div class="context-card"><p class="eyebrow">Context</p><h2>The problem behind the data.</h2><p>${escapeText(project.context)}</p><p>${escapeText(project.problem)}</p></div><div class="context-card problem"><p class="eyebrow">Analysis question</p><h2>${escapeText(project.analysisQuestion || 'What evidence would support the next product decision?')}</h2><div class="data-inputs"><span>Data inputs</span><ul>${dataInputs.map((item)=>`<li>${escapeText(item)}</li>`).join('')}</ul></div></div></section>
    <section class="case-section analysis-section"><div class="analysis-inner"><p class="eyebrow">Data Analysis Process</p><h2>From raw inputs to a decision.</h2><p class="section-intro">The analysis followed a connected workflow: define the question, prepare reliable inputs, select methods, inspect errors, and translate findings into a product decision.</p><div class="analysis-timeline">${analysisProcess.map((stage,index)=>`<article><b>${String(index+1).padStart(2,'0')}</b><div><h3>${escapeText(stage.title)}</h3><p>${escapeText(stage.body)}</p></div></article>`).join('')}</div></div></section>
    <section class="case-section contribution-section"><div class="contribution-head"><div><p class="eyebrow">My contribution</p><h2>What I built and analyzed.</h2></div><p>${escapeText(project.summary)}</p></div>${list(project.built,'built-grid',(item)=>`<div class="built-item"><p>${escapeText(item)}</p></div>`)}<div class="method-strip"><span>Methods & tools</span><div class="tech-list">${project.tech.map((tech)=>`<span>${escapeText(tech)}</span>`).join('')}</div></div></section>
    <section class="case-section findings-section"><p class="eyebrow">Findings / Product Outcomes</p><h2>What the analysis changed—and what it produced.</h2>${list(project.results,'result-grid',(result,index)=>`<div class="result-card"><b>0${index+1}</b><p>${escapeText(result)}</p></div>`)}<div class="outcome-grid"><div class="decision-callout"><span>Product decision</span><p>${escapeText(project.analysisOutcome || project.summary)}</p></div><div class="product-callout"><span>Product outcome</span><p>${escapeText(project.productOutcome || project.summary)}</p></div></div><div class="limits-grid"><div><p class="eyebrow">Evidence boundary</p><p>${escapeText(project.limitations || 'Results are presented within the scope of the available project evidence.')}</p></div><div><p class="eyebrow">What I learned</p><p>${escapeText(project.learned)}</p></div></div><div class="case-links">${links}<a class="button dark-outline" href="assets/Wenjing_Tian_Resume.pdf" download>Download résumé</a></div><a class="next-project" href="project.html?id=${next.id}"><span>Next case study</span><strong>${escapeText(next.title)} ↗</strong></a></section>
  </article>`;
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
