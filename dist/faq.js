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
  }
  const dropdown = document.querySelector('.nav-dropdown');
  if (dropdown) document.addEventListener('click', e => { if (!dropdown.contains(e.target)) dropdown.open = false; });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.nav-dropdown[open]').forEach(x => x.open = false);
    if (nav && nav.classList.contains('menu-open')) { menu.click(); menu.focus(); }
  });

  const input = document.getElementById('fq-input');
  const clear = document.querySelector('.fq-clear');
  const chips = Array.from(document.querySelectorAll('.fq-chip'));
  const items = Array.from(document.querySelectorAll('.fq-item'));
  const count = document.querySelector('.fq-count');
  const empty = document.querySelector('.fq-empty');
  const list = document.querySelector('.fq-list');
  let cat = 'all';

  // keep the original question text so highlighting never compounds
  items.forEach(it => { it.dataset.q = it.querySelector('.fq-q').textContent;
                        it.dataset.hay = (it.textContent || '').toLowerCase(); });

  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  function render() {
    const term = input.value.trim();
    const low = term.toLowerCase();
    let shown = 0;
    items.forEach(it => {
      const okCat = cat === 'all' || it.dataset.cat === cat;
      const okTerm = !low || it.dataset.hay.includes(low);
      const on = okCat && okTerm;
      it.hidden = !on;
      if (!on) { it.open = false; return; }
      shown++;
      const q = it.querySelector('.fq-q');
      q.innerHTML = low
        ? it.dataset.q.replace(new RegExp(esc(term), 'ig'), m => `<mark>${m}</mark>`)
        : it.dataset.q;
    });
    clear.hidden = !term;
    empty.hidden = shown > 0;
    list.hidden = shown === 0;
    count.textContent = shown === items.length
      ? `Showing all ${items.length} questions`
      : `Showing ${shown} of ${items.length} questions`;
  }

  input.addEventListener('input', render);
  clear.addEventListener('click', () => { input.value = ''; input.focus(); render(); });
  input.addEventListener('keydown', e => { if (e.key === 'Escape' && input.value) { input.value = ''; render(); } });
  chips.forEach(chip => chip.addEventListener('click', () => {
    cat = chip.dataset.cat;
    chips.forEach(c => { const on = c === chip; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', String(on)); });
    render();
  }));
  render();
})();
