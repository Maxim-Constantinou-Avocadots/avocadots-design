# Avocadots — homepage redesign

Static prototype of the Avocadots homepage redesign. Design baseline **V0.20**.

`design.md` is the design contract: read it before changing anything visual.

## Run

```sh
cd dist && python3 -m http.server 8080
# http://localhost:8080
```

No build step. `dist/` is the site: plain HTML, one stylesheet, one script.

```
dist/
  index.html      homepage — markup for every section
  services.html   services page (shares styles.css, adds services.css)
  services.css    services page composition
  services.js     nav, FAQ and reveals for the services page
  contact.html    contact page (own cascade, scoped under #avo-contact-page)
  contact.css     contact page styles
  contact.js      chips, mobile menu, form validation (the form never sends)
  styles.css      full cascade, layered by revision (V0.8 → V0.16 blocks append at the end)
  app.js          mobile nav, FAQ accordion, award certificate modal, scroll reveals
  assets/         real brand, team, project, client, blog, award and partner artwork
```

The stylesheet is deliberately append-only per revision — later blocks override earlier
ones. Keep that order when editing.

## Partners row (V0.12)

The six platform partners render as restrained cards — a real logo tile above its name, linking to
that platform's partner directory listing.
The SVGs in `dist/assets/partners-*.svg` are third-party brand marks in full colour at
their original 1:1 ratio — do not redraw, recolour or flatten them. See `design.md` §11b.

## Notes

- Manrope loads from Google Fonts; `Arial, sans-serif` is the fallback.
- The certificate modal degrades to a direct image link without JavaScript.
- This is a review prototype, not the production Wix site.
