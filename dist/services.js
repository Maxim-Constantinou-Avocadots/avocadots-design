(() => {
  const nav = document.querySelector('.header');
  const menu = document.querySelector('.menu-toggle');
  if (menu) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.firstChild.textContent = open ? 'Close ' : 'Menu ';
      menu.querySelector('span').textContent = open ? '−' : '+';
      nav.classList.toggle('menu-open', open);
    });
    document.querySelectorAll('#main-nav a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('menu-open'); menu.setAttribute('aria-expanded', 'false');
      menu.firstChild.textContent = 'Menu '; menu.querySelector('span').textContent = '+';
    }));
  }
  const dropdown = document.querySelector('.nav-dropdown');
  if (dropdown) document.addEventListener('click', event => { if(!dropdown.contains(event.target)) dropdown.open = false; });
  document.addEventListener('keydown', event => {
    if(event.key !== 'Escape') return;
    document.querySelectorAll('.nav-dropdown[open]').forEach(x => x.open = false);
    if(nav && nav.classList.contains('menu-open')) { menu.click(); menu.focus(); }
  });
  const faqs = Array.from(document.querySelectorAll('.faq-list details'));
  faqs.forEach(item => item.addEventListener('toggle', () => {
    if(item.open) faqs.forEach(other => { if(other !== item) other.open = false; });
  }));
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const targets = document.querySelectorAll('.svc-copy, .svc-detail, .section-heading, .project-link, .faq-intro, .svc-close-inner');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold:0.08});
    targets.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
    document.documentElement.classList.add('motion-ready');
  }
})();
