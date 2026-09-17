# Avocadots — Design Continuation Guide

**Design baseline:** V0.14 · 17 September 2026  
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
| Overlapping Growth Engine circles, hub, selector boxes, extra tags and descriptions | Visually messy and harder to understand | Three immediately visible disciplines with concise explanations |
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

## 7. Canonical Growth Engine component — current V0.14

This is the most important current component to preserve when continuing the latest work.

### Content: keep exactly unless copy changes are requested

**Eyebrow:** 04 / The Unified Growth Engine

**Heading:**

> Good on their own.  
> Better together.

The second line is yellow.

**Description:**

> Your brand, website, and marketing should move in the same direction. We bring them together, with one team focused on your growth.

**CTA:** Explore the growth engine  
**Destination:** https://www.avocadots.com/unified-growth

| Index | Title | Description |
| --- | --- | --- |
| 01 | Brand | A clear identity that shapes every touchpoint. |
| 02 | Website | A digital experience that turns interest into action. |
| 03 | Marketing | Campaigns that bring the right people to your business. |

### Structure

- Solid forest section.
- Two equal columns on wide desktop: introduction/CTA left, three stacked cards right.
- Column gap: `clamp(48px, 7vw, 112px)`.
- Section padding: 104px vertically; 88px at 1180px; 64px at 720px.
- Both columns align vertically to their centres.
- All three descriptions are visible immediately.
- One actual action: the CTA. The cards are informational, not clickable.

### Exact card treatment

```css
.engine-disciplines {
  display: grid;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
}

.engine-disciplines > li {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 20px;
  padding: 26px 28px;
  border: 1px solid #ffffff1f;
  border-radius: 16px;
  background: #ffffff0a;
  box-shadow: 0 6px 18px #0c24191a;
}
```

The background is white at approximately 4% opacity **over forest**. Do not turn it into a solid pale green card. The border is approximately 12% white opacity. The yellow number is a small text index, not a badge or icon.

- Title: 30–40px; description: 16px; title-to-description gap: 10px.
- Below 1180px: 25px card padding, 18px inner gap, 34px title.
- Below 950px: overall columns stack; each card can place its title and description beside one another when there is enough width.
- Below 720px: title and description stack; 24px card padding; 14px radius and gap; 31px title.
- Below 380px: 22px vertical / 20px horizontal card padding; 29px title.

Do not restore rings, diagrams, connector arrows, a central logo hub, service tags, selection controls, or a second paragraph that changes when a card is clicked. Do not add hover movement that implies these informational cards are links.

### V0.13 — presence pass

The user reported they could scroll past this section without stopping, and asked it to carry
the page's "wow" moment, because it is where the studio's difference is explained. Four
measurable causes were found in the V0.10 build, and all four are now fixed:

1. It carried the **smallest display heading on the page** (68px cap, against 86px for awards,
   85px for the people cards and 78px for a generic section H2).
2. It was the **third forest section**, sharing a surface with the hero and awards.
3. It was **absent from the reveal system** — `.section-heading, .project-link, .studio-copy,
   .blog-link, .people-card` named no engine selector, so nothing happened on scroll.
4. It is the **only major section with no imagery**, so the eye has nothing to land on.

The fix adds no new elements. Per §1, the lift comes from surface, scale and contrast:

```css
.growth{background:var(--deep);padding-block:136px;position:relative;isolation:isolate;overflow:hidden}
.growth:before{content:"";position:absolute;inset:0;z-index:-1;
  background:radial-gradient(ellipse at 84% 6%,#86bd4218,transparent 62%);pointer-events:none}

.engine-layout{grid-template-columns:1.1fr 1fr;gap:clamp(48px,6vw,104px)}
.engine-copy h2{font-size:clamp(44px,5.2vw,82px);line-height:1.04;letter-spacing:-.062em}
.engine-disciplines>li{padding:30px 32px;gap:22px;grid-template-columns:34px minmax(0,1fr);
  border:1px solid #ffffff26;background:#ffffff0f;box-shadow:0 10px 28px #0818110f}
.engine-disciplines h3{font-size:clamp(34px,3.5vw,54px);letter-spacing:-.05em}
```

- `--deep` makes this the darkest surface on the page, so it stops reading as another forest
  band and yellow hits harder. The wash follows the Contact reference and is intentionally faint.
- The heading moves from the smallest display size on the page to among the largest. The left
  column widens to `1.1fr` so the two documented lines still hold; **measured in Chromium, the
  heading stays exactly two lines from 1600px down to 320px.** Change either value and re-measure.
- The disciplines become typographic statements (54px cap, up from 40px) rather than card titles.
  With no imagery in this section, the type is the visual.
- The card wash rises from 4% to 6% white and the border from 12% to 15%, which keeps the same
  *perceived* contrast now that the ground is darker. It is still white-over-dark, not a solid
  pale green card.
- `.engine-copy` and `.engine-disciplines>li` join the existing reveal system, with the three
  cards staggered 0 / 0.09 / 0.18s. This uses the site's existing 28px/700ms reveal, not a new
  motion language, and `prefers-reduced-motion` still disables it.

What did **not** change: the two-column composition, the copy, the CTA, the non-interactive
cards, and every rejected treatment in §3 stays rejected. The cards gained no hover, because
they still have no destination.

Still open: this remains the only major section with no real visual content. If it needs to
carry more, the next step is evidence rather than ornament — and that needs the user's input,
not invented material.

### V0.14 — three disciplines, one panel

After V0.13 the user still found the section uninteresting. The remaining fault was not scale,
it was that **the composition argued against the copy**: a headline reading "Better together"
was rendered as three separated, near-identical cards, so the section read as a generic
three-service list rather than the studio's differentiator.

The three cards become three rows inside one panel — distinct on their own, visibly one thing.
This borrows the composed-panel language of the contact and awards sections the user called on
brand, and the green top edge §4 already reserves for panel edges. It is the first brand green
in this section.

```css
.engine-disciplines{display:block;gap:0;
  border:1px solid #ffffff24;border-top:4px solid var(--brand-lime);
  border-radius:24px;background:#ffffff0d;box-shadow:0 18px 44px #0818111f;overflow:hidden}

.engine-disciplines>li{border:0;border-radius:0;background:transparent;box-shadow:none;
  padding:34px 36px;gap:24px;grid-template-columns:38px minmax(0,1fr)}
.engine-disciplines>li+li{border-top:1px solid #ffffff1c}
.engine-number{font-size:17px;font-weight:500;padding-top:13px}
```

- `overflow:hidden` is load-bearing: it clips the row dividers to the panel's radius.
- The yellow index grows to 17px. It is still a text index, not a badge or icon.
- The panel reveals as **one unit** — `.engine-disciplines`, not its rows. The V0.13 per-row
  stagger is retired and explicitly zeroed, because rows fading in inside an already-visible
  panel read as broken.
- Row padding steps: 28px/30px at 1180, 30px/32px at 950, 26px/22px at 720, 22px/18px at 380.

What did **not** change: the two-column composition and stacked order §3 says to continue with,
the copy, the CTA, and the rows staying non-interactive. No diagram, hub, connector, tag, badge
or control was added. Measured in Chromium 1600px→320px: heading holds two lines, no title
wraps, no overflow.

**Still the open lever.** This section remains the only major one with no real visual content,
and three rounds of composition work have now taken the design-only route about as far as it
goes. If it must carry more, the next step is evidence, not ornament: a real figure per
discipline, or one real project per discipline. Both need the user's confirmation — §10's
figures must not be silently moved or merged, and which project demonstrates which discipline
is not something to guess.

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
