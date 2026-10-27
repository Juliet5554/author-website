# The House That Waited: companion site for *Hameward Bend* (working draft)

Plain HTML, CSS and JavaScript. No build step, no framework, no third-party scripts or fonts. It's published at thehousethatwaited.au through GitHub Pages (GitHub manages the `CNAME` from the Pages settings; don't edit it here).

Every page is **static HTML**: all the words are in the page itself, so it works with JavaScript switched off. `js/main.js` only adds extras (see below).

**Not indexed yet.** Every page carries a `noindex` tag and `robots.txt` blocks all crawlers, because the site is live while unfinished. See "Launching" below.

## Where things live

| To change… | Edit |
|---|---|
| Any words on a page | That page's `.html` file: `index.html` (Home), `the-book/index.html` (The Book), `from-the-scullery/index.html` (From the Scullery) |
| Outstanding items for Julie (the `[ … ]` markers) | HTML comments next to where each belongs; search the files for `[ ` |
| Colours and fonts | Top of `css/styles.css`, section 1 "Design tokens" |
| Optional behaviour (floating "Back to top", debug tools) | `js/main.js` |

### The EDIT HERE comments

Each block of words in a page has a comment above it, like `<!-- EDIT HERE: welcome line -->`. Change the text directly below that comment and leave the tags (`<p>`, `<h2>` and so on) around it alone. Use `<em>…</em>` for italics.

The header, nav and footer are written out in full in every file (there are no includes). If you change one, make the same change in every page. Only list pages that exist in the nav. The footer carries the reader contact address as a `mailto:` link.

The Book's text is Julie's own wording from `Hameward_Bend.docx`. The one deliberate change is "housethatwaited.au" written as "thehousethatwaited.au" (her real domain).

From the Scullery's text is Julie's own wording from `These_are_the_family_recipes_I_remember.docx`, unchanged (her spelling, punctuation and apostrophes included). Its `EDIT HERE` blocks are: the page title and description, the introduction, one block per dish (heading, paragraphs and method, so each dish can be edited on its own), and the closing line. The only wording that isn't Julie's is the page's meta description and the "On this page", "Back to the book" and "Back to top" link labels.

### Open items for Julie

| Marker | Where | What's needed |
|---|---|---|
| `[ hero photo — Julie to confirm an original ]` | Home, hero | A confirmed family photograph |
| `[ book cover image — Julie to supply ]` | The Book, top right | The cover image |
| `[ IngramSpark / buy link — Julie to supply ]` | The Book, "Where to buy" | The buy link (no button until then) |
| `[ footer wording — Julie to confirm ]` | Footer (every page) | Her OK on the footer's "Memories and corrections are welcome" line and the reader contact address |
| `[ TEMP — replace with Julie's own welcome ]` | Home, welcome line | Her own welcome words |
| `[ Scullery photographs — … ]` | From the Scullery, after the introduction | Julie is waiting on permission from her children. Then the layout (a loose pile of photographs, some partly visible) still has to be designed. Nothing shows on the page until then |
| `[ knitting / "Threads from the past" — … ]` | From the Scullery, end of the page | Julie to send material; whether it gets its own page or sits inside this one is still to be decided |
| Burns epigraph | Home only | Not an open item: Julie asked for the quotation to live on Home only ("where it has real significance"). A comment on The Book marks where it was removed |

The first two also show as amber blocks on the page. The two Scullery markers are comments only; nothing shows on the page.

## Adding a page

1. Copy `the-book/index.html` (or `from-the-scullery/index.html`) to a new folder, e.g. `music/index.html`. Keep the `noindex` tag, the `../` paths, and the shared header and footer.
2. Replace the content blocks, keeping the `EDIT HERE` comments.
3. Add the page to the nav in **every** page's header (the nav is currently Home, The Book, From the Scullery; on very narrow phones it wraps onto a second line, and there is no JavaScript menu), and give its door card on the Home page a link (a door with no link shows as "In preparation"; the comment above the doors explains how to switch one on).

## Moving around: The Book and From the Scullery

- **On this page** is a small heading with one quiet row of links (no box). On The Book it lists the four sections; on From the Scullery it lists the 17 dishes. Everything is always on the page; nothing is hidden behind tabs.
- The Book's six part headings keep their `id`s (`part-1` to `part-6`) although the part links are no longer shown, so they can come back later. If you add a section, add its `id` and a line in the jump row. On From the Scullery, give each new dish heading an `id` and add it to the row.
- The Book: each major section ends with a **Back to top** link (works without JavaScript). From the Scullery: one **Back to top** link and one **Back to the book** link after the closing line, and no per-dish links.
- On wider screens (about 830px and up), `main.js` also shows a small floating "Top" button after the visitor scrolls. It stays hidden on narrow screens, where it would cover the text. Its accessible name is copied from the page's own "Back to top" link.
- On From the Scullery, "Ingredients and method" and "Method" are small labels, not headings, so the heading outline is just the title and the 17 dishes.
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
