// English: Shared navigation, theme controls, and escaped markup helpers.
// 中文：复用导航、主题控件和 HTML 转义，供首页与详情页共用。
window.PortfolioUI = (() => {
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (character) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
  const projectUrl = (id) => 'project.html?id=' + encodeURIComponent(id);
  const external = (url, label) =>
    '<a class="text-link" href="' + escape(url) + '" target="_blank" rel="noopener noreferrer">' +
    escape(label) + ' <span aria-hidden="true">↗</span></a>';
  const tags = (items) => '<ul class="tags" aria-label="Tools and methods">' +
    items.map((item) => '<li>' + escape(item) + '</li>').join('') + '</ul>';

  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('#site-nav');
  const mobile = matchMedia('(max-width: 760px)');
  if (menu && nav) {
    const setMenu = (open) => {
      menu.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    };
    menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (event) => {
      if (mobile.matches && event.target.closest('a')) {
        const link = event.target.closest('a');
        const target = link.getAttribute('href').startsWith('#') && document.getElementById(link.hash.slice(1));
        setMenu(false);
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menu.focus();
      }
    });
    mobile.addEventListener('change', () => setMenu(false));
    document.documentElement.classList.add('has-menu');
  }

  const themeButton = document.querySelector('.theme-button');
  const preference = matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = () => document.documentElement.dataset.theme ?? (preference.matches ? 'dark' : 'light');
  const syncTheme = () => themeButton.setAttribute('aria-pressed', String(currentTheme() === 'dark'));
  if (themeButton) {
    themeButton.hidden = false;
    syncTheme();
    preference.addEventListener('change', syncTheme);
    themeButton.addEventListener('click', () => {
      const theme = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      syncTheme();
      try { localStorage.setItem('portfolio-theme', theme); } catch { /* Session theme still applies. */ }
    });
  }

  const { contact } = window.PORTFOLIO;
  document.querySelectorAll('[data-profile-links]').forEach((element) => {
    const email = element.hasAttribute('data-email') ?
      '<a class="text-link" href="mailto:' + escape(contact.email) + '">Email</a>' : '';
    element.innerHTML = external(contact.github, 'GitHub') + external(contact.linkedin, 'LinkedIn') + email;
  });

  return { escape, projectUrl, external, tags };
})();
