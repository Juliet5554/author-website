# The House That Waited: companion site for *Hameward Bend* (working draft)

Plain HTML, CSS and JavaScript. No build step, no framework, no third-party scripts or fonts. It's published at thehousethatwaited.au through GitHub Pages (GitHub manages the `CNAME` from the Pages settings; don't add or edit one here).

**Not indexed yet.** Every page carries a `noindex` tag and `robots.txt` blocks all crawlers, because the site is live while unfinished. See "Launching" below.

## Where things live

| To change… | Edit |
|---|---|
| Any words on the pages (headings, The Book's text, footer, door cards) | `js/content.js` |
| Outstanding items for Julie (the amber `[ … ]` markers) | `markers` at the top of `js/content.js` |
| Colours and fonts | Top of `css/styles.css`, section 1 "Design tokens" |
| Page structure / section order | `index.html`, `the-book/index.html` |
| Behaviour (filling the pages, debug tools) | `js/main.js` |
| Navigation | `nav` in `js/content.js` (list only pages that exist) |

Pages are one folder each so the addresses are clean (`/the-book/`). Each page's `<html>` tag has a `data-root` attribute: `""` for the home page, `"../"` for a page one folder down. The script uses it to build links, so don't remove it.

Text in `js/content.js` can use `*asterisks*` for italics. The script never treats content as HTML.

The Book's text is Julie's own wording from `Hameward_Bend.docx`. The one deliberate change is "housethatwaited.au" written as "thehousethatwaited.au" (her real domain).

## Adding a page

1. Copy `the-book/index.html` to a new folder, e.g. `music/index.html`. Keep `data-root="../"`, the `noindex` tag and the three links in `<head>`.
2. Set `data-page` on `<body>` and add a `meta` block for it in `js/content.js`. (`js/main.js` looks up the page's title and description from `data-page`; add a line for the new page where `pageMeta` is set.)
3. Add the page to `nav` in `js/content.js`, and give the matching home-page door card a `path` (a door with no `path` shows as "In preparation" with no link).
4. Put the page's words in `js/content.js` and mark them in the HTML with `data-content="…"`, `data-paragraphs="…"` or `data-list="…"`.

## Images

Copy only what a page uses into `assets/images/`, with a descriptive lowercase-hyphenated name (e.g. `armour-street-tenement-1950s.jpg`), resized to about 1600px on the long edge. Write real alt text. Julie's originals stay where they are, untouched.

## Launching (removing noindex)

This is a deliberate step for Patrick, once Julie decides to go public:

1. Delete the line `<meta name="robots" content="noindex, nofollow">` from `<head>` on **every** page.
2. Replace the contents of `robots.txt` with:
   ```
   User-agent: *
   Allow: /
   ```
   (or delete the file).
3. Push. Search engines can take days or weeks to pick the site up.

## Developer QA tools

Add to any page's address. They're for checking the build, not for visitors, and nothing shows without them.

- `?debug=alt` shows each image's alt text (or the placeholder's label) under it. Missing alt shows in red.
- `?debug=headings` shows the heading outline at the top of the page and flags skipped levels.
- Combine them: `?debug=alt,headings`.

## Trying it locally

From this folder run `python -m http.server 8000`, then open `http://localhost:8000/`.

## Accessibility notes

- Semantic landmarks (header, nav, main, footer), one `h1` per page, sections labelled by their headings, and a skip link.
- Text/background pairs meet WCAG AA contrast (lowest is about 6:1).
- Keyboard focus is clearly outlined. Motion (a gentle hover change) only applies when the visitor hasn't asked for reduced motion.
- Image placeholders have an accessible name ("Book cover to be added").
- The pages fill their text from `js/content.js`, so they need JavaScript; without it, a short notice is shown.
