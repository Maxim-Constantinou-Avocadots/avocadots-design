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

  /* ---- the two lead forms ---------------------------------------------- */
  // both forms are the same two fields, so one handler drives both
  const forms = Array.from(document.querySelectorAll('.ca-form'));

  function shell(el) { return el.closest('.ca-field'); }

  function clearError(wrap) {
    if (!wrap) return;
    wrap.classList.remove('is-bad');
    const note = wrap.querySelector('.ca-error');
    if (note) note.remove();
    const field = wrap.querySelector('input');
    if (field) { field.removeAttribute('aria-invalid'); field.removeAttribute('aria-describedby'); }
  }

  function setError(el, message) {
    const wrap = shell(el);
    clearError(wrap);
    wrap.classList.add('is-bad');
    el.setAttribute('aria-invalid', 'true');
    const note = document.createElement('span');
    note.className = 'ca-error';
    note.id = el.id + '-error';
    note.textContent = message;
    el.setAttribute('aria-describedby', note.id);
    wrap.appendChild(note);
  }

  // a phone is free-form across countries, so only require enough digits to dial
  const DIGITS = s => (s.match(/\d/g) || []).length;

  function problem(el) {
    const v = el.value.trim();
    if (el.type === 'email') {
      if (!v) return 'Please enter your email so we can send the plan.';
      // the type=email check is the browser's, so it matches what the UA accepts
      return el.checkValidity() ? '' : 'That email doesn’t look right — check for a typo.';
    }
    if (!v) return 'Please enter a phone number we can reach you on.';
    return DIGITS(v) >= 7 ? '' : 'That number looks too short — include the area or country code.';
  }

  forms.forEach(form => {
    const inputs = Array.from(form.querySelectorAll('input'));
    const result = form.querySelector('.ca-result');

    inputs.forEach(el => el.addEventListener('input', () => {
      clearError(shell(el));
      result.hidden = true;
    }));

    form.addEventListener('submit', event => {
      event.preventDefault();
      let first = null;
      inputs.forEach(el => {
        const msg = problem(el);
        if (msg) { setError(el, msg); if (!first) first = el; }
        else clearError(shell(el));
      });

      if (first) {
        result.hidden = true;
        first.focus({ preventScroll: true });
        first.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return;
      }

      result.replaceChildren();
      const heading = document.createElement('strong');
      heading.textContent = 'Preview complete — your details look ready.';
      const detail = document.createElement('p');
      detail.textContent = 'Nothing has been sent. In the live website, this step would submit your request and show a confirmation.';
      result.append(heading, detail);
      result.hidden = false;
    });
  });

  /* ---- sticky CTA on small screens ------------------------------------- */
  // pointless while a form is already on screen, so it tracks both of them
  const sticky = document.querySelector('.ca-sticky');
  const cards = Array.from(document.querySelectorAll('.ca-form-card'));
  if (!sticky || !cards.length || !('IntersectionObserver' in window)) return;

  const onScreen = new Set();
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target));
    sticky.hidden = onScreen.size > 0;
  }, { rootMargin: '0px 0px -12% 0px' });
  cards.forEach(c => io.observe(c));
})();
