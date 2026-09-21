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

  const chips = Array.from(document.querySelectorAll('.wk-chip'));
  const cards = Array.from(document.querySelectorAll('.wk-card'));
  const count = document.querySelector('.wk-count');
  const empty = document.querySelector('.wk-empty');
  const grid = document.querySelector('.wk-grid');
  if (!chips.length || !cards.length) return;
  let sector = 'all';

  function label() {
    const chip = chips.find(c => c.dataset.sector === sector);
    // the chip carries its count in a trailing <span>, so strip it for the label
    return chip ? chip.textContent.replace(/\s*\d+\s*$/, '').trim() : '';
  }

  function render() {
    const visible = [];
    cards.forEach(card => {
      const on = sector === 'all' || card.dataset.sector === sector;
      card.hidden = !on;
      card.classList.remove('is-wide');
      if (on) visible.push(card);
    });
    const shown = visible.length;
    // two columns: an odd result leaves an orphan, so run the last card wide
    if (shown % 2 === 1) visible[shown - 1].classList.add('is-wide');
    empty.hidden = shown > 0;
    grid.hidden = shown === 0;
    count.textContent = sector === 'all'
      ? `Showing all ${cards.length} projects`
      : `Showing ${shown} of ${cards.length} projects — ${label()}`;
  }

  chips.forEach(chip => chip.addEventListener('click', () => {
    sector = chip.dataset.sector;
    chips.forEach(c => {
      const on = c === chip;
      c.classList.toggle('is-on', on);
      c.setAttribute('aria-pressed', String(on));
    });
    render();
  }));

  render();
})();
