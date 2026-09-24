"""Render every page at every footer breakpoint and assert the footer holds.

Needs a static server on 8099:  cd dist && python3 -m http.server 8099 &
"""
import glob, os
from playwright.sync_api import sync_playwright

WIDTHS = [1920,1440,1180,1101,1100,1024,950,900,861,860,820,768,720,540,381,380,320]
PAGES  = [os.path.basename(p) for p in sorted(glob.glob('/home/user/avocadots-design/dist/*.html'))]

CHECK = """() => {
  const out=[], f=document.querySelector('.footer');
  if(!f) return [];
  const vw=document.documentElement.clientWidth, fr=f.getBoundingClientRect();

  f.querySelectorAll('*').forEach(el=>{
    const r=el.getBoundingClientRect();
    if(!r.width) return;
    // the marquee track is intentionally wider than the screen; its parent
    // clips it, so measure the clip box rather than the track
    if(el.closest('.fx-marquee-track')||el.classList.contains('fx-marquee-track')) return;
    if(r.left<-1||r.right>vw+1) out.push({over:el.className||el.tagName,l:Math.round(r.left),r:Math.round(r.right),vw});
    if(r.left<fr.left-1.5||r.right>fr.right+1.5) out.push({escape:el.className||el.tagName});
  });

  if(document.documentElement.scrollWidth>vw+1) out.push({hscroll:document.documentElement.scrollWidth,vw});

  // siblings sharing a grid cell overlap silently: no overflow, no escape,
  // just text on top of text
  [['.fx-cta-top > *'],['.fx-ways > *'],['.fx-base > *'],['.fx-nav > *']].forEach(([sel])=>{
    const k=[...document.querySelectorAll(sel)].map(el=>({n:el.className||el.tagName,r:el.getBoundingClientRect()}));
    for(let i=0;i<k.length;i++)for(let j=i+1;j<k.length;j++){
      const a=k[i].r,b=k[j].r;
      if(a.width&&b.width&&a.left<b.right-2&&b.left<a.right-2&&a.top<b.bottom-2&&b.top<a.bottom-2)
        out.push({overlap:[k[i].n,k[j].n],sel});
    }
  });

  // images must actually load (the lockup mark and every marquee tick)
  f.querySelectorAll('img').forEach(im=>{
    if(!(im.complete&&im.naturalWidth>0)) out.push({brokenimg:im.getAttribute('src')});
  });
  if(!f.querySelector('.fx-lockup img')) out.push({nomark:1});
  if(!f.querySelector('[data-clock]')) out.push({noclock:1});

  // every link needs a real href and a non-empty accessible name
  f.querySelectorAll('a').forEach(a=>{
    const name=(a.getAttribute('aria-label')||a.textContent||'').trim();
    if(!name) out.push({unnamed:a.getAttribute('href')});
    const h=a.getAttribute('href');
    if(!h||h==='#') out.push({deadhref:name});
  });

  // the marquee duplicates nav link text, so it must be hidden from readers
  const mq=f.querySelector('.fx-marquee');
  if(mq&&mq.getAttribute('aria-hidden')!=='true') out.push({marqueeExposed:1});
  if(mq&&mq.querySelector('a')) out.push({marqueeHasLink:1});

  if(vw<=540) f.querySelectorAll('.fx-social a').forEach(a=>{
    const r=a.getBoundingClientRect();
    if(r.width<32||r.height<32) out.push({tiny:a.getAttribute('aria-label'),w:r.width,h:r.height});
  });
  return out;
}"""

with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome')
    bad = seen = 0
    for page in PAGES:
        for w in WIDTHS:
            pg = b.new_page(viewport={'width': w, 'height': 900})
            errs = []
            pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' and 'ERR_CERT' not in m.text else None)
            pg.goto('http://127.0.0.1:8099/' + page, wait_until='networkidle')
            pg.wait_for_timeout(250)
            res = pg.evaluate(CHECK); seen += 1
            if res or errs:
                bad += 1
                uniq = []
                for r in res:
                    if r not in uniq: uniq.append(r)
                print('FAIL', page, w, uniq[:6], errs[:2])
            pg.close()
    print('checked %d page/width combos, failures: %d' % (seen, bad))
    b.close()
