# tools

Generators for components that are duplicated across pages. **Edit the generator, re-run it,
commit the result** — do not hand-edit the generated block in the HTML, or the copies drift.
That is how the old footer ended up as 11 near-identical variants differing only in one href.

| Script | Owns | Pages |
| --- | --- | --- |
| `gen_footer.py` | the `.footer` block (design.md §9m) | all 11 pages with a full footer; `contact.html` keeps its own `.ac-footer` |

```
python3 tools/gen_footer.py
```

It writes into `dist/` using an absolute path, so it runs from anywhere.

> The Growth Engine (design.md §7) is generated the same way, but its script writes an
> `engine.frag` next to itself for a second script to pick up, and neither is committed yet.
> Moving just one of the pair here would leave a half-migrated state, so that move is its own
> job. Until then §7's generator lives only in the session scratchpad.

## Checks

`check_footer.py` renders every page at 15 widths — the widths either side of each breakpoint,
not just round numbers — and asserts the footer does not overflow the viewport, escape
`.footer`, overlap itself, scroll the document sideways, lose the lockup mark, or carry a link
with no accessible name or a dead `#` href. It also checks social tap targets stay ≥32px on
small screens. Needs a static server on port 8099:

```
cd dist && python3 -m http.server 8099 &
python3 tools/check_footer.py
```
