/* Footer — the studio clock.
   Loaded from inside the <footer> block on every page that carries one, so the
   generator owns it and no page's own script file has to know about it.
   Degrades to the static "Nicosia, Cyprus" already in the markup. */
(() => {
  const el = document.querySelector('[data-clock]');
  if (!el) return;
  let fmt;
  try {
    // Europe/Nicosia rather than a fixed offset, so DST is handled for us
    fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Europe/Nicosia'
    });
    fmt.format(new Date());
  } catch (e) {
    return;                       // no IANA tz data: keep the static fallback
  }
  const tick = () => { el.textContent = 'It’s ' + fmt.format(new Date()) + ' in Nicosia'; };
  tick();
  setInterval(tick, 30000);
})();
