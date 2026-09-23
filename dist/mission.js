/* Mission page: the shared shell nav only — the page is all static content. 
   The Growth Engine diagram is pure CSS + inline SVG, so it needs no script. */
(() => {
  /* ---- shared shell nav ------------------------------------------------ */
  const header = document.querySelector('.header');
  const menu = document.querySelector('.menu-toggle');
  if (header && menu) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.firstChild.textContent = open ? 'Close ' : 'Menu ';
      menu.querySelector('span').textContent = open ? '−' : '+';
      header.classList.toggle('menu-open', open);
    });
  }
  const dropdown = document.querySelector('.nav-dropdown');
  if (dropdown) document.addEventListener('click', e => { if (!dropdown.contains(e.target)) dropdown.open = false; });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.nav-dropdown[open]').forEach(x => x.open = false);
    if (header && header.classList.contains('menu-open')) { menu.click(); menu.focus(); }
  });
})();
