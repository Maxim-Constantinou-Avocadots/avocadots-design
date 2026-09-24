# -*- coding: utf-8 -*-
"""Rebuild the shared footer and inject it into every page that carries one.

The footer was 11 near-identical copies differing only in the Home href, so it
drifted. This is now the single source: edit here, re-run, all pages match.

design.md is the canon for the component. V0.39 replaces the V0.1 footer:
a huge invite with 300px of dead space beside it, a duplicate "Contact us"
button 100px under a link that already said the same thing, and five equal
columns of flat 14px links over an address block that ran out after three
lines.
"""
import io, os, re, glob

OUT = "/home/user/avocadots-design/dist"

# --- socials -----------------------------------------------------------------
# All stroke-drawn at 1.7, to match the mega-menu icon set already in the site.
# A row mixing filled and stroked marks reads as borrowed assets.
SOCIAL = [
 ("Facebook", "https://www.facebook.com/avocadotsDesignStudio/",
  '<path d="M15 7.2h-1.7a2.7 2.7 0 0 0-2.7 2.7V21"/><path d="M8.4 13.1h5.8"/>'),
 ("Instagram", "https://www.instagram.com/avocadots_/",
  '<rect x="3.8" y="3.8" width="16.4" height="16.4" rx="5"/>'
  '<circle cx="12" cy="12" r="3.6"/><path d="M16.9 7.1h.01"/>'),
 ("LinkedIn", "https://cy.linkedin.com/company/avocadots",
  '<path d="M7.8 10.4V19"/><path d="M7.8 6.7h.01"/>'
  '<path d="M12.4 19v-4.6a3.1 3.1 0 0 1 6.2 0V19"/><path d="M12.4 19v-8.6"/>'),
 ("WhatsApp", "https://api.whatsapp.com/send?phone=%3C+447851656763%3E",
  '<path d="M20.4 11.8a8 8 0 0 1-11.6 7.1L4 20.5l1.3-4.7A8 8 0 1 1 20.4 11.8Z"/>'
  '<path d="M9.6 9.4c.3 2.7 2.3 4.7 5 5l.9-1.4 1.5.7a3.4 3.4 0 0 1-4.1 1.2 6.6 6.6 0 0 1-3.6-3.6 3.4 3.4 0 0 1 1.2-4.1l.7 1.5Z"/>'),
 ("TikTok", "https://www.tiktok.com/@avocadots_",
  '<path d="M14.2 3.8v10.7a3.6 3.6 0 1 1-3.6-3.6"/>'
  '<path d="M14.2 3.8a4.9 4.9 0 0 0 4.9 4.9"/>'),
 ("YouTube", "https://www.youtube.com/@avocadotsdesign",
  '<rect x="3" y="5.6" width="18" height="12.8" rx="3.6"/>'
  '<path d="m10.6 9.6 4.5 2.4-4.5 2.4Z"/>'),
]

def social_item(name, href, paths):
    return (
      '<li><a href="%s" target="_blank" rel="noopener" aria-label="Avocadots on %s">'
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" '
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">%s</svg>'
      '</a></li>' % (href, name, paths)
    ) 

# --- nav ---------------------------------------------------------------------
# Same destinations as before, regrouped so no column needs a sub-heading.
# The old "Company" column carried a second <h3>Topics</h3> half way down, which
# read as a ragged fifth column rather than a group.
COLUMNS = [
 ("Services", [
   ("Branding", "branding.html"),
   ("Web Design", "https://www.avocadots.com/web-design"),
   ("E-Commerce", "https://www.avocadots.com/ecommerce-shopify"),
   ("Digital Marketing", "https://www.avocadots.com/digital-marketing"),
   ("CRM", "https://www.avocadots.com/crm"),
   ("ChatGPT Ads", "chatgpt-ads.html"),
 ]),
 ("Studio", [
   ("About Us", "about.html"),
   ("Our Mission", "mission.html"),
   ("Why Choose Us", "https://www.avocadots.com/why-choose-us"),
   ("Our Process", "https://www.avocadots.com/process"),
   ("Careers", "careers.html"),
   ("FAQ", "faq.html"),
 ]),
 ("Explore", [
   ("Home", "index.html"),
   ("Our Work", "work.html"),
   ("Blog", "blog.html"),
   ("Contact", "contact.html"),
 ]),
 ("Topics", [
   ("Web Design", "https://www.avocadots.com/blog/categories/web-design"),
   ("Digital Marketing", "https://www.avocadots.com/blog/categories/digital-marketing"),
   ("Business", "https://www.avocadots.com/blog/categories/business"),
   ("Branding", "https://www.avocadots.com/blog/categories/branding"),
 ]),
]

def column(title, links):
    items = "".join('<li><a href="%s">%s</a></li>' % (h, t) for t, h in links)
    return '<div class="fx-col"><h3>%s</h3><ul>%s</ul></div>' % (title, items)

ARROW = ('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
         'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">'
         '<path d="M7 17 17 7"/><path d="M8.5 7H17v8.5"/></svg>')

# The positioning line and the locality line are the studio's own words, from
# the homepage hero and the FAQ respectively. Do not write new claims here.
FOOTER = (
'<footer class="footer">'
  '<div class="wrap">'

    '<a class="fx-invite" href="contact.html">'
      '<span class="fx-invite-copy">'
        '<span class="eyebrow">The next good thing starts here.</span>'
        '<span class="fx-invite-title">Let&rsquo;s make<br><em>some growth.</em></span>'
      '</span>'
      '<span class="fx-orb" aria-hidden="true">' + ARROW + '</span>'
    '</a>'

    '<div class="fx-main">'
      '<div class="fx-id">'
        '<span class="fx-lockup"><img src="assets/brand-mark.png" alt="" width="96" height="96"><span>avocadots</span></span>'
        '<p class="fx-line">We bring branding, websites, and marketing together to move ambitious businesses forward.</p>'
        '<ul class="fx-contact">'
          '<li><a href="mailto:crew@avocadots.com">crew@avocadots.com</a></li>'
          '<li><a href="tel:+35722251025">+357 22 251025</a></li>'
          '<li><span>Tziortzi Dimitrof<br>Nicosia 1048, Cyprus</span></li>'
        '</ul>'
        '<ul class="fx-social">' + "".join(social_item(*s) for s in SOCIAL) + '</ul>'
      '</div>'
      '<nav class="fx-nav" aria-label="Footer">' + "".join(column(*c) for c in COLUMNS) + '</nav>'
    '</div>'

    '<div class="fx-base">'
      '<p class="fx-where"><span class="status-dot" aria-hidden="true"></span>Nicosia, Cyprus &mdash; working with clients across Europe.</p>'
      '<p class="fx-legal"><span>&copy; 2026 Avocadots</span>'
        '<a href="https://www.avocadots.com/terms-and-conditions">Terms &amp; Conditions</a>'
        '<a href="https://www.avocadots.com/privacy-policy">Privacy Policy</a></p>'
    '</div>'

  '</div>'
'</footer>')

# --- inject ------------------------------------------------------------------
pat = re.compile(r'<footer class="footer">.*?</footer>', re.S)
changed = []
for p in sorted(glob.glob(os.path.join(OUT, "*.html"))):
    s = io.open(p, encoding="utf-8").read()
    if not pat.search(s):
        continue                       # contact.html has its own compact footer
    s2 = pat.sub(lambda m: FOOTER, s, count=1)
    if s2 != s:
        io.open(p, "w", encoding="utf-8").write(s2)
        changed.append(os.path.basename(p))

print("footer rebuilt on %d pages:" % len(changed))
print("  " + ", ".join(changed))
