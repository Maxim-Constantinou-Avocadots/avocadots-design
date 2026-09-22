/* Shared by careers.html and every role page. Each block is guarded on the
   elements it needs, so one file covers both. */
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

  /* ---- file inputs: show the chosen filename --------------------------- */
  document.querySelectorAll('.cr-file input[type=file]').forEach(input => {
    const wrap = input.closest('.cr-file');
    const name = wrap.querySelector('.cr-file-name');
    const cta = wrap.querySelector('.cr-file-cta');
    input.addEventListener('change', () => {
      const file = input.files && input.files[0];
      wrap.classList.toggle('has-file', !!file);
      name.textContent = file ? file.name : name.dataset.empty;
      cta.textContent = file ? 'Replace' : 'Choose file';
      clearError(wrap);
    });
  });

  /* ---- application form ------------------------------------------------ */
  const form = document.getElementById('rl-form');
  if (!form) return;
  const result = document.getElementById('rl-result');

  // field key -> the message shown when it is empty or malformed
  const RULES = [
    ['ap-first', 'Please enter your first name.'],
    ['ap-last', 'Please enter your last name.'],
    ['ap-phone', 'Please enter a phone number we can reach you on.'],
    ['ap-email', 'Please enter a valid email address.'],
    ['ap-why', 'Tell us what interests you about joining — a couple of lines is plenty.'],
    ['ap-cv', 'Please attach your CV.'],
    ['ap-cl', 'Please attach a cover letter.'],
  ];

  function shell(el) { return el.closest('.cr-field') || el.closest('.cr-file'); }

  function clearError(wrap) {
    if (!wrap) return;
    wrap.classList.remove('is-bad');
    const note = wrap.querySelector('.cr-error');
    if (note) note.remove();
    const field = wrap.querySelector('input,textarea');
    if (field) field.removeAttribute('aria-invalid');
  }

  function setError(el, message) {
    const wrap = shell(el);
    clearError(wrap);
    wrap.classList.add('is-bad');
    el.setAttribute('aria-invalid', 'true');
    const note = document.createElement('span');
    note.className = 'cr-error';
    note.id = el.id + '-error';
    note.textContent = message;
    el.setAttribute('aria-describedby', note.id);
    wrap.appendChild(note);
  }

  function invalid(el) {
    if (el.type === 'file') return !(el.files && el.files.length);
    if (!el.value.trim()) return true;
    // the type=email check is the browser's, so it stays consistent with the UA
    return el.type === 'email' && !el.checkValidity();
  }

  // clear a field's error as soon as the person starts fixing it
  RULES.forEach(([id]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => { clearError(shell(el)); result.hidden = true; });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    let first = null;
    RULES.forEach(([id, message]) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (invalid(el)) {
        setError(el, message);
        if (!first) first = el;
      } else {
        clearError(shell(el));
      }
    });

    if (first) {
      result.hidden = true;
      // scroll the shell, not the hidden file input, so the error is on screen
      shell(first).scrollIntoView({ block: 'center', behavior: 'smooth' });
      first.focus({ preventScroll: true });
      return;
    }

    result.replaceChildren();
    const heading = document.createElement('strong');
    heading.textContent = 'Preview complete — your application looks ready.';
    const detail = document.createElement('p');
    detail.textContent = 'Nothing has been sent. In the live website, this step would submit your application and show a confirmation.';
    result.append(heading, detail);
    result.hidden = false;
    result.scrollIntoView({ block: 'center', behavior: 'smooth' });
  });
})();
