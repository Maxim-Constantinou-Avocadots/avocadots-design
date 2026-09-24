# Avocadots — homepage redesign

Static prototype of the Avocadots homepage redesign. Design baseline **V0.39**.

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
  branding.html   branding service page (shares styles.css, adds branding.css)
  faq.html        FAQ with search + category filter (faq.css, faq.js)
  work.html       Our Work — 13 projects, sector filter (work.css, work.js)
  about.html      About — studio story, team, timeline, FAQ (about.css, about.js)
  mission.html    Mission — belief, five values, the growth engine (mission.css, mission.js)
  chatgpt-ads.html  ChatGPT Ads Cyprus landing page (chatgpt-ads.css, chatgpt-ads.js)
  blog.html       Blog index — 20 posts, search + category filter (blog.css, blog.js)
  careers.html    Careers — values, life here, hiring steps, open roles
  role-*.html     one page per open role: full description + application form
  careers.css     careers + role page composition (shared by both)
  careers.js      nav, file-input faces, and the application form's validation
  work.css        Our Work page composition
  work.js         nav + sector filter; widens the last card when the count is odd
  branding.css    branding page composition
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
- Project thumbnails are prefixed `work-` so they never collide with the homepage's
  `projects-*.webp` files. See `design.md` §9g.
- Role pages are generated from a `ROLES` list; adding an entry emits its card and its page.
  The application form is client-side only and says so on submit. See `design.md` §9h.
- Blog post categories are an editorial map in the generator, not scraped — the live site does
  not publish them per post. See `design.md` §9i.
- The About page keeps the redesign section for section; only its hero was replaced, so the page
  opens on the same forest hero as the rest. See `design.md` §9j.
- The Mission page reuses the canonical Growth Engine component from `styles.css` — do not
  restyle it there; `design.md` §7 owns its geometry. See §9k.
- The ChatGPT Ads page is a lead-gen layout: the form must stay inside the fold, and the copy
  doc's closing "GEO Notes" are author's notes, never page content. See §9l.
