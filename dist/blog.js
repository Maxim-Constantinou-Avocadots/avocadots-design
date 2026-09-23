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

  /* ---- filter + search -------------------------------------------------- */
  const input = document.getElementById('bg-input');
  const clear = document.querySelector('.bg-clear');
  const chips = Array.from(document.querySelectorAll('.bg-chip'));
  const cards = Array.from(document.querySelectorAll('.bg-card'));
  const count = document.querySelector('.bg-count');
  const empty = document.querySelector('.bg-empty');
  const grid = document.querySelector('.bg-grid');
  if (!cards.length) return;
  let cat = 'all';

  // keep the original title so highlighting never compounds across renders
  cards.forEach(card => {
    const link = card.querySelector('h3 a');
    card.dataset.title = link.textContent;
  });

  const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  function render() {
    const term = input.value.trim();
    const low = term.toLowerCase();
    let shown = 0;

    cards.forEach(card => {
      const okCat = cat === 'all' || card.dataset.cat === cat;
      const okTerm = !low || card.dataset.hay.includes(low);
      const on = okCat && okTerm;
      card.hidden = !on;
      card.classList.remove('is-lead');
      // rewrite the title on every card, hidden ones too: a card that is
      // filtered out mid-search otherwise keeps its stale <mark> markup
      const link = card.querySelector('h3 a');
      link.innerHTML = (on && low)
        ? card.dataset.title.replace(new RegExp(escRe(term), 'ig'), m => `<mark>${m}</mark>`)
        : card.dataset.title;
      if (on) shown++;
    });

    // the wide lead card is a full-list treatment; a narrowed list is a plain grid
    if (cat === 'all' && !low && cards[0]) cards[0].classList.add('is-lead');

    clear.hidden = !term;
    empty.hidden = shown > 0;
    grid.hidden = shown === 0;
    count.textContent = shown === cards.length
      ? `Showing all ${cards.length} posts`
      : `Showing ${shown} of ${cards.length} posts`;
  }

  chips.forEach(chip => chip.addEventListener('click', () => {
    cat = chip.dataset.cat;
    chips.forEach(c => {
      const on = c === chip;
      c.classList.toggle('is-on', on);
      c.setAttribute('aria-pressed', String(on));
    });
    render();
  }));

  input.addEventListener('input', render);
  clear.addEventListener('click', () => { input.value = ''; input.focus(); render(); });
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape' && input.value) { e.stopPropagation(); input.value = ''; render(); }
  });

  render();
})();
