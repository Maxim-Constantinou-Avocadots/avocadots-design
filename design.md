# Avocadots — Design Continuation Guide

**Design baseline:** V0.25 · 21 September 2026  
**Purpose:** Continue the same Avocadots design concept in another LLM, design tool, or codebase. This is a design contract and implementation reference, not a request to redesign the brand.

## 1. Start here

You are continuing an existing, iteratively refined agency website. Make the requested change within this visual language. Preserve the surrounding design, working interactions, real content, and responsive behaviour.

**The direction in one sentence:** A clean, confident design studio website using forest green, white, brand yellow, restrained green accents, expressive Manrope typography, generous spacing, and a few purposeful surfaces.

The user wants something visually interesting and unmistakably Avocadots, but easy to understand immediately. “Wow” should come from composition, typography, contrast, real work, and carefully chosen details. It should not mean adding more decoration or interactions.

### Priority when decisions conflict

1. The user's newest explicit instructions.
2. The specific visual direction and feedback documented here.
3. The latest implementation and its final CSS cascade.
4. Earlier drafts, original live pages, and generic design advice.

Do not interpret a new reference as permission to redesign the whole site. Change the section requested. Keep existing page sections unless the user explicitly asks to remove or restructure them.

### References and source baseline

- Current redesign: https://avocadots-homepage-redesign.maxim200914.chatgpt.site
- Original business website: https://www.avocadots.com/
- Original About page: https://www.avocadots.com/about-avocadots-design-studio
- Earlier preferred About direction: https://www.avocadots.com/about-avocadots-design-studio-1?rc=test-site
- Companion reference: `avocadots-style-guide.html`, design revision V0.10.
- Current homepage source: `dist/index.html`, `dist/styles.css`, `dist/app.js`, `dist/assets/` within the `avocadots-homepage` project.
- Source commit for this snapshot: `26b6df9e15495746995edea77ca3bab931bcd60c` (V0.10 baseline, pre-dating this repository).

The redesign is a separate review website. It is not the production Wix site. Original-site links are content/navigation references; do not copy older visual inconsistencies back into the redesign.

This file includes the exact current homepage stylesheet. Real images, fonts, and complete page markup are not embedded. For pixel-exact continuation of the entire site, also provide the source files and assets listed above. For extending the concept to a new section, the rules here are sufficient to establish the direction.

## 2. What the user actually liked

### Strongest explicit visual reference: Contact page

The user specifically praised the Contact design as on brand and interesting. Its visible composition includes:

- A deep forest background with a restrained green wash.
- Large, left-aligned white typography.
- A yellow concluding phrase and a small green full stop.
- The headline: “Big ideas. Real people. Let’s talk.”
- Short supporting copy, with generous space around it.
- A substantial white form panel with rounded corners and a thin green top edge.
- Clean form fields and service choices that have an actual purpose.

Use this as the clearest personality reference. Translate its typography, contrast, spacing, and surfaces to the section's purpose. Do not copy its form into unrelated sections or turn every section into the same two-column panel.

### Growth Engine: approval and latest refinement

The user rejected a diagram with overlapping circles, a central logo hub, boxed selectors, and changing explanations. The user then explicitly liked the simpler version: a left introduction and three clean, visible rows on the right.

Their latest request was to make that clean version **a little more interesting with subtle cards**, without going over the top.

The current V0.10 implementation answers that request with three vertically stacked, lightly tinted forest cards. The clean hierarchy and concise copy are retained. This is the latest working baseline; do not claim the user has separately approved its final rendered result.

### Awards: current direction

The current awards treatment adopts the Contact page's visual language: forest section, large white/yellow heading, and one white panel with a green top edge containing both real certificates. This is the latest implementation, not a separate explicit final approval.

## 3. Rejected directions — do not reintroduce

| Rejected treatment | Why it failed | Continue with |
| --- | --- | --- |
| Metallic gold/silver text, trophy-like colour treatment, cursor spotlight | Felt off brand and AI-generated | Solid brand yellow; Gold/Silver remain award names only |
| Huge stretched or heavily tilted certificate artwork | Looked broken and made the evidence hard to read | Original 1:1 ratio, upright artwork, full-size viewer |
| Large yellow/forest split awards box with oversized year, repeated labels and extra CTA | Felt information-heavy | One heading, one shared award issuer/year, two simple award entries |
| Bare light-background certificate gallery | Clean but felt cheap and lacked personality | Contact-inspired forest/white contrast and a composed panel |
| Overlapping Growth Engine circles, hub, selector boxes, extra tags and descriptions | Visually messy and harder to understand | Three immediately visible disciplines, now connected by the V0.16 diagram — see §7. Connections are wanted; mess is not |
| Generic three-card process strip with arrows | Felt generic | Current two-column composition with vertically stacked, quiet cards |
| Decorative grids covering whole sections | Can compete with the content | Current Growth Engine and awards have no decorative grid |
| Adding more labels, badges, icons and controls to make things “premium” | Increases visual and information density | Better proportions, hierarchy, spacing, and restrained surfaces |

The user does **not** reject all cards or all circular controls. They reject clutter. Small useful arrow controls are part of the site. The latest Growth Engine request explicitly asks for restrained cards. Avoid blanket rules that contradict that nuance.

## 4. Colour system

### Current implementation tokens

| Token | Value | Role |
| --- | --- | --- |
| Forest | `#1C3830` | Main brand surface and text on light backgrounds |
| Deep forest | `#122C24` | Darker supporting surfaces, including certificate viewer |
| Brand yellow | `#E9C334` | Primary actions, key headline phrase, small purposeful accents |
| Original brand green | `#86BD42` | Panel top edges, small brand details, green punctuation |
| Supporting light lime | `#A5D65B` | Existing homepage hero emphasis, Services surface, selected supporting blocks |
| Paper | `#EEF0EC` | Main light page background |
| White | `#FFFFFF` | Contact-inspired panels and high-contrast display text |
| Muted light-surface text | `#58695E` | Secondary text on paper/white |
| Muted dark-surface text | `#CFDDD2` | Body text on forest |
| Light-surface divider | `#1C38302B` | Fine separators on light backgrounds |
| Dark-surface divider | `#FFFFFF30` | Fine separators on forest |

Broader brand colours `#006D68` and `#253787` exist in the supplied brand context, but are not invitations to introduce new teal/blue sections into this homepage concept. Use the established current palette unless specifically asked.

### Colour rules

- Forest is the anchor. Yellow draws attention. Green supports the brand.
- On dark sections, body copy is a quiet light green-white, not a low-contrast muddy grey.
- On light surfaces, use forest text rather than black.
- Keep a deliberate distinction between original green and the existing light-lime tint.
- Do not add metallic palettes, purple accents, rainbow effects, or unrelated luxury colours.
- A soft, low-opacity green background wash is allowed where it follows the Contact reference. Avoid bright blobs or spotlights behind text.

## 5. Typography

Use **Manrope** throughout, with `Arial, sans-serif` as fallbacks. Load weights 400, 500, 600, 700 and 800 as currently configured. Do not replace it with a fashionable serif, condensed display face, or a different UI font.

| Use | Current desktop specification |
| --- | --- |
| Homepage H1 | `clamp(64px, 8.05vw, 128px)`, weight 600, line-height 1.02, letter-spacing −0.075em |
| General section H2 | `clamp(40px, 5vw, 78px)`, weight 500, line-height 1.08, letter-spacing −0.065em |
| Growth Engine heading | `clamp(40px, 4.4vw, 68px)`, weight 500, line-height 1.1, letter-spacing −0.055em |
| Growth Engine card title | `clamp(30px, 2.65vw, 40px)`, weight 500, line-height 1.15, letter-spacing −0.045em |
| Awards display heading | `clamp(50px, 5.6vw, 86px)`, weight 600, line-height 1.05, letter-spacing −0.065em |
| Main body | Usually 16–18px, line-height 1.65–1.8 |
| Eyebrow | Usually 12–13px, uppercase, restrained tracking |
| Secondary metadata | Usually 12–13px |

Large headings provide the expression; supporting text provides clarity. Keep paragraphs short and limit line length to approximately 350–510px depending on the column. Avoid tight tracking on body text.

For new UI, prefer at least 14px for regular control labels and 16px for body copy. Some inherited narrow-screen metadata in the exact stylesheet is smaller; do not treat those exceptions as the default for new components. Make sure headings do not collide or overflow at narrow widths or enlarged text settings.

## 6. Layout, spacing and surfaces

### Shared layout

```css
.wrap {
  max-width: 1600px;
  padding-inline: clamp(24px, 4.5vw, 80px);
  margin-inline: auto;
}
```

The 1600px limit includes padding because the site uses `box-sizing: border-box`. Full-bleed backgrounds contain an inner `.wrap`; their text still aligns with the rest of the page.

- General section vertical padding: 120px desktop, 96px at/below 1180px, 72px at/below 720px.
- Mobile gutter: 24px; below 380px: 20px.
- Section heading-to-content gap: usually 64px desktop and 36px mobile.
- A small 4/8px-based spacing family works well: 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 88, 104, 120px. Component-specific values below take precedence.

### Radius hierarchy

| Element | Typical current radius |
| --- | --- |
| Main CTA | 8px |
| Certificate/image frame | 10–14px |
| Growth Engine card | 16px desktop, 14px mobile |
| Large Contact-inspired white panel | 28px desktop, 22–24px on smaller screens |
| Small functional arrow control | Circular |

Do not give every component a large pill shape. Soft corners should belong to a consistent family.

## 7. Canonical Growth Engine component — current V0.38

Used on `index.html` and `mission.html`. Markup for both is emitted by one
generator, so **edit the generator, not the two pages**. CSS is the `V0.35` block at the end of
`styles.css`, plus the `V0.36` / `V0.37` / `V0.38` blocks after it.

### Why V0.16 was replaced

V0.16 floated three cards at staggered offsets, wired them to a flat yellow disc with 1px curves,
and enforced a strict geometry contract (viewBox `1200 600`, `aspect-ratio:2/1`, node percentages,
a 1024px stacked floor) that kept breaking — nodes escaped the container at 951–1023px, the
`:nth-child` translate rules leaked into the stacked layout, and it had to be re-fixed repeatedly.

It was rejected five times. The styling was only half the problem. **The diagram showed that the
three disciplines connect, and never what the client gets** — three nouns wired to a bubble
labelled "Growth". A reader learned nothing about the offer.

### What V0.35 is

One contained panel read left to right: **what goes in → the engine → what comes out.**

| Column | Content |
| --- | --- |
| What goes in | Brand / Website / Marketing, numbered, copy unchanged from V0.16 |
| The engine | Lime panel: "One team. One system." + "One point of contact, from the first call to the numbers afterwards." |
| What comes out | **Clarity / Conversion / Momentum**, yellow with ticks |

The outcomes are the mission statement's own promise — "delivers clarity, conversion, and
long-term momentum" — and each description is that page's own wording. **This is the part that
makes the section state the offer; do not replace the outcomes with more nouns.** The closing
line is the About page's verbatim origin sentence about separate vendors.

Colour codes the direction: **lime = inputs, yellow = outputs.** Keep it.

### V0.36–V0.37 — the finish pass

V0.35 was accepted as a concept and rejected as a finished thing: *"I dont like the lines, the
green box looks plain. The section looks better as a concept but looks unfinished still."*
Three complaints, three fixes:

**1. No connectors at all.** The straight-line bus SVGs are gone. However they are drawn,
hairlines between boxes read as a flowchart, and the section is not a flowchart. Direction is
carried by **one arrow badge in each gap** — a lime circle before the core, a yellow one after it,
so the badge itself carries the input/output colour code. **Do not reintroduce connectors**, in
any form, curved or straight.

**2. The core holds an object, not just type.** Concentric rings live on `.eng-core`'s own
`background-image` (`repeating-radial-gradient(circle at 50% 38%, …)`) so they bleed past the
box's edges instead of sitting inside it as a contained graphic — that bleed is what stops it
reading as a slab. At their centre sits the studio mark on a solid forest disc with a soft white
ring. A white radial highlight sits over the lime gradient for depth.

The mark on lime must be the **dark forest variant** (the first swatch in `mark.png`) — it is
applied as `filter:brightness(0) invert(1)` over a `#1c3830` disc, so the glyph is knocked out
white on dark, not lime on lime.

**3. The "unfinished" feel** came from an untouched rounded rectangle. The panel now has a
lime→yellow hairline across its top edge (`.eng-panel::before`), each stage label sits on a rule,
and the dead space inside is tightened.

Below 950px the panel goes single-column and the arrow badges rotate 90° to point down the page,
so left-to-right becomes top-to-bottom. They need `justify-self:center` — **in a grid `align-self`
is the block axis** and will not centre them horizontally; that was a real bug in the first pass.

### V0.38 — the cascade repair, and the rule it exists for

V0.36 re-declared `.eng-panel{grid-template-columns: …five tracks… }` **outside a media query**,
i.e. after the V0.35 `@media(max-width:950px)` that collapses the panel. A media query adds no
specificity, so source order won and **the panel stayed in its desktop grid at every width**:
below ~950px the five tracks squeezed to ~60px each, the core became a vertical sliver and the
outcome cards ran off the viewport. V0.38 re-states the stacked overrides.

> **Rule for `styles.css`:** this file is append-only, so when a later block restyles a component
> that already has responsive overrides, **re-state those overrides in the same block**. A bare
> appended declaration silently outranks every media query above it.

### Verification

The render check asserts **no `.eng-node`, `.eng-core`, `.eng-arrow`, `.eng-stage` or
`.eng-core-glyph` escapes `.eng-panel`**, that nothing under `.growth` exceeds the viewport, that
the document does not scroll horizontally, and that the core's mark actually loaded — at
1920 / 1440 / 1180 / 1024 / 950 / 720 / 540 / 380 / 320, on both pages. Keep that assertion if the
component changes again.

Re-tested against the V0.38 bug deliberately reintroduced: the sweep fires at 390 (12 findings,
both escapes and viewport overflow) but is **clean at 720**, where the squeezed five-column
layout still fits geometrically while being obviously wrong to look at — a sliver of a core
between two narrow columns. **The sweep is a floor, not a review.** Look at the rendered section
at a mid width as well.

## 8. Canonical Contact-inspired awards component

### Structure

- Forest full-width section with content constrained by the shared container.
- Left: small green dot/eyebrow, large heading, one short paragraph.
- Right: one white panel with a 4px original-green top border.
- Both real certificates are visible within that panel.
- One shared issuer title and year, not repeated for each award.

### Current content

**Eyebrow:** A little recognition

**Heading:**

> Fresh ideas.  
> Good work.  
> Recognised.

First two lines white; final word yellow; final full stop original green.

**Description:** For the ideas, the craft, and the people who make it happen.

**Panel heading:** Cyprus Marketing Achievement Awards  
**Year:** 2025

| Award | Visible caption | Full category in certificate/viewer |
| --- | --- | --- |
| Gold | Occasion-based marketing | Category 1.3 · Occasion-based marketing |
| Silver | Limited Budget. Big Idea. | Category 1.8 · Limited Budget, Big Idea Award |

These are marketing awards. Do not relabel them as website-design awards or invent additional recognition.

### Exact treatment

- Desktop columns: `1fr 1.05fr`, gap `clamp(40px, 5vw, 80px)`.
- Vertical section padding: 88px desktop, 76px tablet, 60px mobile.
- White panel: 28px radius, 38px padding, green top border 4px.
- Certificates: two equal columns, 26px gap, upright square images, 10px radius.
- Award titles: 25px, weight 500. Categories: 15px.
- Small yellow arrow indicates that the whole certificate/caption opens.
- Below 950px: panel follows the introduction.
- Below 540px: each award becomes a compact image-and-caption row; use one divider between rows.
- Background wash: `radial-gradient(ellipse at 9% 100%, #86bd421b, transparent 58%)`. This is intentionally faint.

### Certificate behaviour and image safety

```css
.recognition-art img {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  object-fit: contain;
}
```

A previous implementation retained a fixed 1000px image height while shrinking the width. It visibly stretched the certificates. Never reintroduce that bug. Width/height HTML attributes can describe intrinsic dimensions, but responsive CSS must control the displayed height correctly.

Use the original certificates, not generated alternatives or reconstructed logos. Opening a certificate uses a native modal with Close, Escape, backdrop dismissal, scroll lock, and focus return. Without JavaScript, the link opens the image directly. Do not remove these working behaviours for a visual refinement.

## 9. Contact and form extensions

When extending the Contact design, retain the screenshot's hierarchy: a human introduction beside a focused white form panel. Use the established palette and rounded panel language, not an unrelated dashboard theme.

- Keep labels visible; placeholders do not replace them.
- Distinguish required and optional fields clearly.
- Service-choice chips may be rounded because they are genuine controls.
- Use quiet pale field backgrounds, fine borders, consistent heights, and obvious focus states.
- Make the primary submit action unmistakable and use actual submission/error states when wiring a backend.
- Never invent response-time promises, reviews, conversion figures, or a working form backend.
- Do not add chips or input-like boxes to purely informational sections just to repeat the form's appearance.

The exact homepage CSS in the appendix does not include the separate Contact form implementation. Its role here is the user-approved visual reference, not a claim of pixel-identical form specifications.

## 9b. Contact page — as built

The Contact page was supplied as a ChatGPT "Design guide V0.4" review harness containing an
About page (`avo-*`), this Contact page (`ac-*`), a desktop/mobile switch and a style guide, with
all images inlined as base64 (962KB). Only the Contact page was extracted.

- `dist/contact.html`, `dist/contact.css`, `dist/contact.js` — self-contained, every rule scoped
  under `#avo-contact-page`, so it shares nothing with the homepage cascade and cannot regress it.
- New assets: `team-andreas.png`, `team-paris.png`, `team-olga.png` (cut-out headshots).
  The nav logo and studio photo in the source were **byte-identical** to the existing
  `brand-mark.png` and `team.jpg`, so they are reused rather than duplicated. This is why the
  page is a few KB rather than 962KB.

### Sections

Forest hero (eyebrow, `Big ideas. / Real people. / Let's talk.` with the yellow last line and
green full stop, lead, crew panel with three portraits, direct-email row) beside the white form
panel with its green top edge · light `What happens after hello?` 01/02/03 steps · yellow
`Prefer a more direct hello?` panel beside the studio photo · three-question FAQ · slim footer.

### The form

It meets §9 without exception: every field labelled, required marked `*` and optional marked in
words, chips are real `aria-pressed` buttons, `Not sure yet` is mutually exclusive with the other
five, validation uses `setCustomValidity` with real messages, and the result region is
`role="status" aria-live="polite"`. It states plainly that it does not send:
**"Interactive design preview. This form does not send an enquiry."** Do not wire a fake backend
or add a response-time promise.

`Prefer to book a call?` points at a **real** Calendly booking
(`calendly.com/avocadots-design-studio/free-digital-consultation`) — verified in the source, not
assumed. Email, phone and address match the homepage footer exactly.

### Fixed on integration

- `.ac-logo` and `.ac-footer-brand img` had no colour treatment, so the dark `brand-mark.png`
  rendered dark-on-dark in both the nav and the footer and was effectively invisible. They now
  carry `filter:brightness(0) invert(1)`, which is what the homepage's `.brand img` does to the
  identical file.
- Home / Our Work / Blogs in the nav pointed at the live Wix site; they now point at this build
  so the prototype is navigable. The homepage's six `avocadots.com/contact` links now point at
  `contact.html`.

### Known divergences from the homepage — not yet resolved

These are real inconsistencies, left as the user's call rather than silently reconciled:

| Divergence | Homepage | Contact page |
| --- | --- | --- |
| Masthead | full-width bar, `1px` bottom hairline | inset rounded pill, translucent, blurred |
| Brand lockup | mark + `avocadots` wordmark | mark only |
| Numbered triad | small **yellow text** index (§7 forbids badges) | grey circular **badges** |
| Service names | `Web Design`, `E-Commerce`, `CRM`, plus `GEO` | `Web design`, `E-commerce`, `CRM integration`, **no GEO** |

Mobile navigation opens at/below 720px on both pages, which matches §13.

## 9c. Services page — as built

A full redesign of `avocadots.com/services`, which the user described as looking "like a Canva
PDF". **All copy is the real content, scraped from the live service pages — nothing was
invented.** The live services page details five services; **GEO is a sixth**, present in the nav
but absent from that page, so its copy came from `/generative-engine-optimisation`.

### Why it shares the homepage cascade

`services.html` loads `styles.css` **and** `services.css`. The masthead, footer, `.button`,
`.eyebrow`, `.wrap`, `.section-heading`, `.project-grid` and `.faq-list` are therefore literally
the same components as the homepage, not lookalikes. This is the opposite of the contact page's
scoped approach and deliberately so — it removes the divergence problem recorded in §9b rather
than repeating it. `services.js` mirrors `app.js` minus the award modal, which would throw on a
page with no `.award-dialog`.

### Composition

- **Hero** — the live page's own sentence set at display scale (`clamp(34px,4.5vw,70px)`) with
  `expertise` and `works` in lime, which is how the live page emphasises them.
- **Index** — all six services as a 3-column jump grid, doubling as the page's first visual beat
  and its table of contents. 3 → 2 → 1 columns.
- **Six service blocks**, surfaces alternating `paper / forest` (verified `LDLDLD`). Each is
  sticky copy left (number, headline, lead, real "View service" link) and detail right (body,
  then deliverables as a two-column dotted checklist). The alternation is what stops six blocks
  reading as six identical panels; do not flatten it to one surface.
- **Work** — four real projects on `#e0e6dc`, reusing `.project-grid`.
- **FAQ** — eight real questions, native `<details>`, homepage FAQ styling.
- **Close** — deep-forest band with the contact CTA and the real Calendly link.

### Content notes

- The live page's work strip lists Hadjiloucas, for which no project image exists in
  `dist/assets/`. Limassol Agora was used in its place rather than shipping a broken image or
  inventing artwork. **Supply a Hadjiloucas project image and it should be swapped back.**
- The ninth live FAQ ("What is the best digital agency in Cyprus?") was left out: it is an
  SEO-shaped answer that reads oddly in a designed FAQ. It is not deleted content — say the word
  and it goes back.
- Service links point at the real live service pages; the CTA points at `contact.html`.

### Cross-linking

The three pages now interlink: the homepage dropdown gains `All services`, the contact page's
`Services` points here, and this page's `Home`/`Our Work`/`Blogs` point back. All 12 internal
links and every in-page anchor verified to resolve.

Measured in Chromium across 16 widths from 1920px to 320px: no overflow, no broken images, no
element wider than its viewport, no stuck reveals.

### V0.19 — the service name is the page

V0.18 was reported as not stunning enough. Two causes, both measured, and both the same faults
that made the growth engine invisible (§7):

1. **The service name was a 12px eyebrow** while the headline sentence took 60px. `Branding`,
   `Web Design`, `E-Commerce` — the one word a visitor scans for — were the smallest thing in
   the block. The name now runs `clamp(46px,7.4vw,124px)` and the headline becomes the
   supporting statement beneath it at `clamp(21px,1.9vw,29px)`.
2. **The page carried one `<img>` before the work strip, and it was the header logo.** Hero plus
   six blocks was pure type.

### Platform marks — evidence, not ornament

Each service now shows the platforms **its own copy already names**, using the real brand SVGs
from the partners row:

| Service | Marks | The sentence that justifies it |
| --- | --- | --- |
| Web Design | Wix Studio | "high-performing **Wix** websites" |
| E-Commerce | Shopify | "we design **Shopify** stores" |
| Digital Marketing | Meta, Google Ads, TikTok | "From **Meta** to **Google**, **TikTok**, and LinkedIn" |
| CRM | GoHighLevel | "we set up and customize **GoHighLevel**" |

**The rule: no logo appears unless that service's own text names that platform.** Branding and
GEO therefore carry none — Branding names no platform, and GEO names ChatGPT, Gemini and
Perplexity, whose marks are not in `dist/assets/`. Do not add a logo to even things up, and do
not substitute a generic icon; that would turn evidence into decoration.

LinkedIn is named in the marketing copy but has no mark in the repo, so it is absent from the
row while remaining in the sentence. Add `partners-linkedin.svg` and it should join.

Measured 1920px → 320px: the name scales 124px → 37px, never overflows its column, and every
platform mark loads at every width.

### V0.20 — imagery in, prose out

The user reported the page as too text-heavy and too busy, and asked for imagery. Measured
before: **631 words across the six blocks, 48 bullet items, and not one picture.** Each block
stacked *three* overlapping prose layers — headline, lead, body paragraph — before a single
bullet, then an eight-item bordered checklist.

- The headline and body paragraph are **cut**. Once the name runs at display scale it *is* the
  headline, so the other two were saying the same thing twice more. One sentence per service now.
  **334 words, down from 631.**
- Deliverables keep every item but become quiet pill tags instead of a bordered two-column list.
  Same information, a fraction of the visual weight.
- Blocks alternate **side as well as surface** (`.svc-flip` on the even ones), so the eye moves
  rather than tracking straight down a column.

### Every service carries a visual — and what the image may claim

| Service | Visual | Basis |
| --- | --- | --- |
| Branding | Minerva Insurance | project |
| Web Design | German Medical Institute | **their own URL taxonomy: `/web-design-projects/…`** |
| E-Commerce | Scandia | their own label for it: "Electronics Store" |
| Digital Marketing | Air Control | project |
| CRM | typographic panel, GoHighLevel mark + their own line | — |
| GEO | typographic panel, the three real prompts from their GEO page | — |

**CRM and GEO deliberately get no photograph.** Neither service produces a website, so putting a
site screenshot beside them would imply a case study that service did not make. A typographic
panel is the honest form, and it still gives the block a visual.

Captions state only the project name and its industry, both factual. **The pairing of project to
service is a placement, not a claim sourced from the user** — only Web Design is evidenced (by
their URL structure) and E-Commerce is inferred from their own industry label. If the user gives
a real mapping, swap the images; the caption markup does not need to change.

Measured 1920px → 320px: names scale 112px → 38px, no overflow, nothing wider than its viewport,
every image loads, and on stacked layouts the copy always precedes its visual (checked, because
`order` reversal would otherwise strand the heading below the picture).

## 9d. Services mega menu — V0.21

Six services could not breathe in the old 220px dropdown. The panel now spans the header width.

### Structure

- **Left**: a promo card carrying the real Growth Engine line — `Good on their own. / Better
  together.` with the second line yellow — linking to `/unified-growth`. Real copy and a real
  destination; it ties the menu to the studio's differentiator instead of inventing a slogan.
- **Right**: the six services in two columns, each an icon tile, name, and one condensed line
  from that service's own copy.
- **Foot**: `See all six services` → `services.html`.

Icons are six hand-drawn inline SVGs (24px box, `currentColor`, 1.6 stroke) — a sparkle, browser,
bag, rising bars, connected nodes, and a chat bubble with a sparkle. They are navigation aids in
a menu, which is not the badge-and-icon accretion §3 rejects; do not carry them onto the page.

### No new JavaScript

The `<details class="nav-dropdown">` element is kept, so open/close, Escape and click-outside
all still come from `app.js` / `services.js`. Verified on both pages.

### Specificity — read before editing

Two legacy rules already style this element and its links:

| Selector | Specificity |
| --- | --- |
| `.nav-dropdown>div` | (0,1,1) |
| `.nav-dropdown>div a` | (0,1,2) |
| a bare `.mega` / `.mega-item` | (0,1,0) — **loses** |

So every selector targeting the panel or a link inside it is prefixed with `.nav-dropdown` to
reach (0,2,0). **Drop the prefix and the panel renders transparent with its cards collapsed back
to plain blocks** — that exact bug appeared on the first build and was caught in rendering.

### Responsive

Two columns down to 1081px; the promo turns horizontal below 1080; at/below 720px the panel
becomes a plain list inside the collapsed mobile menu with the promo hidden. Verified 1440px →
320px: no overflow, panel never off-screen, and the icon hover
(`#86bd421f` lime → `#e9c334` yellow) fires on both pages.

## 9e. Branding service page — V0.24, matched to the live /web-design template

**V0.23 copied the web-design page's structure but not its look**, because only its text had been
extracted — the page had never been rendered. Loading it in a browser showed a completely
different visual language from the dark, left-aligned page that had been built.

### The live template, as measured

| Device | What the live page does |
| --- | --- |
| Hero | **light lime → paper vertical gradient**, faint grid, everything **centred** |
| Headline | forest on lime, title case, centred, no colour split |
| Trust bar | four **white rounded pill chips with ✓ ticks** |
| Below hero | grey client logo strip |
| Problem | paper, **centred**, a decorative curve graphic, **yellow highlighter `<mark>`s** on keywords |
| Solution | a **full-yellow section**, left-aligned heading |
| Capabilities | white pill chips **on the yellow** |
| Work | "Our Work" **right-aligned**, card grid on the yellow |
| Pillars | white pill cards left + **lime gradient panel** right |
| Closing CTA | paper, **centred**, grey words inside the headline, **forest pill button** |
| FAQ | left intro + right accordion with chevrons |

All of that is now reproduced. The page is light, not forest; centred, not left-aligned.

### Where branding differs from web design, deliberately

- The lime panel on the web page holds a ChatGPT → Avocadots → Google diagram (AI visibility).
  The branding equivalent is a **brand specimen** — the real mark, the five palette swatches,
  an `Aa` and the Manrope weight range. Honest, and the right artefact for the service.
- The work grid: only **Aircontrol** has an image in `dist/assets/`. The other five carry a
  **typographic face** on a lime-to-paper gradient rather than a reserved empty image slot, so
  the grid stays uniform and nothing reads as a missing asset. Card heights verified identical.
  Supply the five images and they drop straight into the same slot.

### The faint grid

The hero and yellow band carry the live page's faint 118px grid. §3 rejects decorative grids
**on the homepage**; this page follows the live service-page template instead. Do not carry the
grid back to the homepage.

### Three cascade bugs, all caught in rendering

1. Markup used `bw-card` while the CSS styled `.bp-card` — cards rendered with no background.
2. `.bp-card span` (0,1,1), declared later, overrode the card face's display type down to 14px
   muted. The face rule needs `.bp-card .bp-card-face>span` (0,2,1).
3. The face's 22px padding was insetting the one real photograph; `.bp-card-shot .bp-card-face`
   must reset it to 0.

Measured 1920px → 320px: no overflow, no broken images, chips 4 → 2 → 1, work 3 → 2 → 1,
FAQ 2 → 1, and all six work cards stay exactly the same height.

## 9f. FAQ page — V0.25

A redesign of `/faq`. The live page was rendered and audited first.

### What was wrong with the live page

| Fault | Detail |
| --- | --- |
| **The category rail reads as disabled** | Only `General` is dark; Web Design, Branding, Digital Marketing, E-Commerce and CRM render greyed-out, so five of six categories look dead. |
| **No search** | 33 questions with no way to find one. |
| **"More FAQs" is a dump** | ~25 SEO questions in one undifferentiated wall. |
| **No brand presence** | Grey on grey; the only colour is the Contact button. |
| **Tiny headline** | ~30px on a 1440 page. |

Two content bugs on the live page, not reproduced here:
- **"What is the best digital agency in Cyprus?" appears twice.**
- **"Which advertising services offer the best ROI for small businesses?" has no answer** — the
  text that follows it belongs to the next question.

### What this page does

- **Search** is the primary affordance: a 62px white field in the forest hero, matching against
  question *and* answer text, with live `<mark>` highlighting on the question.
- **Working category chips** with real counts — All 33 · General 8 · Web Design 4 · Branding 3 ·
  E-Commerce 4 · Marketing 10 · CRM 2 · About Avocadots 2. Selected state is forest, not grey.
- **A live result count** in an `aria-live` region, plus an **empty state** that routes to contact.
- One accordion, white cards, plus/minus icon that turns yellow when open, category tag in the
  answer. Native `<details>`, so keyboard and find-in-page still work.
- All 33 questions re-sorted into those seven categories; the "More FAQs" dump is gone.

### The `[hidden]` trap

`.fq-clear` and `.fq-list` set `display:grid`, and an author `display` **outranks the UA
`[hidden]{display:none}` rule**. The clear button therefore sat visible over an empty field and
the list stayed laid out behind the empty state. `faq.css` now opens with
`[hidden]{display:none!important}`. **Any new element that both sets `display` and is toggled
via the `hidden` property needs this.** The list bug was masked in testing because its children
were individually hidden, so it measured as zero-size.

Measured 1920px → 320px: no overflow, nothing wider than the viewport, search field never below
56px, chips wrap 1 → 4 rows. Search, filter, combined filter+search, empty state and clear all
verified. Every page's FAQ link now points here; 24 internal links resolve.

## 9g. Our Work page — V0.26, hero proof bar V0.27

A redesign of `/projects`, built as `dist/work.html` + `dist/work.css` + `dist/work.js`.
The live page was rendered first, and every one of the 13 project detail pages was read.

### What was wrong with the live page

| Fault | Detail |
| --- | --- |
| **The filter is a dead control** | The chips read Web Design / Branding / Digital Marketing / E-Commerce, but all 13 projects are Wix Studio web builds. One chip holds everything; three hold nothing. |
| **Placeholder tags shipped** | Cards carry the literal strings `Tag One`, `Tag Two`, `Tag Three`. |
| **Cards say nothing** | A thumbnail and a name. The industry, market, site type and platform already exist on each project page and are thrown away here. |
| **Limassol Agora's detail page is empty** | The spec rows render; the body is four non-breaking spaces. |
| **Duplicate service blurb** | The CRM card repeats Branding's line verbatim — "Crafted identities that turn businesses into brands people remember." |

### What this page does

Real copy from the live page is kept: the heading **"Projects that speak for themselves."**, the
sub **"A showcase of the brands we've helped grow through design, strategy, and technology."**,
the three descriptors **Human-Focused / Design-Led / Built to Perform**, and the services block
**"Turning Vision Into Digital Reality"** with its blurb and *View all services*.

- **Every card carries the project's own spec rows** — industry, site type, market, platform —
  copied from that project's live detail page. Nothing is invented, and no card has a gap.
- **A sector filter every chip can fill**, derived from the real `Industry` values:
  All 13 · Property & development 3 · Hospitality & culture 4 · Engineering & logistics 3 ·
  Technology & SaaS 2 · Healthcare 1. Live count in an `aria-live` region, plus an empty state.
- **The orphan is handled.** 13 into two columns leaves one card alone, and so does every odd
  filter result. `work.js` puts `.is-wide` on the last visible card when the count is odd; it
  spans both columns at a 2.45:1 crop with the spec row moved to the right. Below 720px the grid
  is one column, so `.is-wide` is neutralised back to the normal 4:3 card.
- CRM's blurb is taken from the mega menu ("Workflows that automate, capture, and scale.") rather
  than repeating Branding's, and **GEO** is added so the service grid is two clean rows of three.
- Shell is shared: `styles.css` header, footer, buttons, `.eyebrow`, `.status-dot`, tokens. The
  forest `.opening` hero → paper grid → forest services band → paper CTA rhythm matches `faq.html`.

### The hero proof bar — V0.27

The first version closed the hero on a page-metadata row (Projects shown 13 · Sectors 5 ·
Markets Cyprus & international · Built on Wix Studio). It was rejected on both counts:

- **It looked broken.** Four equal columns, but two values were short numerals and two were long
  strings, so the row read as ragged — a "13" alone in a 380px column next to a wrapping
  "Cyprus & international". The fix is structural, not cosmetic: **every value is now a short
  numeral on a shared baseline**, with the meaning carried by the label beneath it, and hairline
  dividers between columns so the differing label lengths read as deliberate.
- **It didn't sell anything.** It counted what was on the page. A visitor browsing work is asking
  "have you done this before, are you any good, how long will it take" — so each stat now answers
  one of those, and all four are the studio's own published figures:

| Value | Label | Source |
| --- | --- | --- |
| **150+** | Businesses grown, in Cyprus and across Europe | homepage hero `.hero-proof` |
| **100+** | Websites designed, built and launched | homepage `.stats` |
| **4–12** | Weeks from first brief to launch, on most projects | homepage FAQ |
| **2** | Cyprus Marketing Awards in 2025 — Gold and Silver | §8 awards section |

**Do not invent a figure for this bar.** Every number must trace to something the studio already
publishes; if a new stat is wanted, get the number first.

A stat cannot convert anyone without a next step, so the hero now also ends on the offer —
`.wk-start`: the yellow *Book a free consultation* button (the real Calendly link), a
*Tell us about your project* link to `contact.html`, and the note "15 minutes. No pitch." The
free 15-minute consultation is the studio's own published offer (FAQ).

**`<ul>` needs three resets, not one.** `.wk-stats` and `.wk-traits` are lists whose `li`s stay
`display:list-item`, so the UA marker rendered *and* `padding-inline-start:40px` pushed every
numeral 40px off the page gutter. `list-style:none` alone does not fix it: set
`list-style:none;padding:0;margin-bottom:0`. Verified the first numeral, the `h1` and the first
trait pill all share an x at 1440, 950 and 380.

### The `.wk-body` collision — read this before naming anything

The card's inner block was first called `.wk-body`, the same class as the page section
`<section class="wk-body">`. The section rule sets `padding-block: clamp(34px,3.8vw,54px)
clamp(64px,7vw,110px)`, and `.wk-card .wk-body` only overrode `padding-top` — so **every card
inherited up to 110px of dead space below its spec row**, and the grid grew ~700px at 1440px.
The card block is now `.wk-info`. **Never reuse a section-level class name inside a component**;
a more specific selector that sets one side of a shorthand does not undo the other side.

Also carried over from §9f: `work.css` opens with `[hidden]{display:none!important}`, because
`.wk-grid` and `.wk-card` both set `display` and are toggled via the `hidden` property.

### Assets

13 real thumbnails in `dist/assets/work-<slug>.webp`, 2.50 MB total, all valid WebP at 860×645.
They are prefixed `work-` specifically so they never collide with the `projects-*.webp` files the
homepage uses — three of those were overwritten once and had to be restored from git.
Wix ignores the filename you ask for: the transform must carry `enc_webp` explicitly
(`/v1/fill/w_860,h_645,al_c,q_76,usm_0.66_1.00_0.01,enc_webp/file.webp`) or you get PNG or AVIF
bytes in a `.webp` file.

Measured 1920 → 320px: no overflow, no horizontal scroll, no console errors, all 13 images
resolve, and all six filters return their expected counts. Every "Our Work" and "View all
projects" link across `index.html`, `services.html`, `branding.html`, `contact.html` and
`faq.html` now points at `work.html`; all internal links resolve.

## 9h. Careers + role pages — V0.28

`dist/careers.html`, `dist/careers.css`, `dist/careers.js`, and one role page per entry in the
generator's `ROLES` list (currently `role-digital-marketing-account-executive.html`).

### What the live pages are

`/careers` is a heading, one paragraph and one white card. No values, no team, no sense of the
place, no hiring process. Its "Apply Now" goes to `/digital-marketing-and-account-executive`,
which **renders its sections in the wrong order**: "What You'll Be Doing" and "What We're Looking
For" appear *above* the job title and intro, so the page opens on a bullet list with no context.

### Where every word came from

| Block | Source |
| --- | --- |
| Hero heading, lead | `/careers` verbatim, plus "Come grow with the avocadots crew" from the live role page |
| Core belief | `/avocadots-mission` — "Creativity Is Not Art Without Impact" |
| Five values | `/avocadots-mission` "Our Values" — names and principle lines verbatim |
| "What that means for you" | **Interpretation.** The values are written for clients; these lines translate each one for a candidate. |
| What it's like here (8 cards) | The live role page's "What You'll Get", verbatim |
| Photo caption | `/about-avocadots-design-studio` — the 2020 origin line and the offices line |
| Role content | The live role page: intro, 13 responsibilities, 11 requirements, 8 benefits, all verbatim |
| Form fields | The live Wix form's exact fields — first, last, phone, email, why, CV, cover letter |
| **Hiring steps (4)** | **Invented placeholder — not on the live site. The studio must confirm or replace it.** |
| `2020`, `9`, `150+`, `Hybrid` | Founded date and team count from `/about…` (9 people are listed); 150+ from the homepage hero; hybrid from the role page |

**Do not add a role, a benefit or a requirement that isn't published.** Roles live in the
generator's `ROLES` list; adding one there emits its card and its page together.

### The stretched-link trap

The role card first used the standard "stretched link" pattern — a `position:absolute;inset:0`
span inside the title anchor, making the whole card clickable, with the CTA as a
`<span class="button">`. Three things were wrong with it:

- The overlay **swallowed pointer events over the card body**, so the summary text could not be
  drag-selected and the card could not be right-clicked.
- The CTA was not a control. The brief asked for a button that navigates; a `<span>` is not one.
- Any harness or assistive tool targeting the CTA hit the overlay instead.

It is now **two real links to the same page** — the title, and an `<a class="button">` CTA whose
accessible name carries the role ("View role & apply — Digital Marketing & Account Executive"
via an `.sr-only` span, so a screen-reader user hears which role a list of identical CTAs refers
to). Verified: mouse, keyboard and the title link all navigate, and the summary is selectable.

### The application form

Client-side only, and it says so — the success panel uses the same wording as the contact page
("Nothing has been sent. In the live website, this step would submit…"). It is **not** wired to
an ATS or an inbox.

- `novalidate`, so the messages are ours and consistent, not the browser's.
- One message per field, written for the field ("Please attach your CV.", not "Required").
- On submit: every invalid field is marked, `aria-invalid` is set, the message is linked with
  `aria-describedby`, and **the first invalid field is scrolled into view and focused**.
- File inputs are transparent and sit *over* a styled face, so the real control keeps focus and
  keyboard activation. On change the face shows the filename and the CTA flips to "Replace".
- An error clears as soon as the person edits that field.
- Errors scroll the **field shell**, not the hidden file input, or the message lands off-screen.

### Layout

Two columns on the role page: content left, a sticky `At a glance` card right (role, contract,
model, location, team, languages, an Apply button, and the "not sure you tick every box" line
lifted from the live copy). Below 950px the sidebar **un-sticks and moves above the content**
(`position:static;order:-1`) so it acts as a summary rather than fighting the form for space.

Measured 1920 → 320px on both pages: no overflow, no horizontal scroll, no console errors. Form
verified for empty submit (7 messages, focus on the first), invalid email, file selection, and a
valid submit. Every "Careers" link across the site now points at `careers.html`;
`hero-concepts.html` still points at the live URL because it publishes as a separate artifact.

## 9i. Blog index — V0.29

`dist/blog.html`, `dist/blog.css`, `dist/blog.js`. 20 posts, all real, all linking out to the
live post on avocadots.com — the same pattern `work.html` uses for project pages.

### Where each field came from

| Field | Source |
| --- | --- |
| Title | the post's `<h1>` |
| Excerpt | the post's `og:description` |
| Author, publish date, hero image | the post's `BlogPosting` JSON-LD |
| Read time | the post page's own "N min read" |
| **Category** | **editorial classification — see below** |

Authors that appear: Alexandros Pelekanos, Andreas Hadjigeorgiou, avocadots Design Studio.

### The category map is a judgement call, not scraped data

The live blog's tabs are Web Design / Digital Marketing / Branding / Business, but **no page
exposes which category a post belongs to** — every post page renders all four links as site-wide
navigation, and `/blog/categories/<slug>` returns the same full list for each slug. So the
`CATEGORY` dict in the generator is a classification by subject, and the studio should correct
it. It is a single dict; changing a value re-emits the chip counts automatically.

Current split: Digital Marketing 12, Web Design 5, Business 3.

**Branding is not rendered as a chip** — none of the 20 published posts is about brand identity.
Holding to the rule from §9g, a chip that returns nothing does not ship. If a post should sit
under Branding, move it in the dict and the chip appears.

### The lead card

The newest post spans the full grid width with its image beside the copy. `blog.js` adds
`.is-lead` to the first card **only while the full list is showing**, and removes it the moment a
chip or the search narrows the list — a feature treatment makes no sense on a filtered result.
Same mechanism as `work.html`'s `.is-wide`, different trigger.

### Image ratios

Every downloaded image is 860×645 (4:3), and most are screenshots or graphics with text in them.
The lead card first used a 16:10 crop and cut the top and bottom off the content. **Any ratio
other than 4:3 crops these sources**, so the lead card, the grid cards and the stacked mobile
lead all use `aspect-ratio:4/3`. Verified by comparing the rendered box ratio against
`naturalWidth/naturalHeight`.

Assets are `dist/assets/blog-<slug>.webp`, 20 files, 1.3 MB, all valid WebP. Same Wix rule as
§9g: `enc_webp` must be explicit in the transform or the bytes come back PNG or AVIF.

### The stale-highlight trap

`render()` first skipped hidden cards with `if (!on) return;` before rewriting the title, so a
card filtered out mid-search kept its `<mark>` markup in the DOM. The rewrite now runs for
**every** card and the highlight is conditional on `on && low`. Verified: after a no-match
search, and after clearing a search while a category filter is active, zero `<mark>` elements
remain anywhere in the grid.

Measured 1920 → 320px: no overflow, no horizontal scroll, no console errors, all 20 images
resolve. Filter, search, combined filter+search, empty state, clear button and Escape-to-clear
all verified. Every "Blog"/"Blogs" link across the site now points at `blog.html`; the footer's
**Topics** links still point at the live category archives, since this page has no per-category
URL.

## 9j. About page — V0.30

`dist/about.html`, `dist/about.css`, `dist/about.js`. Built from the redesigned
`/about-avocadots-design-studio-1?rc=test-site`, kept section for section **except the hero**.

### The one thing that changed

The redesign's hero was a lime gradient band with a faint grid, a centred dark-green headline,
a centred sub and four white ticked pills — the `/web-design` template from §9e. Every other page
in this prototype opens on the shared forest `.opening`, so that hero was the single thing making
this page read as a different site.

It is now the same hero as work / careers / blog / faq: eyebrow with status dot, left-aligned
headline with a lime second line, lead, a yellow CTA plus a text link, and a closing bar. **The
four credentials are kept** (Certified Wix Partner, Shopify Experts, 150+ websites delivered,
30-day launch guarantee) — they moved from white pills into that bar, which uses the same
hairline-divider geometry as the work and careers proof bars, with a lime tick on each.

The live hero also mis-spells it **"Certified WIx Partner"** (capital I). Corrected here.

### Everything else is the page as designed

Bento (150+ tile, 2020 tile, "The first call", "The room"), the yellow promise band with its six
chips, the eight team cards with their per-person accent colour, the story panel with the
2020/2022/2024/2026 timeline, the founder quote, the "Open office. Closed loops." card, the
closing CTA, and the six FAQs — all verbatim. FAQ answers were read out of the collapsed DOM,
since the accordions do not expose them to `innerText`.

**Live-page bug not reproduced:** the story section shows the *same photograph* twice, captioned
"Day One" and "The Room Now". There is no 2020 photo to pair it with, so this page shows it once,
captioned "The room now", and the second studio photo is used in the bento's "The room" tile.

### Assets

`dist/assets/about-<name>-1.webp` (eight greyscale cut-outs, 432×440) and
`about-studio-0/1.webp`. The live page ships each headshot twice — colour and greyscale — as a
hover pair; the cards render the greyscale one, so only that is kept. The cut-outs are
transparent, so the **card supplies the colour block behind them**, and the avatar clusters give
each face its own tinted disc rather than a bare white circle.

**Careful with the cleanup glob.** `rm assets/about-*-0.webp` was meant to drop the unused colour
headshots and also matched `about-studio-0.webp`, which the page needs. Caught by the 404 in the
render check, not by review.

### The double-escaped quote glyph

`.ab-quote p::before` was written as `content:"\\201C"`. A CSS unicode escape takes **one**
backslash; two makes it the literal text, and the card rendered `\201C` in 92px lime across the
founder's quote. Now `content:"\201C"`, verified by reading the computed `::before` content back
as `"“"`.

Measured 1920 → 320px: no overflow, no horizontal scroll, no console errors, all images resolve,
FAQ accordion opens and closes. Every "About Us" link across the site now points at `about.html`;
`hero-concepts.html` still points at the live URL because it publishes as a separate artifact.

## 9k. Mission page — V0.31

`dist/mission.html`, `dist/mission.css`, `dist/mission.js`. Every word is the studio's own
`/avocadots-mission` copy. **Nothing on this page was invented** — the sections below are that
page's sections, given the brand's rhythm instead of its grey-card treatment.

### What the live page is

13px paragraphs, plain `<ul>` bullets, grey cards, a stray yellow highlighter mid-paragraph, and
a gradient panel with four floating labels ("Mission", "Values", "Core Belief", "Standards") that
explain nothing. It reads as a Word document pasted into Wix. **Its fifth value has also lost its
number** — 1–4 are numbered, "Partnership Over Vendor Work" is not. Numbered here.

### How the copy maps to sections

| Section | Source |
| --- | --- |
| Hero | the mission statement, plus the "We help businesses move from" list as the closing bar |
| Statement band | "Growth shouldn't feel chaotic. It should feel engineered." + the Nicosia line |
| **Growth Engine** | the canonical §7 component, reused verbatim |
| Core belief | "Creativity Is Not Art Without Impact", the three negations, the two-at-once pair |
| Values | all five, with their real sub-bullets and closing rules |
| In practice | "Because of these values, we:" + its four items + "This is how brands become benchmarks." |
| The standard | the Nicosia/geography line and the four standard statements |
| CTA | "Ready to build your growth engine?" |

The three headings that are not verbatim are section labels the live page has no equivalent for
("What the values actually change", "Same standard, whatever the postcode", and the CTA's
sub-line). They restate the studio's own copy directly beneath them; **if a future edit changes
those lines, keep them restating the source rather than adding a new claim.**

### Reusing the canonical engine

The mission statement is literally "to turn branding, web, and marketing into one unified growth
engine", so the page carries the §7 component from the homepage, unchanged apart from dropping
its "04 /" section number. **Do not restyle it here** — `styles.css` owns its geometry, and §7's
contract (viewBox `1200 600`, `aspect-ratio:2/1`, the node percentages, the 1024px stacked floor)
still applies. `mission.css` sets only the band's own vertical padding. The render check asserts
no node escapes `.engine-diagram` at any width, 1920 → 320.

**This means the same section appears on two pages.** That is intended: it is the canonical
component, and the mission is what it illustrates.

### The row-gap trap

`.ms-value-body` is a two-column grid whose left column holds four stacked items (heading, two
lead lines, closing rule). `gap:clamp(20px,3vw,52px)` set **both** axes, so the left column's
lines sat up to 52px apart and the value read as four loose fragments. Now `gap:0 clamp(...)` —
column gap only, with each element's own `margin-top` doing the vertical spacing. Verified: the
heading-to-first-line gap is 14px, not 52px, and the page is ~620px shorter.

Measured 1920 → 320px (plus 1024, the engine's documented floor): no overflow, no horizontal
scroll, no console errors. Every "Our Mission" link across the site now points at `mission.html`.

## 9l. ChatGPT Ads Cyprus landing page — V0.32, "why now" V0.33, "the news" V0.34

`dist/chatgpt-ads.html`, `dist/chatgpt-ads.css`, `dist/chatgpt-ads.js`. Built from a supplied
copy document (`ChatGPT-Ads-Cyprus-Landing-Page.docx`) for the existing `/chatgpt-ads` URL.

### Scope of the copy

Every line of **page** copy is the document's. The doc's closing **"GEO Notes"** are notes to the
author explaining the rewrite ("Replaced every 'coming soon' framing…", "Kept the exact page
structure…"). **They are not page content and must never be rendered.** If a future edit pastes
the doc in again, strip that block.

The doc keeps the structure the live page already has: hero, **two identical lead-gen forms**
(top and bottom), a three-reason block and a six-item FAQ. Both forms are here, both work.

### What the live page still says

It is the pre-launch version: "ChatGPT Ads Are Coming to Cyprus", "aren't available just yet",
"we'll notify you as soon as". Its three reasons are numbered **1, 2, 2** — there is no 3. Its
six FAQs are generic GEO questions ("What is generative engine optimisation?") with nothing about
ChatGPT Ads. All of that is what the doc exists to replace.

### The form is the layout

This is a lead-gen page, so the form is not a section — it is the hero's right-hand column,
**visible without scrolling**. The check asserts this: at 1024–1920 the submit button's bottom
edge is inside the fold; below 950 the hero stacks and the form card's top sits at 441–507px,
still on the first screen.

That constraint drove two structural decisions:
- The hero photo is a **third grid child**, not part of the copy block. Nested in the copy it
  pushed the form 984px down the moment the hero stacked at 950.
- A **sticky CTA bar under 720px**, shown only between the two forms. An `IntersectionObserver`
  watches both `.ca-form-card`s and hides the bar whenever either is on screen, so it never
  covers the thing it points at. `.footer` gains bottom padding at that width so the bar cannot
  sit over the last footer row.

### Validation

`novalidate`, one message per field written for that field, `aria-invalid` + `aria-describedby`,
and focus moved to the first bad field. Email defers to the browser's own `type=email` check so
it matches what the UA accepts; **phone is digit-counted (≥7), not pattern-matched**, because the
page takes international numbers. Client-side only, and the success panel says so in the same
wording the contact and careers forms use.

### FAQ schema

The doc's GEO notes ask for the blog's FAQ schema, so the six Q&As also ship as `FAQPage`
JSON-LD generated from the same list — one source, no drift between the visible accordion and
the structured data.

### Links

Both internal links in the doc were verified to resolve before shipping:
`/post/chatgpt-ads-cyprus` (the first-experience post) and
`/post/chatgpt-ads-everything-you-need-to-know-2026` (the explainer — note it is **not** in the
20 posts `blog.html` lists). The hero image is the studio's own illustration from the first post,
with the doc's specified alt text, `chatgpt ads cyprus`.

### "Officially available in Cyprus" — rebuilt V0.34

The announcement shipped as a heading beside three grey body paragraphs, with both blog links
buried inside them as inline underlines. On a lead-gen page that wastes the one moment the page
has actual news, and hides its two outbound destinations.

Three changes:

- **A status panel** under the heading, forest with the grid texture, carrying a lime status dot
  and three rows: *Self-service access — Live*, *Waitlist — Not required*, *Minimum daily budget
  — €15*. The announcement is a status change, so it is shown as one. **Every row is this
  section's own copy.** Do not add a row the page does not already state.
- **The news is at reading size**, not caption grey: `clamp(17px,1.5vw,21px)` in forest, with a
  lime highlighter behind "no waitlist required."
- **The two posts are destination cards**, not inline underlines — tag, title, what is in it,
  and a lime arrow that shifts on hover. Their summaries are the doc's own descriptions of each
  post, moved out of the sentence that linked them.

The section still contains every sentence from the doc; only the arrangement changed.

### "Why acting now matters" — rebuilt V0.33

The three reasons first shipped as full-width text rows under hairline rules. Correct, and it
read as a printed document: no containment, no colour, no scale contrast, three rows of identical
weight. Now an **asymmetric card grid** — reason 01 is a tall forest card spanning both rows with
the faint grid texture and a 104px lime numeral; 02 and 03 stack beside it as white cards with
muted numerals. Below 950px the lead card stops spanning and all three stack.

Card 01 carries a small diagram of **its own sentence**: a lit lime rail labelled "You, live in AI
conversations" over a dashed muted rail labelled "Competitors, still planning". That is the
card's copy — "brands that launch now are seen in AI conversations before competitors even start
planning" — drawn, not a new claim, and it is `aria-hidden` because the paragraph beneath says
it in words. **Do not turn it into a chart**; there is no data behind it, only the sentence.

The section closes on a link to the second form, because a "why act now" argument that ends in
white space is an argument with no next step.

Spacing note: the lead card's breathing space belongs between the numeral and the
diagram-plus-statement group, so `margin-top:auto` sits on `.ca-viz`, not on the `h3`. With it on
the `h3` the gap fell between the diagram and the statement it illustrates, separating the two
things that belong together.

Measured 1920 → 320px: no overflow, no horizontal scroll, no console errors. Both forms checked
for empty submit, malformed email, short phone and a valid submit, the sticky bar for show/hide
against both forms, and the grid for exact top/bottom alignment of the lead card against the
pair beside it at every width down to 1024.

## 9m. Canonical footer — V0.40.3

All 11 pages with a full footer. `contact.html` keeps its own compact `.ac-footer`, because that
page is a single funnel and a 6-column footer would give people a way out of it. Markup is
emitted by `tools/gen_footer.py` — **edit the generator, not the pages.** The clock script is
`dist/footer.js`, pulled in by a `<script>` inside the generated block so no page's own JS file
has to know about it.

### The three passes, and what each was told

| Version | Feedback | What actually changed |
| --- | --- | --- |
| V0.1 | *"not a good design approach… I want a premium looking footer, clean and branded"* | Full rebuild. |
| V0.39 | *"the top section looks weird and the layout is a bit off. Create something that stands out more."* | See below. |
| V0.40 | current | — |

**"The top section looks weird."** V0.39 had a headline and an orb floating in an otherwise
empty band. That reads as leftover space rather than composition, and nudging the pieces does
not fix it — **the content needed a surface.** It is now a lime panel, so the accent colour *is*
the statement instead of a highlight sitting inside a dark void.

**"The layout is a bit off."** V0.39 split the lower half `1.3fr` identity / `2.45fr` nav, which
left the identity column short and made the proportions look arbitrary. The contact details are
now simply a fifth nav column, so the lower half is **five equal tracks** with nothing to
balance by eye.

**"Stands out more."** Two additions, both made of things the studio already owns:
- a full-bleed **marquee of the six services**, punctuated by the brand mark, dividing the panel
  from the nav;
- the **studio clock** in the base bar — `Intl.DateTimeFormat` with `timeZone:'Europe/Nicosia'`,
  so DST is handled rather than hard-coded as an offset.

The user supplied a reference (PadiSave) that ends on an oversized wordmark, and said explicitly
not to copy it. **That device is deliberately not used here.**

### Rules this component now carries

- **The panel is lime, and the headline is one tone.** The V0.39 two-tone headline
  (white + lime) cannot survive on a lime panel: lime-on-lime and white-on-lime are both around
  1.9:1 and fail. If the panel colour ever changes, re-check this before reintroducing an accent
  word.
- **The panel is a lime gradient, and small text must clear its darkest stop.** An early version
  ran to `#69a231`, which is **4.11:1** against the forest text sitting on it — under AA — and
  that dark corner was also what made it look muddy. The range is now
  `#aadc61 → #8fc549 → #7fb53d`, i.e. **7.9:1 → 6.2:1 → 5.2:1**. Check the darkest stop, never
  the average.
- **A flat two-field version was built and rejected.** `V0.40.2` replaced the gradient with a
  flat `--brand-lime` field over a `#0b1e17` strip, in answer to *"I need something more solid."*
  The response was *"its worse now than before"*, and it was reverted to this gradient. Six
  directions were then put side by side in `dist/footer-options.html` and this one was chosen.
  **Do not re-propose the flat split** — it has been seen and turned down.
- **The orb is punctuation, not an object.** Set free-standing between the headline and the
  promise it reads as attached to neither, which is the same "floating in an undefined space"
  problem the whole rebuild started from. It is now `display:inline-grid` on the end of the last
  line, `vertical-align:middle` — which self-adjusts across the headline's clamp range, where a
  hand-tuned em offset does not.
- **One light source.** The gradient's light end, the white highlight and the rings all sit on
  the same point (top right). An earlier version lit it from the top left and highlighted the top
  right at once, and the middle read as a dip between them.
- **Three ways to start, not three buttons that do the same thing.** Write / call / book. The
  Calendly URL is the studio's real one, already used on `branding.html`. This is not the
  duplicate-CTA problem V0.1 had — that was two links to the same destination.
- **The marquee is decorative.** Every name in it is a real link in the nav directly below, so it
  is `aria-hidden` and contains no anchors. The checker asserts both.
- The marquee track is `width:max-content` and deliberately wider than the screen; its parent
  clips it. **The overflow check must skip the track** or it reports a false positive on every
  page at every width.
- Outlined marquee type is behind `@supports (-webkit-text-stroke)`. Without the guard,
  `color:transparent` renders nothing at all where stroke is unsupported.
- The six social badges are a `repeat(3,36px)` grid, not a wrapping flex row: at 40px they are
  290px wide, never fit a fifth of the grid, and break 5+1.
- **The brand mark is the dark forest swatch** and needs `filter:brightness(0) invert(1)`
  wherever it sits on a dark ground (the base lockup, the marquee ticks). A mark with no filter
  renders forest-on-forest and simply vanishes — that was a real V0.39 bug.
- `justify-self`, not `align-self`, centres the orb when the invite stacks — in a grid
  `align-self` is the block axis.

### The polish pass (V0.40.3)

*"Revert to this, just make sure its polished."* An audit found the alignment already exact —
every content left edge on the same x, every right edge on the same x, symmetric padding — so the
defects were elsewhere:

- **Two light sources.** The gradient ran at `145deg` (lightest at the top *left*) while the white
  highlight sat at the top *right*, so the middle read as a dip between them. Now `225deg`.
- **The rings did not share the highlight's centre.** They were painted on a `60%`-wide square
  anchored top-right, so `70% 24%` *of that box* landed ~45% down the panel while the highlight's
  `82% 16%` was near the top. Both are now stated against a full-panel `inset:0` box at
  `80% 18%` — the same coordinates, so they land together.
- **The rings must be dropped below 860px.** Their mask radius is relative to the panel's
  farthest-corner distance, and on a narrow tall stacked panel that pushes them straight through
  the headline. They exist only to fill the empty right side of the two-pole row; stacked, there
  is no such row.
- **The orb sat ~0.07em low.** `vertical-align:middle` centres on the parent's x-height, which is
  below the optical centre of the caps it punctuates. `top:-.07em` brings it within **0.1px** of
  half a line-height below the two-line block's centre — measured, not eyeballed.
- The orb's shadow was `0 12px 28px`; on a small circle over a light panel that reads as a smudge
  rather than a lift. Now `0 7px 18px` at lower alpha.

The wide gap between headline and promise at desktop widths is **intentional** — they are two
poles of one row and the rings occupy the space between. It has been raised with the user and
left as is.

### Breakpoints

| Width | CTA panel | Nav |
| --- | --- | --- |
| > 1100 | headline + promise as two poles of one row; three ways across the bottom | 5 columns |
| 861–1100 | as above | 3 columns |
| ≤ 860 | panel stacks; the ways' column rules become row rules | 2 columns |
| ≤ 720 | orb drops below the headline | 2 columns |
| ≤ 380 | — | 1 column |

### Verification

`tools/check_footer.py` renders **every page at 17 widths** — the widths either side of each
breakpoint, not just round numbers. It asserts: nothing overflows the viewport or escapes
`.footer`; no horizontal document scroll; no two siblings inside `.fx-cta-top`, `.fx-ways`,
`.fx-base` or `.fx-nav` overlap; every image loads; the lockup mark and clock element exist;
every link has a non-empty accessible name and a real href; the marquee stays `aria-hidden` with
no anchors inside; social tap targets stay ≥32px at ≤540. No console errors.

**An overlap is invisible to an overflow check** — nothing leaves the viewport, the text just
lands on other text. That check exists because a 2-up identity layout in V0.39 put two blocks in
one grid cell and the sweep passed it clean.

## 10. Preserve the homepage's content and rhythm

The user requested an elevated homepage while keeping its existing sections. Preserve this order and its real assets:

| Section | Current design role |
| --- | --- |
| Header and hero | Forest masthead; large “Creative precision. Built for growth.” heading; real project previews; yellow CTA |
| Client logos | All nine existing logos on a light strip |
| Selected work | Six projects in an asymmetric gallery, stacked on mobile |
| Services | Light-lime section with four generous linked service rows |
| Studio introduction | Real team photograph, short introduction, existing metrics |
| Unified Growth Engine | Current subtle forest cards described above |
| Partners | Six platform partners as restrained linked cards, each a real logo tile above its name |
| Insights | Three real article thumbnails and links |
| Awards | Contact-inspired white panel within a forest section |
| About / Careers | Yellow and light-lime destination panels |
| FAQs | Six existing questions with native disclosures |
| Footer | Large closing contact invitation, navigation, contacts, social and legal links |

Do not make every section look like the Growth Engine. Consistency means shared typography, colours, spacing and component logic; it does not require identical compositions.

### V0.22 — hero rebuild

The user asked for a hero that captures attention. Audited first: the old one held **19 separate
text blocks in one viewport** — eyebrow, location, headline, description, two CTAs, a stat, two
project captions, a note, and a two-part footer bar — inside a 912px band where the headline
occupied only the top third, above dead space.

Three faults, all structural:

1. **Nothing dominated.** Ten competing elements, no focal point.
2. **The two rotated project cards** were the most dated thing on the page — the tilted-mockup
   trope reads as a 2021 template.
3. **Type and imagery never met.** Headline top-left, images bottom-right, copy bottom-left:
   three separate zones.

### Now

```
eyebrow
Creative precision. / Built for growth.      clamp(50px,9vw,142px), lime second line
[ copy ] [ Work with us · See the work ] [ 150+ ]     one baseline-aligned meta row
────────────────────────────────────────────────────  full-bleed
[ Scandia ][ Minerva ][ GMI ][ Limassol Agora ]       4 real projects, edge to edge
```

- `.hero-strip` sits **outside** `.hero` (which carries `.wrap`) so it can run the full viewport
  width. Verified: strip width == viewport width at every size. Do not move it back inside the
  container.
- Cards are square-on, not rotated. The arrow reveals on hover and is **always visible at/below
  720px**, since a touch device has no hover.
- Dropped as chrome: the location, the "A few fresh perspectives" note, and the
  `Strategy × Design × Performance` bar. The 150+ figure and its label are untouched, per §10.
- Their old rules (`.hero-kicker`, `.hero-showcase`, `.hero-project`, `.hero-end`,
  `.hero-location`) are now **inert** — no element carries those classes.

### Two cascade traps found in rendering

- `.hero-actions` still had `flex-direction:column` from the original stylesheet. The new rule
  set `flex-wrap:nowrap` but not the direction, so the CTA and link stacked and broke the meta
  row's baseline. **A new `.hero-actions` rule must set `flex-direction:row` explicitly.**
- At 320px the headline broke to three lines. The `≤380px` size is therefore
  `clamp(26px,9vw,38px)`, not a fixed 38px — verified two lines down to 300px.

Measured 1920px → 300px: heading holds two lines, never escapes its column, strip is full-bleed
at every width (4 → 2 → 1 columns), no page overflow, no broken images.

### Existing figures need distinct labels

The homepage contains 150+ companies, 100+ websites, 50+ brand identities and 30+ marketing clients. An earlier About draft uses 150+ websites. Do not silently merge these figures or invent a correction. Preserve the existing labels and ask for verification if the content itself is being revised.

## 11. Real assets

Reuse the real Avocadots mark, people, projects, blog artwork, client logos and certificates. Do not redraw the logo in CSS, invent awards, or substitute generic stock imagery for existing work.

Main homepage assets are under `dist/assets/`:

- `brand-mark.png`
- `team.jpg`
- `projects-scandia.webp`
- `projects-minerva-insurance.webp`
- `projects-gizet.webp`
- `projects-limassol-agora.webp`
- `projects-german-medical-institute.webp`
- `projects-air-control.webp`
- `awards-1-3gold-jpg.webp`
- `awards-1-8silver-jpg.webp`
- Existing `clients-*.webp` and `blogs-*.webp` files.
- `partners-shopify.svg`, `partners-wix-studio.svg`, `partners-meta.svg`, `partners-google-ads.svg`, `partners-tiktok.svg`, `partners-gohighlevel.svg`

Use `object-fit: cover` for project photography inside an intentional frame, and `contain` for certificates and logos. Preserve intrinsic ratios. The asset filenames identify existing files; they are not included in this Markdown document.

## 11b. Partners row — current V0.12

The redesign originally set the six platforms as text wordmarks. The user asked for the real logos, as already used on the production site (V0.11), then said the section could be more interesting.

V0.12 answers that the same way V0.10 answered it for the Growth Engine: a divided list becomes restrained cards. It is the light-surface counterpart of that component's logic, not a copy of its composition.

### Structure

- The heading block is unchanged: `05 / Our partners` eyebrow, two-line heading, aside paragraph, `Work with us` link.
- The divided six-cell strip becomes six separated cards with a 16px gap. The grid's `border-block` and the per-cell `border-right` are gone.
- Each card stacks the logo tile above the platform name.
- Cards are links to each platform's partner directory listing, so the section is verifiable evidence rather than decoration. The hover lift is legitimate because the destination is real.
- Six columns on desktop; three at/below 950px; two at/below 380px.

### Logo assets

Six 49x49 rounded-square SVG tiles, taken from the production Wix site's own partner badges, in full brand colour and at their original 1:1 ratio.

| File | Name | Tile | Destination |
| --- | --- | --- | --- |
| `partners-shopify.svg` | Shopify | White tile, green bag | Shopify Partner directory |
| `partners-wix-studio.svg` | Wix Studio | Indigo gradient tile | Wix Studio partner profile |
| `partners-meta.svg` | Meta | Blue tile, white infinity | Meta for Business |
| `partners-google-ads.svg` | Google Ads | White tile, colour mark | Google Partners agency 2247645641 |
| `partners-tiktok.svg` | TikTok | White tile, colour note | TikTok for Business |
| `partners-gohighlevel.svg` | GoHighLevel | Navy tile, colour arrows | GoHighLevel |

Do not redraw, recolour, monochrome or flatten these marks — they are third-party brand assets and must stay as issued. Do not substitute generic icon-set glyphs.

### Exact card treatment

```css
.partner-grid{grid-template-columns:repeat(6,minmax(0,1fr));gap:16px;border-block:0}

.partner-grid>a{
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:18px;min-height:168px;padding:32px 20px;
  border:1px solid var(--line);border-radius:16px;
  background:#1c38300a;box-shadow:0 6px 18px #1c383012;
  font-size:15px;font-weight:600;letter-spacing:-.015em;line-height:1.4;text-align:center;
}

.partner-grid>a img{width:56px;height:56px;object-fit:contain;flex-shrink:0}
.partner-grid>a:hover{transform:translateY(-3px);border-color:#1c383052;
  background:#1c383012;box-shadow:0 12px 26px #1c38301a}
```

The wash is forest at roughly 4% **over paper** — the light-surface mirror of the engine card's white-at-4%-over-forest. Do not make it a solid white panel: three of the six tiles are themselves white, and they would lose their silhouette. Do not make it a solid pale green card either.

The name drops the display wordmark's tight `-.065em` tracking, because it is now a caption under a mark rather than the mark itself.

- Below 1180px: 52px logo, 158px card, `30px 12px` padding. The narrow horizontal padding is deliberate — at 951px six cards plus gaps leave the least room of any width, and `GoHighLevel` is the longest name.
- Below 950px: three columns, back to 56px logo and 168px card.
- Below 720px: 46px logo, 14px name, 142px card, 14px radius.
- Below 540px: 42px logo, 13px name, 130px card.
- Below 380px: two columns, 46px logo, 14px name, 134px card.

Hover lift is 3px over 250ms, in the button's range. Focus uses the existing `.partners a:focus-visible` green outline. Motion is disabled under `prefers-reduced-motion`.

Measured in Chromium from 1600px down to 320px: no name clips its card and the page never overflows horizontally. This is the latest implementation; the user has not separately approved its final rendered result.

## 12. Motion and interaction

Motion is supporting polish, not the design concept.

- Existing page reveals: 28px vertical travel, 700ms, once per element.
- Existing hero entrance: approximately 900–1000ms.
- Project hover zoom: approximately 4.5%.
- Buttons: small, quick feedback, generally 200–300ms.
- Award arrow: 2px diagonal movement, 250ms.
- Growth Engine cards: static informational surfaces.
- No automatic carousels, perpetual pulsing, cursor spotlight, spinning diagrams, or metallic shimmer in these components.
- Respect `prefers-reduced-motion`.
- Do not hide information behind hover; touch and keyboard users need the same content.

Keep actual links and controls distinguishable from decoration. Do not make a static card look clickable unless it has a meaningful destination.

## 13. Responsive and accessibility rules

The current stylesheet uses breakpoints at 1180, 950, 720, 540 and 380px, with 540px specifically relevant to awards. Preserve their intent rather than applying a framework's defaults indiscriminately.

- Mobile navigation opens at/below 720px.
- Replace multi-column compositions with logical reading order on smaller screens.
- Keep buttons and text within the viewport; do not mask layout mistakes with page-wide overflow clipping.
- Allow cards to grow with their text. Avoid fixed heights that clip copy.
- Keep focus indicators visible and contrast-appropriate.
- Use semantic headings, real links, native buttons, and descriptive image text where appropriate.
- Keep certificates available in full size.
- Retain menu, FAQ and modal keyboard behaviour.
- Check content at narrow widths and 200% text enlargement when implementing or validating changes.

The existing prototype has been checked through source/asset and interaction-logic checks during its iterations; full browser visual testing was not performed in this workflow. Do not claim it passed visual/device testing without actually doing so.

## 14. Instructions for the next LLM

1. Read this file before editing. Identify the requested section and the latest applicable component rules.
2. Inspect the actual source and supplied screenshots when available. Treat the final cascade as authoritative; the stylesheet contains incremental overrides from the design iterations.
3. Make the smallest coherent design change that fulfils the request. Keep unrelated content, links, assets, and interactions intact.
4. Match the user's requested level of change. “A bit more interesting” means a restrained refinement, not a new composition or visual theme.
5. Preserve exact supplied titles/descriptions when asked to edit styling only.
6. Keep content visible and concise. Prefer one clear action over repeated prompts.
7. Use the current framework or the user's chosen target platform. The current prototype is static HTML/CSS/JavaScript; a Wix Studio implementation should use Wix-appropriate structure without arbitrarily migrating the project.
8. If code is requested, provide complete updated code or complete updated files, not incomplete replacement fragments.
9. If a required asset is missing, identify it honestly. Do not invent a new brand asset or replace it with unrelated artwork.
10. Validate the changed section's sizing and behaviour. Do not claim checks that were not performed.
11. Update this document when a new design decision supersedes the baseline. Clearly distinguish implemented work from explicit user approval.

### Ready-to-use continuation prompt

> Read the attached design.md as the design contract for Avocadots. Continue the existing concept rather than redesigning the brand. Use the Contact page's forest/white/yellow personality and the current Growth Engine's restrained card treatment. Preserve the clean hierarchy, concise copy, real assets, and existing sections. Avoid metallic colours, overlapping diagrams, decorative grids, excessive badges, and unnecessary interactions. Change only the section I request, keep it responsive, and provide the complete updated implementation. My requested change is: [describe the section and change].

## 15. Exact homepage CSS snapshot

The following is the full stylesheet at V0.10, including responsive rules and the final card refinement. Later declarations intentionally override earlier ones. Preserve the order if copying it. It is a reference for the existing HTML classes, not a complete standalone website.

```css
:root{--forest:#1c3830;--deep:#122c24;--lime:#a5d65b;--brand-lime:#86bd42;--yellow:#e9c334;--paper:#eef0ec;--muted:#58695e;--line:#1c38302b;--gutter:clamp(24px,4.5vw,80px);--font:'Manrope',Arial,sans-serif}

*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:28px}
body{margin:0;background:var(--paper);color:var(--forest);font:16px/1.5 var(--font);-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
button{font:inherit;cursor:pointer}
img{max-width:100%;height:auto;display:block}
h1,h2,h3,p,figure{margin:0}
a,button,summary{-webkit-tap-highlight-color:transparent}
a:focus-visible,button:focus-visible,summary:focus-visible{outline:3px solid #e9c334;outline-offset:6px}
.work a:focus-visible,.partners a:focus-visible,.faq a:focus-visible,.faq summary:focus-visible{outline-color:#277756}
summary{cursor:pointer}
.wrap{max-width:1600px;padding-inline:var(--gutter);margin-inline:auto}
.section{padding-block:120px}
.eyebrow{text-transform:uppercase;font-size:13px;font-weight:600;letter-spacing:.13em;line-height:1.6;margin-bottom:26px}
.button{display:inline-flex;align-items:center;justify-content:space-between;gap:38px;min-height:56px;padding:17px 25px;border-radius:8px;font-weight:700;font-size:15px;transition:transform .25s,background .25s}
.button>span{font-size:23px;line-height:1}
.button:hover{transform:translateY(-3px);background:#f4d34d}
.yellow{background:var(--yellow);color:var(--deep)}
.button.small{min-height:46px;padding:12px 20px;font-size:14px;gap:24px}
.text-link{display:inline-flex;align-items:center;justify-content:space-between;gap:25px;padding-block:10px;border-bottom:1px solid currentColor;font-size:14px;font-weight:600}
.text-link>span{font-size:21px;transition:transform .25s}
.text-link:hover>span{transform:translate(3px,-3px)}
.skip-link{position:absolute;left:24px;top:-100px;padding:16px;background:var(--yellow);z-index:100}
.skip-link:focus{top:16px}

/* A bold, open masthead. The work stays in real, ratio-controlled frames. */
.opening{background:var(--forest);color:var(--paper)}
.header{max-width:1440px;width:calc(100% - var(--gutter)*2);padding:25px 0;display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:1px solid #ffffff30;position:relative;z-index:20}
.brand{display:flex;align-items:center;gap:10px;font-size:28px;font-weight:700;letter-spacing:-.06em;white-space:nowrap}
.brand img{width:36px;height:36px;object-fit:contain;filter:brightness(0) invert(1)}
.header nav{display:flex;align-items:center;gap:28px;font-size:14px}
.header nav>a{padding-block:8px}
.header nav>a.active{color:var(--lime)}
.header nav a:hover{color:var(--yellow)}
.nav-dropdown{position:relative}
.nav-dropdown>summary{list-style:none;display:flex;align-items:center;gap:8px;padding:8px 0}
.nav-dropdown>summary::-webkit-details-marker{display:none}
.nav-dropdown>div{position:absolute;left:-20px;top:40px;width:220px;padding:16px;background:var(--deep);border:1px solid #ffffff30;border-radius:12px;box-shadow:0 15px 40px #0004}
.nav-dropdown>div a{display:block;padding:10px}
.menu-toggle{display:none}
.hero{padding-top:58px;padding-bottom:28px;position:relative}
.hero-kicker{display:flex;justify-content:space-between;align-items:center;gap:24px;margin-bottom:34px}
.hero-kicker .eyebrow{margin:0;display:flex;align-items:center;gap:12px;font-size:12px;letter-spacing:.09em}
.status-dot{width:8px;height:8px;border-radius:50%;background:var(--lime);box-shadow:0 0 0 5px #a5d65b15}
.hero-location{font-size:13px;color:#b9cbc0}
.hero h1{font-size:clamp(64px,8.05vw,128px);font-weight:600;letter-spacing:-.075em;line-height:1.02;position:relative}
.hero h1>span{color:var(--lime)}
.hero-bottom{display:grid;grid-template-columns:.76fr 1.65fr;gap:clamp(40px,6vw,100px);margin-top:50px;align-items:center}
.hero-description{font-size:18px;line-height:1.65;color:#cfddd2;max-width:360px}
.hero-actions{display:flex;align-items:flex-start;flex-direction:column;gap:12px;margin-top:26px}
.hero-actions .text-link{border:0;color:#e5ece5}
.hero-proof{display:flex;align-items:center;gap:18px;margin-top:32px}
.hero-proof>strong{font-size:49px;font-weight:500;letter-spacing:-.06em;line-height:1}
.hero-proof>strong>span{color:var(--lime)}
.hero-proof>span{font-size:13px;color:#b9cbc0;line-height:1.6}
.hero-showcase{display:grid;grid-template-columns:1.15fr 1fr;gap:20px;position:relative;align-items:center;padding-bottom:30px}
.hero-project{display:block;position:relative;aspect-ratio:1.2;overflow:hidden;border-radius:12px;background:#d9dfd8;isolation:isolate;transition:transform .4s}
.hero-project img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.2,.7,.3,1)}
.hero-project.first{transform:rotate(-3deg)}
.hero-project.second{transform:rotate(4deg);margin-top:20px}
.hero-project:hover{transform:translateY(-8px) rotate(0)}
.hero-project:hover img{transform:scale(1.045)}
.hero-project-caption{position:absolute;inset:auto 14px 14px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;border-radius:6px;background:#f5f5edee;color:var(--forest);font-size:13px}
.hero-project-caption>span{font-size:20px}
.hero-project-note{position:absolute;bottom:-3px;right:0;font-size:12px;color:#b9cbc0}
.hero-end{display:flex;justify-content:space-between;gap:20px;margin-top:48px;padding-top:24px;border-top:1px solid #ffffff30;font-size:12px;letter-spacing:.06em}
.hero-end a{color:var(--lime)}
.hero-end a span{margin-left:24px}
.client-strip{background:var(--paper);color:var(--forest);display:grid;grid-template-columns:170px 1fr;align-items:center;gap:40px;padding-block:38px;max-width:none;border-bottom:1px solid var(--line)}
.client-strip>p{font-size:13px;line-height:1.7}
.client-logos{display:flex;align-items:center;justify-content:space-between;gap:30px}
.client-logo{min-width:0;max-width:110px;flex:1}
.client-logo img{width:100%;height:42px;object-fit:contain;opacity:.7}

/* A staggered portfolio gives each project its own moment. */
h2{font-size:clamp(40px,5vw,78px);font-weight:500;line-height:1.08;letter-spacing:-.065em}
.section-heading{display:flex;justify-content:space-between;align-items:flex-end;gap:65px;margin-bottom:64px}
.muted{color:#7a8b7d}
.heading-aside{flex:0 1 340px}
.heading-aside p,.section-description{font-size:16px;line-height:1.8;color:var(--muted);max-width:350px}
.heading-aside .text-link{margin-top:18px}
.project-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));align-items:start;gap:68px 48px}
.project-link{display:block;grid-column:span 7;min-width:0}
.project-link:nth-child(4n+2),.project-link:nth-child(4n+3){grid-column:span 5}
.project-link:nth-child(even){margin-top:120px}
.project-image{aspect-ratio:1.36;overflow:hidden;border-radius:14px;background:#dce2dc;position:relative}
.project-link:nth-child(2) .project-image{aspect-ratio:.88}
.project-link:first-child .project-image{aspect-ratio:1.08}
.project-image img{width:100%;height:100%;object-fit:cover;transition:transform .8s cubic-bezier(.2,.7,.3,1)}
.project-link:hover .project-image img{transform:scale(1.045)}
.project-overlay{position:absolute;bottom:22px;right:22px;width:52px;height:52px;border-radius:50%;background:var(--lime);color:var(--forest);display:grid;place-items:center;font-size:25px;transition:transform .3s}
.project-link:hover .project-overlay{transform:rotate(45deg)}
.project-meta{display:flex;align-items:baseline;justify-content:space-between;gap:20px;padding-top:20px}
.project-meta h3{font-size:clamp(21px,2vw,29px);font-weight:600;letter-spacing:-.04em;line-height:1.2}
.project-meta>span{font-size:13px;white-space:nowrap;color:var(--muted)}

/* Services are an oversized, interactive index. */
.services{background:var(--lime);color:var(--forest)}
.services .section-description{color:#355336}
.service-list{border-top:1px solid #1c383060}
.service-row{display:grid;grid-template-columns:45px 1fr .63fr 58px;align-items:center;gap:25px;padding:34px 20px 34px 0;border-bottom:1px solid #1c383060;transition:background .3s,padding .3s,color .3s}
.service-number{font-size:13px;align-self:start;padding-top:14px}
.service-row h3{font-size:clamp(30px,4.1vw,64px);font-weight:500;letter-spacing:-.065em;line-height:1.15}
.service-row p{font-size:14px;line-height:1.7}
.round-arrow{display:grid;place-items:center;width:54px;height:54px;border:1px solid currentColor;border-radius:50%;font-size:26px;transition:transform .3s,background .3s}
.service-row:hover,.service-row:focus-visible{background:var(--forest);color:var(--paper);padding-left:20px}
.service-row:hover .round-arrow{background:var(--yellow);color:var(--forest);border-color:var(--yellow);transform:rotate(45deg)}
.services>.wrap>.text-link{margin-top:30px}

.studio{display:grid;grid-template-columns:1.05fr 1fr;gap:clamp(40px,6vw,90px);align-items:center}
.studio-photo{position:relative;min-width:0}
.studio-photo>img{width:100%;height:auto;aspect-ratio:.96;object-fit:cover;object-position:50%;border-radius:14px}
.photo-tag{position:absolute;bottom:30px;left:24px;background:var(--yellow);padding:13px 20px;border-radius:4px;transform:rotate(-5deg);font-size:14px}
.studio-copy h2{font-size:clamp(38px,4.3vw,65px)}
.highlight{background:linear-gradient(transparent 80%,var(--lime) 80%)}
.studio-copy>p:not(.eyebrow){font-size:17px;line-height:1.75;color:var(--muted);margin-top:28px}
.stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px;padding-block:30px;border-block:1px solid var(--line);margin-block:32px 20px}
.stats>div{display:flex;flex-direction:column;gap:8px}
.stats strong{font-size:clamp(34px,3.4vw,51px);font-weight:500;letter-spacing:-.065em;line-height:1.1}
.stats strong span{color:#678839}
.stats>div>span{font-size:12px;color:var(--muted)}

.partners{padding-block:100px}
.partner-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));border-block:1px solid var(--line)}
.partner-grid>span{min-height:120px;display:flex;align-items:center;justify-content:center;gap:5px;font-size:clamp(20px,2vw,30px);letter-spacing:-.065em;font-weight:600;border-right:1px solid var(--line)}
.partner-grid>span:last-child{border-right:0}
.partner-grid small{font-size:12px;letter-spacing:0}
.insights{background:#e0e6dc}
.blog-grid{display:grid;grid-template-columns:1.28fr 1fr 1fr;gap:34px;align-items:start}
.blog-link:nth-child(2){margin-top:70px}
.blog-link:nth-child(3){margin-top:140px}
.blog-image{aspect-ratio:1.4;overflow:hidden;border-radius:12px}
.blog-image img{width:100%;height:100%;object-fit:cover;transition:transform .6s}
.blog-link:hover .blog-image img{transform:scale(1.05)}
.blog-category{display:block;margin:22px 0 13px;font-size:12px;color:var(--muted)}
.blog-link h3{font-size:24px;line-height:1.3;letter-spacing:-.04em;font-weight:600}
.blog-link p{margin-top:16px;color:var(--muted);font-size:15px;line-height:1.7}
.read-story{display:inline-flex;gap:25px;font-size:14px;font-weight:600;margin-top:20px;padding-bottom:8px;border-bottom:1px solid var(--line)}
.award-dialog{width:min(92vw,740px);max-height:94dvh;border:1px solid #91a492;border-radius:14px;background:#122c24;color:#eff3eb;padding:20px;box-shadow:0 30px 120px #0009;overflow:auto}
.award-dialog::backdrop{background:#071810df;backdrop-filter:blur(9px)}
.award-dialog-header{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:15px}
.award-dialog-header h2{font-size:20px;letter-spacing:-.025em}
.dialog-close{width:42px;height:42px;border:1px solid #ffffff50;color:white;background:transparent;border-radius:50%;font-size:28px;line-height:1}
.award-dialog-image{width:100%;height:auto;max-height:72dvh;aspect-ratio:1;object-fit:contain;border-radius:6px}
.award-dialog-caption{font-size:13px;color:#c5d6c7;text-align:center;padding-top:15px}

.people-ctas{display:grid;grid-template-columns:1fr 1fr;gap:28px;padding-top:100px}
.people-card{padding:48px;border-radius:14px;display:flex;flex-direction:column;min-height:450px;overflow:hidden;transition:transform .35s}
.people-card:hover{transform:translateY(-7px)}
.about-card{background:var(--yellow)}
.careers-card{background:var(--lime)}
.people-card h2{font-size:clamp(48px,5.8vw,85px)}
.people-card p{max-width:360px;font-size:16px;line-height:1.75;margin:26px 0 36px}
.card-bottom{display:flex;justify-content:space-between;align-items:center;gap:24px;margin-top:auto;font-size:14px;font-weight:600}
.faq{display:grid;grid-template-columns:.9fr 1.1fr;gap:90px}
.faq-intro h2{font-size:clamp(40px,4.5vw,68px)}
.faq-intro>p:not(.eyebrow){font-size:16px;line-height:1.8;color:var(--muted);max-width:370px;margin:25px 0 15px}
.faq-list{border-top:1px solid var(--line)}
.faq-list details{border-bottom:1px solid var(--line)}
.faq-list summary{list-style:none;padding:26px 40px 26px 0;position:relative;font-size:17px;line-height:1.5;font-weight:600;letter-spacing:-.025em}
.faq-list summary::-webkit-details-marker{display:none}
.faq-list summary:after{content:'+';position:absolute;right:3px;top:22px;font-size:26px;font-weight:400}
.faq-list details[open] summary:after{content:'−'}
.faq-list details>p{font-size:16px;line-height:1.8;color:var(--muted);padding:0 32px 28px 0}

.footer{background:var(--forest);color:var(--paper);padding:88px 0 28px}
.footer-invite{margin-bottom:80px}
.footer-invite>a{display:block;font-size:clamp(58px,8.5vw,130px);font-weight:500;line-height:1.02;letter-spacing:-.07em;position:relative;padding-right:150px}
.footer-invite>a>span:not(.footer-invite-arrow){color:var(--lime)}
.footer-invite-arrow{position:absolute;right:0;top:15px;background:var(--yellow);color:var(--forest);font-size:75px;width:120px;height:120px;border-radius:50%;display:grid;place-items:center;letter-spacing:0;transition:transform .4s}
.footer-invite>a:hover .footer-invite-arrow{transform:rotate(45deg)}
.footer-top{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-bottom:34px;border-bottom:1px solid #ffffff30;margin-bottom:44px}
.footer-top .brand{font-size:34px}
.footer-top .brand img{width:42px;height:42px}
.footer-columns{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr 1fr;gap:30px}
.footer-columns h3{font-size:13px;font-weight:500;color:#a9c2b0;margin-bottom:20px}
.footer-columns a{display:block;padding:7px 0;font-size:14px;line-height:1.6}
.footer-columns a:hover{color:var(--yellow)}
.footer-address a{font-size:17px}
.footer-address p{font-size:13px;line-height:1.8;color:#bbcebf;margin-top:18px}
.footer-columns h3.footer-subtitle{margin-top:22px;margin-bottom:10px}
.footer-bottom{display:flex;justify-content:space-between;gap:24px;border-top:1px solid #ffffff30;margin-top:50px;padding-top:26px;font-size:12px;color:#b5c8bb}
.footer-bottom>div{display:flex;gap:24px}
.reveal{transition:opacity .7s,transform .7s cubic-bezier(.2,.7,.3,1)}
.motion-ready .reveal{opacity:0;transform:translateY(28px)}
.motion-ready .reveal.visible{opacity:1;transform:translateY(0)}

@media(min-width:721px) and (prefers-reduced-motion:no-preference){.hero h1{animation:enter .9s both}
.hero-bottom{animation:enter 1s .12s both}
@keyframes enter{from{opacity:0;transform:translateY(22px)}
to{opacity:1;transform:translateY(0)}
}
}

@media(max-width:1180px){.header nav{gap:18px}
.header .brand{font-size:24px}
.header-contact{gap:16px!important}
.hero-bottom{gap:40px;grid-template-columns:.85fr 1.5fr}
.hero-description{font-size:16px}
.hero-proof{margin-top:25px}
.hero-showcase{gap:16px}
.hero-project{aspect-ratio:.96}
.hero-actions{margin-top:20px}
.hero-end{margin-top:36px}
.client-strip{grid-template-columns:140px 1fr;gap:28px}
.client-logos{gap:22px}
.section{padding-block:96px}
.project-grid{gap:48px 32px}
.project-link:nth-child(even){margin-top:90px}
.service-row{grid-template-columns:32px 1fr .72fr 48px;gap:18px}
.service-row h3{font-size:43px}
.round-arrow{width:48px;height:48px}
.studio{gap:40px}
.blog-grid{gap:24px}
.blog-link h3{font-size:22px}
.people-card{padding:36px}
.faq{gap:50px}
.footer-columns{grid-template-columns:1.5fr 1fr 1fr 1fr}
.footer-columns>div:last-child{grid-column:2/-1}
.footer-columns #social-links{display:flex;flex-wrap:wrap;gap:20px}
}

@media(max-width:950px){.header .brand span{display:none}
.header nav{gap:20px;font-size:13px}
.hero-location{display:none}
.hero h1{font-size:8.15vw}
.hero-bottom{grid-template-columns:.85fr 1.2fr;gap:32px}
.hero-showcase{gap:12px}
.hero-project{aspect-ratio:.77}
.hero-project-caption{font-size:12px;inset:auto 8px 8px;padding:8px}
.hero-project-note{font-size:11px}
.hero-description{font-size:16px}
.hero-proof>strong{font-size:42px}
.hero-proof>span{font-size:12px}
.hero-kicker{margin-bottom:28px}
.client-strip{display:block}
.client-strip>p{margin-bottom:22px}
.client-strip>p br{display:none}
.client-strip>p strong{margin-left:8px}
.client-logos{gap:25px}
.section-heading{gap:30px}
.heading-aside{flex-basis:285px}
.project-meta{flex-direction:column;gap:6px}
.service-row{grid-template-columns:25px 1fr .7fr 45px;gap:16px}
.service-row h3{font-size:35px}
.service-row p{font-size:13px}
.studio{gap:32px}
.studio-copy h2{font-size:40px}
.studio-photo>img{aspect-ratio:.8}
.studio-copy>p:not(.eyebrow){font-size:16px}
.stats>div>span{font-size:12px}
.partner-grid{grid-template-columns:repeat(3,1fr)}
.partner-grid>span{font-size:26px;border-bottom:1px solid var(--line)}
.partner-grid>span:nth-child(3){border-right:0}
.partner-grid>span:nth-child(n+4){border-bottom:0}
.blog-grid{grid-template-columns:1fr 1fr}
.blog-link:nth-child(2){margin-top:50px}
.blog-link:nth-child(3){margin-top:0;grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr;column-gap:28px}
.blog-link:nth-child(3) .blog-image{grid-row:1/5;height:100%;aspect-ratio:auto}
.blog-link:nth-child(3) .blog-category{margin-top:0}
.blog-link:nth-child(3) .read-story{justify-self:start}
.people-card{min-height:425px;padding:30px}
.people-card h2{font-size:55px}
.faq{gap:35px}
.faq-list summary{font-size:16px}
.footer-columns{gap:24px}
.footer-invite-arrow{width:90px;height:90px;font-size:55px}
.footer-invite>a{padding-right:110px}
}

@media(max-width:720px){:root{--gutter:24px}
.section{padding-block:72px}
.eyebrow{font-size:12px;letter-spacing:.08em;margin-bottom:22px}
h2{font-size:clamp(38px,8.5vw,58px)}
.header{padding-block:20px;gap:16px;flex-wrap:wrap}
.header .brand span{display:block;font-size:26px}
.header .brand img{width:31px;height:31px}
.menu-toggle{display:flex;align-items:center;justify-content:space-between;gap:22px;min-height:44px;padding:10px 14px;border:1px solid #ffffff50;color:white;background:transparent;border-radius:6px;font-size:14px;margin-left:auto}
.header-contact{display:none}
.header nav{display:none;flex-basis:100%;flex-direction:column;align-items:stretch;gap:0;padding-top:15px;font-size:16px}
.header.menu-open nav{display:flex}
.header nav>a{padding:12px 0}
.nav-dropdown>summary{padding:12px 0}
.nav-dropdown>div{position:static;width:100%;box-shadow:none;margin:0 0 12px}
.hero{padding-top:36px;padding-bottom:24px}
.hero-kicker{margin-bottom:26px}
.hero-kicker .eyebrow{font-size:10px;letter-spacing:.025em;gap:10px}
.status-dot{width:6px;height:6px;flex-shrink:0}
.hero h1{font-size:clamp(38px,8.15vw,58px);letter-spacing:-.068em;line-height:1.1}
.hero-bottom{grid-template-columns:1fr;gap:38px;margin-top:30px}
.hero-description{font-size:17px;max-width:410px;line-height:1.65}
.hero-actions{flex-direction:row;align-items:center;flex-wrap:wrap;gap:14px 24px;margin-top:24px}
.hero-actions .button{font-size:14px;padding:15px 20px;gap:25px;min-height:53px}
.hero-actions .text-link{font-size:13px;gap:13px}
.hero-proof{margin-top:28px;gap:16px}
.hero-proof>strong{font-size:42px}
.hero-proof>span{font-size:12px}
.hero-showcase{max-width:530px;width:100%;margin-inline:auto;gap:18px;padding-bottom:34px;padding-inline:4px}
.hero-project{aspect-ratio:.95}
.hero-project.first{transform:rotate(-3deg)}
.hero-project.second{transform:rotate(4deg);margin-top:28px}
.hero-project-caption{font-size:11px;inset:auto 8px 8px;padding:6px 8px}
.hero-project-caption>span{font-size:16px}
.hero-project-note{font-size:11px;bottom:0}
.hero-end{margin-top:24px;padding-top:20px;font-size:10px;letter-spacing:0;gap:12px}
.hero-end a span{margin-left:8px}
.client-strip{padding-block:30px}
.client-strip>p{font-size:12px;margin-bottom:24px}
.client-logos{display:grid;grid-template-columns:repeat(3,1fr);gap:26px 32px;justify-items:center}
.client-logo{width:100%;max-width:95px}
.client-logo img{height:33px}
.section-heading{flex-direction:column;align-items:flex-start;gap:24px;margin-bottom:36px}
.heading-aside{flex:auto;max-width:430px}
.heading-aside p,.section-description{font-size:16px;line-height:1.7;max-width:430px}
.heading-aside .text-link{margin-top:10px}
.project-grid{grid-template-columns:1fr;gap:38px}
.project-link,.project-link:nth-child(4n+2),.project-link:nth-child(4n+3){grid-column:auto}
.project-link:nth-child(even){margin-top:0}
.project-image,.project-link:first-child .project-image,.project-link:nth-child(2) .project-image{aspect-ratio:1.2;border-radius:10px}
.project-meta{flex-direction:row;align-items:baseline;gap:12px;padding-top:17px}
.project-meta h3{font-size:22px}
.project-meta>span{font-size:12px;white-space:normal;text-align:right;flex-shrink:0}
.project-overlay{width:42px;height:42px;bottom:16px;right:16px;font-size:22px}
.service-row{grid-template-columns:23px 1fr 42px;gap:10px 14px;padding:25px 0}
.service-number{font-size:12px;padding-top:8px;grid-column:1;grid-row:1}
.service-row h3{font-size:30px;grid-column:2}
.service-row p{grid-column:2;grid-row:2;font-size:13px;line-height:1.7}
.service-row p br{display:none}
.service-row .round-arrow{grid-column:3;grid-row:1/3;width:40px;height:40px;font-size:22px}
.service-row:hover,.service-row:focus-visible{padding-left:0;background:transparent;color:var(--forest)}
.studio{grid-template-columns:1fr;gap:36px}
.studio-copy{order:1}
.studio-photo{order:2}
.studio-photo>img{aspect-ratio:3/2;object-fit:contain}
.studio-copy h2{font-size:clamp(38px,8.5vw,58px)}
.studio-copy>p:not(.eyebrow){margin-top:24px}
.stats{margin-block:26px 15px;padding-block:26px;gap:12px}
.stats strong{font-size:36px}
.stats>div>span{font-size:12px;line-height:1.5}
.photo-tag{font-size:12px;left:16px;bottom:20px;padding:10px 15px}
.partner-grid>span{font-size:23px;min-height:95px}
.partner-grid small{font-size:10px}
.blog-grid{grid-template-columns:1fr;gap:40px}
.blog-link:nth-child(2),.blog-link:nth-child(3){margin-top:0}
.blog-link:nth-child(3){display:block;grid-column:auto}
.blog-link:nth-child(3) .blog-image,.blog-image{height:auto;aspect-ratio:1.5}
.blog-link:nth-child(3) .blog-category,.blog-category{margin:20px 0 12px}
.blog-link h3{font-size:26px}
.blog-link p{font-size:16px}
.award-dialog{padding:15px}
.award-dialog-header h2{font-size:18px}
.award-dialog-caption{font-size:12px}
.people-ctas{grid-template-columns:1fr;gap:24px;padding-top:72px}
.people-card{min-height:385px;padding:32px}
.people-card h2{font-size:clamp(48px,11vw,70px)}
.people-card p{font-size:16px;margin-block:24px 32px}
.people-card .eyebrow{font-size:11px}
.card-bottom{font-size:14px}
.faq{grid-template-columns:1fr;gap:38px}
.faq-intro h2{font-size:clamp(38px,8.5vw,58px)}
.faq-intro>p:not(.eyebrow){max-width:430px}
.faq-list summary{font-size:16px;padding-block:22px}
.faq-list details>p{font-size:16px;padding-right:15px}
.footer{padding-top:60px}
.footer-invite{margin-bottom:50px}
.footer-invite>a{font-size:clamp(45px,9vw,68px);padding-right:55px}
.footer-invite-arrow{width:46px;height:46px;font-size:30px;top:7px}
.footer-top{padding-bottom:30px;margin-bottom:34px}
.footer-top .brand{font-size:27px}
.footer-top .brand img{width:32px;height:32px}
.footer-top .button{font-size:12px;min-height:44px;padding:10px 14px;gap:16px}
.footer-columns{grid-template-columns:1fr 1fr;gap:32px 25px}
.footer-columns>div:first-child{grid-column:1/-1}
.footer-columns>div:last-child{grid-column:auto}
.footer-columns #social-links{display:block}
.footer-columns h3{font-size:13px;margin-bottom:14px}
.footer-columns a{font-size:14px}
.footer-address a{font-size:20px}
.footer-bottom{flex-direction:column;gap:16px;margin-top:36px;font-size:12px}
.footer-bottom>div{gap:18px}
}

@media(max-width:380px){:root{--gutter:20px}
.hero-kicker .eyebrow{font-size:9px}
.hero h1{font-size:8.3vw}
.hero-actions{gap:12px 18px}
.hero-actions .button{gap:18px;padding-inline:17px}
.hero-actions .text-link{font-size:12px}
.hero-end{font-size:9px}
.project-meta h3{font-size:20px}
.project-meta>span{font-size:11px}
.service-row h3{font-size:26px}
.partner-grid>span{font-size:20px}
.footer-top .brand{font-size:24px}
.footer-top .button{font-size:11px;gap:10px}
.footer-invite>a{font-size:10vw}
}

@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}
*,*:before,*:after{animation:none!important;transition:none!important}
.motion-ready .reveal{opacity:1;transform:none}
}

@media(max-width:1180px){}

@media(max-width:950px){}

@media(max-width:720px){}

@media(max-width:380px){}

@media(prefers-reduced-motion:reduce){}


/* V0.8 — contact-page language: forest, yellow type, a white panel with a green edge. */
.awards{padding-block:88px;background:var(--forest);color:#fff;position:relative;isolation:isolate;overflow:hidden}
.awards:before{content:'';position:absolute;inset:0;z-index:-1;background:radial-gradient(ellipse at 9% 100%,#86bd421b,transparent 58%);pointer-events:none}

.recognition-layout{display:grid;grid-template-columns:1fr 1.05fr;align-items:center;gap:clamp(40px,5vw,80px)}
.recognition-intro{min-width:0}
.recognition-intro .eyebrow{display:flex;align-items:center;gap:11px;font-size:12px;letter-spacing:.1em;color:#cfddd2;margin-bottom:32px}
.recognition-intro .eyebrow>span{width:7px;height:7px;background:var(--brand-lime);border-radius:50%;flex-shrink:0}
.recognition-intro h2{font-size:clamp(50px,5.6vw,86px);font-weight:600;letter-spacing:-.065em;line-height:1.05}
.recognition-intro h2>span{color:var(--yellow)}
.recognition-stop{color:var(--brand-lime)}
.recognition-intro>p:last-child{font-size:18px;line-height:1.75;color:#cfddd2;max-width:365px;margin-top:32px}

.recognition-panel{min-width:0;background:#fff;color:var(--forest);border-radius:28px;border-top:4px solid var(--brand-lime);padding:38px;box-shadow:0 20px 55px #0e281c18}
.recognition-panel-heading{display:flex;justify-content:space-between;align-items:flex-start;gap:22px;margin-bottom:30px}
.recognition-panel-heading h3{font-size:clamp(22px,2vw,30px);font-weight:500;letter-spacing:-.045em;line-height:1.25}
.recognition-year{flex-shrink:0;padding:6px 12px;border:1px solid #1c383026;border-radius:40px;font-size:12px;line-height:1.4;margin-top:3px}

.recognition-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:26px}
.recognition-award{min-width:0}
.recognition-link{display:block;border-radius:10px}
.recognition-link:focus-visible{outline-color:var(--forest);outline-offset:7px}
.recognition-art{aspect-ratio:1;border-radius:10px;overflow:hidden;background:var(--forest)}
.recognition-art img{width:100%;height:auto;aspect-ratio:1;object-fit:contain}
.recognition-caption{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:20px}
.recognition-caption h4{margin:0;font-size:25px;font-weight:500;letter-spacing:-.035em;line-height:1.2}
.recognition-expand{width:30px;height:30px;display:grid;place-items:center;background:var(--yellow);color:var(--forest);border-radius:50%;font-size:18px;transition:transform .25s}
.recognition-link>p{margin-top:10px;font-size:15px;line-height:1.6;color:var(--muted)}
.recognition-link:hover .recognition-expand{transform:translate(2px,-2px)}

@media(max-width:1180px){.awards{padding-block:76px}
.recognition-layout{gap:40px;grid-template-columns:.9fr 1.1fr}
.recognition-intro h2{font-size:60px}
.recognition-panel{padding:30px;border-radius:24px}
.recognition-gallery{gap:20px}
.recognition-panel-heading h3{font-size:24px}
.recognition-intro>p:last-child{font-size:17px}
}

@media(max-width:950px){.recognition-layout{grid-template-columns:1fr;gap:38px}
.recognition-intro h2{font-size:64px}
.recognition-intro>p:last-child{max-width:440px;margin-top:24px}
.recognition-panel{max-width:700px;width:100%}
.recognition-panel-heading h3{font-size:29px}
.recognition-gallery{gap:28px}
.recognition-intro .eyebrow{margin-bottom:25px}
}

@media(max-width:720px){.awards{padding-block:60px}
.recognition-intro h2{font-size:clamp(44px,9vw,62px)}
.recognition-intro>p:last-child{font-size:16px;max-width:360px}
.recognition-panel{padding:26px;border-radius:22px}
.recognition-panel-heading{margin-bottom:25px;gap:15px}
.recognition-panel-heading h3{font-size:25px}
.recognition-gallery{gap:20px}
.recognition-caption{margin-top:16px;gap:12px}
.recognition-caption h4{font-size:24px}
.recognition-link>p{font-size:14px}
}

@media(max-width:540px){.recognition-panel{padding:26px}
.recognition-panel-heading h3{font-size:22px}
.recognition-year{padding:5px 9px}
.recognition-gallery{grid-template-columns:1fr;gap:28px}
.recognition-link{display:grid;grid-template-columns:96px minmax(0,1fr);gap:0 20px;align-items:center}
.recognition-art{grid-row:1/3}
.recognition-caption{margin-top:0;align-self:end;gap:10px}
.recognition-link>p{margin-top:9px;font-size:14px;align-self:start}
.recognition-caption h4{font-size:24px}
.recognition-expand{width:27px;height:27px;font-size:17px}
.recognition-award+ .recognition-award{padding-top:28px;border-top:1px solid #1c383021}
}

@media(max-width:380px){.recognition-intro h2{font-size:43px}
.recognition-panel{padding:22px}
.recognition-panel-heading h3{font-size:20px}
.recognition-link{grid-template-columns:78px minmax(0,1fr);gap:0 16px}
.recognition-caption h4{font-size:22px}
.recognition-expand{width:24px;height:24px}
.recognition-link>p{font-size:14px}
.recognition-year{font-size:12px;padding:4px 8px}
}

@media(prefers-reduced-motion:reduce){.recognition-expand{transition:none}
}


/* V0.9 — the Growth Engine as a clear editorial list. */
.growth{background:var(--forest);color:var(--paper);padding-block:104px}

.engine-layout{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:clamp(48px,7vw,112px)}
.engine-copy{min-width:0}
.engine-copy .eyebrow{font-size:12px;letter-spacing:.1em;color:#cfddd2;margin-bottom:28px}
.engine-copy h2{font-size:clamp(40px,4.4vw,68px);font-weight:500;line-height:1.1;letter-spacing:-.055em}
.engine-copy h2>span{color:var(--yellow)}
.engine-intro{max-width:445px;font-size:17px;line-height:1.8;color:#cfddd2;margin-top:28px}
.engine-cta{margin-top:34px;font-size:14px;gap:28px}

.engine-disciplines{list-style:none;margin:0;padding:0;border-top:1px solid #ffffff30}
.engine-disciplines>li{display:grid;grid-template-columns:32px minmax(0,1fr);gap:24px;padding:30px 0 32px;border-bottom:1px solid #ffffff30}
.engine-number{font-size:12px;letter-spacing:.04em;color:var(--yellow);padding-top:10px}
.engine-disciplines h3{font-size:clamp(32px,3vw,46px);font-weight:500;line-height:1.15;letter-spacing:-.045em;margin:0}
.engine-disciplines p{max-width:365px;font-size:16px;line-height:1.7;color:#cfddd2;margin-top:12px}

@media(max-width:1180px){.growth{padding-block:88px}
.engine-layout{gap:54px}
.engine-copy h2{font-size:46px}
.engine-disciplines>li{gap:20px;padding-block:27px}
.engine-disciplines h3{font-size:37px}
.engine-intro{font-size:16px}
.engine-cta{padding-inline:21px;gap:22px}
}

@media(max-width:950px){.engine-layout{grid-template-columns:1fr;gap:44px}
.engine-copy{max-width:600px}
.engine-copy h2{font-size:52px}
.engine-intro{max-width:510px}
.engine-disciplines>li{grid-template-columns:38px minmax(0,1fr);gap:24px;padding-block:28px}
.engine-disciplines>li>div{display:grid;grid-template-columns:1fr 1.15fr;gap:28px;align-items:center}
.engine-disciplines p{margin-top:0;max-width:330px}
.engine-number{padding-top:8px}
.engine-cta{margin-top:28px}
}

@media(max-width:720px){.growth{padding-block:64px}
.engine-layout{gap:38px}
.engine-copy .eyebrow{margin-bottom:22px}
.engine-copy h2{font-size:clamp(36px,7.5vw,50px)}
.engine-intro{font-size:16px;line-height:1.75;margin-top:23px}
.engine-cta{font-size:14px;max-width:100%;gap:20px;margin-top:27px}
.engine-disciplines>li{grid-template-columns:26px minmax(0,1fr);gap:18px;padding-block:25px}
.engine-disciplines>li>div{display:block}
.engine-disciplines h3{font-size:34px}
.engine-disciplines p{font-size:16px;margin-top:10px;max-width:360px}
.engine-number{padding-top:7px}
}

@media(max-width:380px){.engine-copy h2{font-size:34px}
.engine-cta{font-size:13px;padding-inline:17px;gap:16px}
.engine-disciplines h3{font-size:31px}
}


/* V0.10 — restrained cards for the existing three disciplines. */
.engine-disciplines{display:grid;gap:16px;border:0}

.engine-disciplines>li{padding:26px 28px;gap:20px;border:1px solid #ffffff1f;border-radius:16px;background:#ffffff0a;box-shadow:0 6px 18px #0c24191a}

.engine-disciplines h3{font-size:clamp(30px,2.65vw,40px)}

.engine-disciplines p{margin-top:10px}

.engine-number{padding-top:8px}

@media(max-width:1180px){.engine-disciplines>li{padding:25px;gap:18px}
.engine-disciplines h3{font-size:34px}
}

@media(max-width:950px){.engine-disciplines>li{padding:26px 28px;gap:22px}
.engine-disciplines p{margin-top:0}
}

@media(max-width:720px){.engine-disciplines{gap:14px}
.engine-disciplines>li{padding:24px;grid-template-columns:24px minmax(0,1fr);gap:16px;border-radius:14px}
.engine-disciplines h3{font-size:31px}
.engine-disciplines p{margin-top:9px}
.engine-number{padding-top:7px}
}

@media(max-width:380px){.engine-disciplines>li{padding:22px 20px;gap:14px}
.engine-disciplines h3{font-size:29px}
}


```
