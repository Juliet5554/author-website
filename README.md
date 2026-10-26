# The House That Waited: companion site for *Hameward Bend* (working draft)

Plain HTML, CSS and JavaScript. No build step, no framework, no third-party scripts or fonts. It's published at thehousethatwaited.au through GitHub Pages (GitHub manages the `CNAME` from the Pages settings; don't edit it here).

Every page is **static HTML**: all the words are in the page itself, so it works with JavaScript switched off. `js/main.js` only adds extras (see below).

**Not indexed yet.** Every page carries a `noindex` tag and `robots.txt` blocks all crawlers, because the site is live while unfinished. See "Launching" below.

## Where things live

| To change… | Edit |
|---|---|
| Any words on a page | That page's `.html` file: `index.html` (Home), `the-book/index.html` (The Book) |
| Outstanding items for Julie (the `[ … ]` markers) | HTML comments next to where each belongs; search the files for `[ ` |
| Colours and fonts | Top of `css/styles.css`, section 1 "Design tokens" |
| Optional behaviour (floating "Back to top", debug tools) | `js/main.js` |

### The EDIT HERE comments

Each block of words in a page has a comment above it, like `<!-- EDIT HERE: welcome line -->`. Change the text directly below that comment and leave the tags (`<p>`, `<h2>` and so on) around it alone. Use `<em>…</em>` for italics.

The header, nav and footer are written out in full in every file (there are no includes). If you change one, make the same change in every page. Only list pages that exist in the nav.

The Book's text is Julie's own wording from `Hameward_Bend.docx`. The one deliberate change is "housethatwaited.au" written as "thehousethatwaited.au" (her real domain).

### Open items for Julie

| Marker | Where | What's needed |
|---|---|---|
| `[ hero photo — Julie to confirm an original ]` | Home, hero | A confirmed family photograph |
| `[ book cover image — Julie to supply ]` | The Book, top right | The cover image |
| `[ IngramSpark / buy link — Julie to supply ]` | The Book, "Where to buy" | The buy link (no button until then) |
| `[ reader contact email — Julie to confirm ]` | Footer | Her public contact address (none shown until then) |
| `[ TEMP — replace with Julie's own welcome ]` | Home, welcome line | Her own welcome words |

The first two also show as amber blocks on the page.

## Adding a page

1. Copy `the-book/index.html` to a new folder, e.g. `music/index.html`. Keep the `noindex` tag, the `../` paths, and the shared header and footer.
2. Replace the content blocks, keeping the `EDIT HERE` comments.
3. Add the page to the nav in **every** page's header, and give its door card on the Home page a link (a door with no link shows as "In preparation"; the comment above the doors explains how to switch one on).

## The Book: moving around

- **On this page** is a plain list of links to each section and part. Every part is always on the page; nothing is hidden behind tabs.
- Each part heading has an `id` (`part-1` to `part-6`) that the jump links use. If you add a section or part, add its `id` and a line in the jump list.
- Each major section ends with a **Back to top** link (works without JavaScript).
- On wider screens (about 830px and up), `main.js` also shows a small floating "Top" button after the visitor scrolls. It stays hidden on narrow screens, where it would cover the text.
- Smooth scrolling only switches on for visitors who haven't asked for reduced motion.

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
- Keyboard focus is clearly outlined. Motion only applies when the visitor hasn't asked for reduced motion.
- Image placeholders have an accessible name ("Book cover to be added").
- The floating "Back to top" button has an accessible name ("Back to top of The Book") and can be reached by keyboard.
