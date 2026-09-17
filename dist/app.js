(() => {
  const nav = document.querySelector('.header');
  const menu = document.querySelector('.menu-toggle');
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
  document.addEventListener('keydown', event => {
    if(event.key !== 'Escape') return;
    document.querySelectorAll('.nav-dropdown[open]').forEach(x => x.open = false);
    if(nav.classList.contains('menu-open')) { menu.click(); menu.focus(); }
  });
  const dropdown = document.querySelector('.nav-dropdown');
  document.addEventListener('click', event => { if(!dropdown.contains(event.target)) dropdown.open = false; });
  const faqs = Array.from(document.querySelectorAll('.faq-list details'));
  faqs.forEach(item => item.addEventListener('toggle', () => {
    if(item.open) faqs.forEach(other => { if(other !== item) other.open = false; });
  }));
  const dialog = document.querySelector('.award-dialog');
  let awardTrigger = null;
  const awardInfo = {
    gold: {title: 'Gold — Marketing Achievement Awards 2025', caption: 'Category 1.3 · Occasion-based marketing'},
    silver: {title: 'Silver — Marketing Achievement Awards 2025', caption: 'Category 1.8 · Limited Budget, Big Idea Award'}
  };
  document.querySelectorAll('[data-award]').forEach(link => link.addEventListener('click', event => {
    if(typeof dialog.showModal !== 'function') return;
    if(event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const info = awardInfo[link.dataset.award];
    awardTrigger = link;
    dialog.querySelector('h2').textContent = info.title;
    dialog.querySelector('img').src = link.href;
    dialog.querySelector('img').alt = info.title + ' — ' + info.caption;
    dialog.querySelector('.award-dialog-caption').textContent = info.caption;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if(event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    awardTrigger?.focus({preventScroll:true});
  });
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const sections = document.querySelectorAll('.section-heading, .project-link, .studio-copy, .engine-head, .engine-copy, .engine-disciplines, .blog-link, .people-card');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold:0.08});
    sections.forEach(el => { el.classList.add('reveal'); observer.observe(el); });
    document.documentElement.classList.add('motion-ready');
  }
})();
