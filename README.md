# The House That Waited: companion site for *Hameward Bend* (working draft)

Plain HTML, CSS and JavaScript. No build step, no framework, no third-party scripts or fonts. It's published at thehousethatwaited.au through GitHub Pages (GitHub manages the `CNAME` from the Pages settings; don't edit it here).

Every page is **static HTML**: all the words are in the page itself, so it works with JavaScript switched off. `js/main.js` only adds extras (see below).

**Not indexed yet.** Every page carries a `noindex` tag and `robots.txt` blocks all crawlers, because the site is live while unfinished. See "Launching" below.

## Where things live

| To change… | Edit |
|---|---|
| Any words on a page | That page's `.html` file: `index.html` (Home), `the-book/index.html` (The Book), `from-the-scullery/index.html` (From the Scullery), `threads-from-the-past/index.html` (A Thread Through the Generations; nav label "Threads from the Past"), `about-the-storyteller/index.html` (About the Storyteller) |
| Outstanding items for Julie (the `[ … ]` markers) | HTML comments next to where each belongs; search the files for `[ ` |
| Colours and fonts | Top of `css/styles.css`, section 1 "Design tokens" |
| Optional behaviour (floating "Back to top", debug tools) | `js/main.js` |

### The EDIT HERE comments

Each block of words in a page has a comment above it, like `<!-- EDIT HERE: welcome line -->`. Change the text directly below that comment and leave the tags (`<p>`, `<h2>` and so on) around it alone. Use `<em>…</em>` for italics.

The header, nav and footer are written out in full in every file (there are no includes). If you change one, make the same change in every page. Only list pages that exist in the nav. The footer carries the reader contact address as a `mailto:` link.

The Book's text is Julie's own wording from `Hameward_Bend.docx` (Part 6, The Heart of the Book and Beyond the Book updated from her 1 Nov 2026 notes). The one deliberate change is "housethatwaited.au" written as "thehousethatwaited.au" (her real domain).

From the Scullery's text is Julie's own wording, from her revised document of 1 Nov 2026 (`From the Scullery Revised 011126.txt`), applied as she wrote it (her spelling, punctuation and apostrophes included). The only change of ours is "I've starting using" corrected to "I've started using". Its `EDIT HERE` blocks are: the page title and description, the introduction, one block per dish (heading, paragraphs and method, so each dish can be edited on its own), and the closing line. The only wording that isn't Julie's is the page's meta description and the "On this page", "Back to the book" and "Back to top" link labels.

The photographs on From the Scullery have alt text but deliberately no visible captions (Julie's choice): no `<figcaption>`, no `title` attributes, no text over the photos. To move a photo to another dish, move its `<img>` into that dish's `<figure class="pile">` (or add one straight after the dish's `<h2>`, with `has-pile has-pile-left` or `has-pile-right` on the dish). The pile styling is section 5c of `css/styles.css`.

A Thread Through the Generations and About the Storyteller are also Julie's own words (`A_Thread_Through_the_Generations.txt`, `Personal bio.txt`). The one wording fix on the Threads page is "form the Shetlands" corrected to "from the Shetlands". Her sentence about the pink baby set (made by her sister) and its two photographs are now in "Made to be worn and loved". Each photo there is a plain link to its `-large.jpg` twin (no JavaScript); the only visible line under any photo is the Singer licence credit.

### Open items for Julie

| Marker | Where | What's needed |
|---|---|---|
| `[ IngramSpark / buy link — Julie to supply ]` | The Book, "Where to buy" | The buy link (no button until then) |
| `[ Julie to confirm this is the final cover ]` | The Book, cover (HTML comment) | Her OK that the IngramSpark front panel is the final cover |
| `[ footer wording — Julie to confirm ]` | Footer (every page) | Her OK on the footer's "Memories and corrections are welcome" line and the reader contact address |
| `[ Julie to supply wedding-ring shawl photographs … ]` | Threads page, "The wedding ring shawl" (HTML comment) | Photographs of the whole shawl and a close-up. No photo until then |
| Wording query (no marker) | Threads page, Singer | "to loan to other as she always used to say"; left as written |
| Beyond the Book tense | The Book, "Beyond the Book" (HTML comment) | She asked about present tense; "will" kept until Patrick confirms with her |
| Burns epigraph | Home only | Not an open item: Julie asked for the quotation to live on Home only ("where it has real significance"). A comment on The Book marks where it was removed |

All the markers are HTML comments only; nothing shows on the page.

## Adding a page

1. Copy `the-book/index.html` (or `from-the-scullery/index.html`) to a new folder, e.g. `music/index.html`. Keep the `noindex` tag, the `../` paths, and the shared header and footer.
2. Replace the content blocks, keeping the `EDIT HERE` comments.
3. Add the page to the nav in **every** page's header (the nav is currently Home, The Book, From the Scullery, Threads from the Past, About the Storyteller; on phones it wraps onto two lines, and there is no JavaScript menu). Research Journey and Music of the Book stay as "In preparation" doors on Home and are not in the nav, and give its door card on the Home page a link (a door with no link shows as "In preparation"; the comment above the doors explains how to switch one on).

## Moving around: The Book and From the Scullery

- **On this page** is a small heading with one quiet row of links (no box). On The Book it lists the four sections; on From the Scullery it lists the 17 dishes. Everything is always on the page; nothing is hidden behind tabs.
- The Book's six part headings keep their `id`s (`part-1` to `part-6`) although the part links are no longer shown, so they can come back later. If you add a section, add its `id` and a line in the jump row. On From the Scullery, give each new dish heading an `id` and add it to the row.
- The Book: each major section ends with a **Back to top** link (works without JavaScript). From the Scullery: one **Back to top** link and one **Back to the book** link after the closing line, and no per-dish links.
- On wider screens (about 830px and up), `main.js` also shows a small floating "Top" button after the visitor scrolls. It stays hidden on narrow screens, where it would cover the text. Its accessible name is copied from the page's own "Back to top" link.
- On From the Scullery, "Ingredients and method" and "Method" are small labels, not headings, so the heading outline is just the title and the 17 dishes.
- Smooth scrolling only switches on for visitors who haven't asked for reduced motion.

## Images

Copy only what a page uses into `assets/images/`, with a descriptive lowercase-hyphenated name (e.g. `armour-street-tenement-1950s.jpg`), resized to about 1600px on the long edge. Write real alt text. Julie's originals stay where they are, untouched.

Home: `assets/images/keepsake-box-hero.jpg` (1600x1200), the keepsake box photo in the hero. "Welcome hame" (deliberate Scots, matching "hameward") sits after the epigraph, as in Julie's 31 Oct mock-up; her 29 Oct email listed it second, and a comment above it says how to move it.

From the Scullery: `assets/images/scullery/` holds 17 photographs (`kitchen-two-men-cooking.jpg`, `kitchen-child-in-apron.jpg`, `high-chair-toddler-with-bowl.jpg`, `girl-in-red-jacket-outdoors.jpg`, `boy-eating-roll-old-print.jpg`, `mince-and-potatoes-bowl.jpg`, `shortbread-fingers.jpg`, `empire-biscuits-1.jpg` to `empire-biscuits-5.jpg`, `kitchen-woman-and-two-girls-baking.jpg`, `clootie-dumpling-on-paper.jpg`, `halloween-cupcakes-girl-with-sweets.jpg`, `girl-with-hot-chocolate.jpg`, `dad-fishing-on-rocks.jpg`). These web copies are metadata-stripped (no GPS or camera data) and 1000px on the long edge (the five biscuit strips are 1200px wide). Keep it that way for any photo added later: family photos often carry GPS coordinates.

Threads from the Past: `assets/images/knitting/` holds the knitting and sewing photographs, each with a `-large.jpg` twin (1350x1800 or 1800x1350) that the small version links to, plus the Singer museum photograph (no large twin). The pink baby set photos (`pink-baby-shawl-and-set.jpg`, `pink-baby-cardigan-and-shawl.jpg`, each with a `-large.jpg` twin) are in use. About the Storyteller: `assets/images/storyteller/julie-portrait.jpg` (1000x971, the warm portrait Julie chose). All are metadata-stripped.

The Book: the front cover (`hameward-bend-front-cover-252.jpg`, 900x1350, 2:3) is the front panel of Julie's IngramSpark PDF `Hameward_Cover_252.pdf`, supplied 31 Oct 2026. It is in use; Julie is to confirm it is final. The back cover, spine and barcode stay off the site. The earlier keepsake-box cover has been removed.

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
- Every image has descriptive alt text; none has a visible caption.
- The floating "Back to top" button has an accessible name ("Back to top of The Book") and can be reached by keyboard.
