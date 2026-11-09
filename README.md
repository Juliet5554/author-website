# The House That Waited: companion site for *Hameward Bend* (working draft)

Plain HTML, CSS and JavaScript. No build step, no framework, no third-party scripts or fonts. It's published at thehousethatwaited.au through GitHub Pages (GitHub manages the `CNAME` from the Pages settings; don't edit it here).

Every page is **static HTML**: all the words are in the page itself, so it works with JavaScript switched off. `js/main.js` only adds extras (see below).

**Not indexed yet.** Every page carries a `noindex` tag and `robots.txt` blocks all crawlers, because the site is live while unfinished. See "Launching" below.

## Where things live

| To change… | Edit |
|---|---|
| Any words on a page | That page's `.html` file: `index.html` (Home), `the-book/index.html` (The Book), `the-ways-of-home/index.html` (The Ways of Home: From the Scullery, then A Thread Through the Generations), `research-journey/index.html` (The Research Journey), `sailing-stories/index.html` (Sailing Stories), `music/index.html` (Music of the Book), `about-the-storyteller/index.html` (About the Storyteller) |
| Outstanding items for Julie (the `[ … ]` markers) | HTML comments next to where each belongs; search the files for `[ ` |
| Colours and fonts | Top of `css/styles.css`, section 1 "Design tokens" |
| Optional behaviour (floating "Back to top", debug tools) | `js/main.js` |

### The EDIT HERE comments

Each block of words in a page has a comment above it, like `<!-- EDIT HERE: welcome line -->`. Change the text directly below that comment and leave the tags (`<p>`, `<h2>` and so on) around it alone. Use `<em>…</em>` for italics.

The header, nav and footer are written out in full in every file (there are no includes). If you change one, make the same change in every page. Only list pages that exist in the nav. The footer carries the reader contact address as a `mailto:` link.

The Book's text is Julie's own wording from `Hameward_Bend.docx` (Part 6, The Heart of the Book and Beyond the Book updated from her 1 Nov 2026 notes). The one deliberate change is "housethatwaited.au" written as "thehousethatwaited.au" (her real domain).

The Ways of Home opens with Julie's own introductory paragraph ("Some family stories are preserved not in documents or photographs…"), then From the Scullery, then A Thread Through the Generations. The two former pages (From the Scullery; Threads from the Past) were merged on 4 Nov 2026 and removed (the site is noindex and pre-launch, so no redirects). The Scullery part's text is Julie's own wording, from her revised document of 1 Nov 2026 (`From the Scullery Revised 011126.txt`), applied as she wrote it (her spelling, punctuation and apostrophes included). The only change of ours is "I've starting using" corrected to "I've started using". Its `EDIT HERE` blocks are: the page title and description, the introduction, one block per dish (heading, paragraphs and method, so each dish can be edited on its own), and the closing line. The only wording that isn't Julie's is the page's meta description and the "On this page", "Back to the book" and "Back to top" link labels.

The photographs on From the Scullery have alt text and, apart from three labels Julie asked for on 4 Nov 2026, deliberately no visible captions: no `<figcaption>`, no `title` attributes, no text over the photos. The three visible labels use the same small `photo-credit` style and sit directly beneath their photo or pile: "My three children Tara, Amar & Aneel — another generation in the kitchen." (opening pair), "Dad", and the interim "Baking fun – Tara" (a trimmed label, so no children's names show). Julie confirmed on 4 Nov 2026 that the younger children are not to be named, so the other photos stay unlabelled. No children's names go in alt text, file names or page text. Her added sentence ("That love of cooking travelled down through the family…") ends the introduction. To move a photo to another dish, move its `<img>` into that dish's `<figure class="pile">` (or add one straight after the dish's `<h2>`, with `has-pile has-pile-left` or `has-pile-right` on the dish). The pile styling is section 5c of `css/styles.css`.

A Thread Through the Generations and About the Storyteller are also Julie's own words (`A_Thread_Through_the_Generations.txt`, `Personal bio.txt`). The one wording fix on the Threads page is "form the Shetlands" corrected to "from the Shetlands". Her sentence about the pink baby set (made by her sister) is in "Made to be worn and loved". Each photo there is a plain link to its `-large.jpg` twin (no JavaScript); the only visible line under any photo is the Singer licence credit. Later additions: the sewing basket photograph (`sewing-basket-open-lid.jpg`, small, left of the text under the Singer note, no caption) and `cream-baby-shawl-and-set.jpg`, now the **only** shawl photograph on the page (on 4 Nov 2026 the two pink-cast photos of the same set were removed, and their files deleted, to leave a single cream one; Julie's sentence "The pink baby shawl…" is unchanged and still stands without a matching pink photo). The wedding-ring shawl photo marker is gone: she has no photo of her own, and the Shetland link stands in.

The Research Journey is Julie's own wording (`Finding_Papa_in_the_Records.txt`, `Following_the_Merrilees_Family.txt`, `Carradale_First_Mate_and_Artist_Patrick_FAMILY_CONNECTION.txt`, 1 Nov 2026), in two sections: Finding Papa in the Records; Following the Merrilees Family. (The Carradale section was removed at Julie's request on 4 Nov 2026; the Carradale now lives on the Sailing Stories page.) Her notes to Patrick, permissions notes, design suggestions, checklists and editorial notes are not published. The Kirk Session extract (1 March 1863) is now a picture with Julie's own credit line; it replaced the stand-in text. The casualty register (HMS Snapdragon, December 1942) is now on the page (Pass 15): a two-page spread with Snapdragon on the left-hand page, shown whole (never cropped) with Julie's caption, her credit "The National Archives (UK), ADM 358/4183. Reproduced by permission of The National Archives.", and an enlarge link. Her line "image will be added once reproduction arrangements are confirmed" was dropped because it no longer applies. The page deliberately has no intro line yet (hidden marker). Julie's family tree graphic, "The Families of 15 Armour Street" (7 Nov 2026), opens the page. The poorhouse is not described as burned down: the corrected entry records injuries from burning, nothing more.

Sailing Stories (`sailing-stories/index.html`) holds three stories, each a `<section class="research-section">` with its own `aria-labelledby` id, in this order: "The Clipper Routes" (first, at Julie's request; her email of 8 Nov 2026), "The Sailor and the Artist" (4 Nov 2026), and "Two Ships, One U-Boat" / The Ainsdale and the Azul (her newer brief, 9 Nov 2026). Placing the Ainsdale story **after** Sailor and Artist was our assumption: confirm with Julie. The Clipper Routes uses the Carradale photograph again (same credit) and the Bermuda painting, "The barque Bermuda. Painting by John Henry Mohrmann (1857–1916). Public domain." The Ainsdale story keeps Julie's wording, including "HMS Ikalis", with a hidden `CONFIRM WITH JULIE` comment beside it (the passenger return marks her "SS", a merchant steamship) and another about crew-list entry 43, which shows a ditto mark under "Seaman" although the text says Able Seaman (AB). Its four National Archives images carry Julie's supplied credit lines exactly ("The National Archives, BT 165/1585. Reproduced under licence." for the log book cover, ports of call page and crew list; "The National Archives, UK. Reproduced under licence" for the Ikalis passenger record, BT26 series). The licence invoice number is deliberately **not** on any page or in this repository. The colourised Carradale photograph carries Frank Hellsten's own accreditation label, used with his permission (5 Nov 2026); the crew list carries the State Records NSW source line; a Nielsen source line (the English summary of his Akvarellen article, linked) closes the "A voyage through an artist's eyes" section. It ends with "The voyage in pictures" (Julie's 6 Nov 2026 wording): four paragraphs saying five of Gregory Robinson's original drawings, held by the Royal Museums Greenwich, will be added when the museum supplies them. Under them is a hidden gallery slot (an HTML comment holding a ready-to-copy `figure.record-figure` block, one per drawing; nothing shows on the page). Credit wording and any enlarge link are to be confirmed with Julie. The page reuses the Research Journey's styles; the closing link goes to the Book page.

The linked record images (the five National Records of Scotland scans and the casualty register on the Research Journey; the Sydney crew list and the four Ainsdale story records on Sailing Stories), and the family tree graphic, carry a visible "Select the image to enlarge it." line under their credit. The kirk session extract, the Snapdragon photograph, the Bermuda painting and the colourised Carradale do not, because they have no larger version; the kirk session extract is not a link at all (a plain frame, not keyboard-focusable).

### Open items for Julie

| Marker | Where | What's needed |
|---|---|---|
| `[ IngramSpark / buy link — Julie to supply ]` | The Book, "Where to buy" | The buy link (no button until then) |
| `[ footer wording — Julie to confirm ]` | Footer (every page) | Her OK on the footer's "Memories and corrections are welcome" line and the reader contact address |
| `[ Julie to supply short intro for the Research Journey page ]` | Research Journey, top (HTML comment) | A one-line intro, if she wants one |
| `[ CONFIRM WITH JULIE: "HMS Ikalis" ... ]` | Sailing Stories, Two Ships, One U-Boat, opening paragraph | The Ikalis looks like a merchant steamship ("SS" on the return), probably not HMS |
| `[ CONFIRM WITH JULIE: ... entry 43 ... "Seaman" ... ]` | Sailing Stories, Two Ships, One U-Boat | Her text says Able Seaman (AB); the crew list shows a ditto mark under "Seaman" |
| Story order | Sailing Stories | Ainsdale story was placed after Sailor and Artist (our assumption) |
| Bermuda painting | Sailing Stories, Clipper Routes | The file is only 816px wide, so there is no enlarge link; a larger `IMG_0149.jpeg` may be in her 8 Nov 2026 email. The painting shows three masts, though the handoff called it four-masted, so the alt text describes what is visible |
| Music page introduction | Music, top | Two short holding paragraphs of ours; Julie to supply her own wording. Spanish Ladies still to be added to her YouTube playlist |
| `[ Julie to confirm: tree death years ]` | Research Journey, tree comment | This file shows 1985 and 1984 for Elizabeth Knox Muir Dawe and Frank Dawe MM; her earlier tree showed 1987 for both. Also confirm Peter Merrilees McCann's date, shown here as 5 Feb 1976 |
| Held Scullery labels (five hidden comments) | The Ways of Home (Scullery part), above each photo | Whether her granddaughters' first names may be public (nameless options are in each comment) |
| Beyond the Book tense | The Book, "Beyond the Book" (HTML comment) | She asked about present tense; "will" kept until Patrick confirms with her |
| Burns epigraph | Home only | Not an open item: Julie asked for the quotation to live on Home only ("where it has real significance"). A comment on The Book marks where it was removed |

All the markers are HTML comments only; nothing shows on the page.

## Adding a page

1. Copy `the-book/index.html` (or `the-ways-of-home/index.html`) to a new folder, e.g. `music/index.html` (the Music page was built this way). Keep the `noindex` tag, the `../` paths, and the shared header and footer.
2. Replace the content blocks, keeping the `EDIT HERE` comments.
3. Add the page to the nav in **every** page's header (the nav is now seven items: Home, The Book, Research Journey, The Ways of Home, Sailing Stories, Music, About the Storyteller; on phones it wraps onto rows, and there is no JavaScript menu; recheck the wrapping at 360px and 390px). Music of the Book is now a live door on Home as well as a nav item. For any future page, give its door card on the Home page a link (a door with no link shows as "In preparation"; the comment above the doors explains how to switch one on). The Research Journey, The Ways of Home and Music doors are live.

## Moving around: The Book and The Ways of Home

- **On this page** is a small heading with one quiet row of links (no box). On The Book it lists the four sections; on The Ways of Home it has a row for the two parts, a row for the 17 dishes and a row for the knitting sections. Everything is always on the page; nothing is hidden behind tabs.
- The Book's six part headings keep their `id`s (`part-1` to `part-6`) although the part links are no longer shown, so they can come back later. If you add a section, add its `id` and a line in the jump row. On The Ways of Home, give each new dish heading (an `h3` under the "From the Scullery" `h2`) an `id` and add it to the row.
- The Book: each major section ends with a **Back to top** link (works without JavaScript). The Ways of Home: one **Back to top** link and one **Back to the book** link at the very end, plus a small right-aligned **Back to top** link after each of the 17 dishes and each of the 7 knitting sections (24 in all). Those use the class `section-top`, not `back-to-top`, because `main.js` copies the label of the first `.back-to-top` link for the floating button.
- On wider screens (about 830px and up), `main.js` also shows a small floating "Top" button after the visitor scrolls. It stays hidden on narrow screens, where it would cover the text. Its accessible name is copied from the page's own "Back to top" link.
- On The Ways of Home, "Ingredients and method" and "Method" are small labels, not headings. The outline is: one `h1`; two `h2` (From the Scullery; A Thread Through the Generations); the 17 dishes and the knitting sections as `h3`; "Singer Sewing Machine" as `h4`.
- Smooth scrolling only switches on for visitors who haven't asked for reduced motion.

## Images

Copy only what a page uses into `assets/images/`, with a descriptive lowercase-hyphenated name (e.g. `armour-street-tenement-1950s.jpg`), resized to about 1600px on the long edge. Write real alt text. Julie's originals stay where they are, untouched.

Home: `assets/images/keepsake-box-hero.jpg` (1600x1200), the keepsake box photo in the hero. "Welcome hame" (deliberate Scots, matching "hameward") sits after the epigraph, as in Julie's 31 Oct mock-up; her 29 Oct email listed it second, and a comment above it says how to move it.

The Ways of Home, Scullery part: `assets/images/scullery/` holds 18 photographs (`kitchen-two-men-cooking.jpg`, `kitchen-child-in-apron.jpg`, `high-chair-toddler-with-bowl.jpg`, `girl-in-red-jacket-outdoors.jpg`, `fry-up-plate.jpg`, `fry-up-rolls.jpg`, `mince-and-potatoes-bowl.jpg`, `shortbread-fingers.jpg`, `empire-biscuits-1.jpg` to `empire-biscuits-5.jpg`, `kitchen-woman-and-two-girls-baking.jpg`, `clootie-dumpling-on-paper.jpg`, `halloween-cupcakes-girl-with-sweets.jpg`, `girl-with-hot-chocolate.jpg`, `dad-fishing-on-rocks.jpg`). These web copies are metadata-stripped (no GPS or camera data) and 1000px on the long edge (the five biscuit strips are 1200px wide). The two fry-up photographs (Julie, 7 Nov 2026) are cropped to the picture area (the screenshot borders removed), 1000px wide, with no GPS or camera data; they replaced the old photograph of Julie's son in the Scottish Fry-Up. Keep it that way for any photo added later: family photos often carry GPS coordinates.

Sailing Stories: `assets/images/sailing/` holds the colourised Carradale photograph (`carradale-four-masted-barque-colourised.jpg`, 1225x1600, shown whole so the "Color by Frank Hellsten" mark stays on it) the 1903 Sydney crew list (`carradale-1903-sydney-inward-crew-list.jpg`, 1600px wide, linking to a 3200px `-large.jpg`), the Bermuda painting (`bermuda-four-masted-barque-painting.jpg`, 816x471, its only size) and the four Ainsdale records (`ainsdale-log-book-cover-1917`, `ainsdale-log-book-ports-of-call`, `ainsdale-crew-list-entry-43`, each 1600px long edge with a 3200px `-large` twin; `ikalis-incoming-passengers-liverpool-1917`, cropped from Julie's full spread to the Ikalis return page only, with a `-large` twin at the crop's native size). All are metadata-stripped.

The Research Journey: `assets/images/research/` holds five National Records of Scotland record scans (birth 1863, marriage 1830, two deaths, corrected entry 1885), each with a `-large.jpg` twin that the page links to, the HMS Snapdragon casualty register (`hms-snapdragon-casualty-register-1942.jpg`, 1600px wide, linking to a 3200px `-large.jpg`; shown as the whole two-page spread, uncropped), plus the North Berwick kirk session extract of 1 March 1863 (`north-berwick-kirk-session-1863-p229.png`, 610x572, shown at that size in a plain frame with no link, no large twin; the faint ScotlandsPeople watermark is left on) and the small HMS Snapdragon photograph (473x248, no large twin, shown at natural size). **Never crop or cover the record images**: the NRS "Crown copyright… Image was generated at…" header is part of each one, so they use a plain frame (`photo-frame-record`, no photo corners, no tilt). Each has its credit line directly beneath, built from the header printed on the image. The Snapdragon credit is "HMS Snapdragon at Bandar Shapur, Iran, August 1941. Australian War Memorial, photograph 134400. Public domain." A single Open Government Licence v3.0 line sits in the Sources part and is worded "NRS record images reused under…" so it does not claim to cover the National Archives register. The family tree graphic is `families-of-15-armour-street.jpg` (800x1034, linking to a 1103x1426 `-large.jpg`, which is the size Julie supplied). It sits at the top of the page with no heading of its own (the graphic carries its title) and has the same "Select the image to enlarge it." line, plus a collapsed "Read this as a list" (`<details>`) giving the same content as text. **If the graphic is ever replaced, update that list to match.** No children are named anywhere on the page.

The Ways of Home, Threads part: `assets/images/knitting/` holds the knitting and sewing photographs, each with a `-large.jpg` twin (1350x1800 or 1800x1350) that the small version links to, plus the Singer museum photograph (no large twin). The one baby set photo is `cream-baby-shawl-and-set.jpg` (with its `-large.jpg` twin); since 7 Nov 2026 it is Mhairi's own photograph (it replaced the earlier image under the same name), with Julie's label "A gift from Mhairi for her grandniece." beneath it. The two pink-cast photos of the same set were removed on 4 Nov 2026 and their files deleted. `pink-sock-in-progress.jpg` (750x765, with its `-large.jpg` twin) is a cropped replacement from 7 Nov 2026; the earlier one showed Julie's foot. The new `paragon-knitting-book-101-cover.jpg` (with `-large.jpg` twin) is in use in "Made to be worn and loved", with the visible label "Paragon Knitting Book No. 101, from my own collection". Also in use: `sewing-basket-open-lid.jpg` (with its twin). About the Storyteller: `assets/images/storyteller/julie-portrait.jpg` (1000x971, the warm portrait Julie chose). All are metadata-stripped.

The Book: the front cover (`hameward-bend-front-cover-252.jpg`, 900x1350, 2:3) is the front panel of Julie's IngramSpark PDF `Hameward_Cover_252.pdf`, supplied 31 Oct 2026. It is in use; Julie confirmed on 5 Nov 2026 that it is final (rainy street for the Book cover, seaman's box photograph for the Home hero). The back cover, spine and barcode stay off the site. The earlier keepsake-box cover has been removed.

## Music page

`music/index.html` embeds Julie's public YouTube playlist, "Hameward Bend - The songs from the book" (`list=PLAv6vbEGZKG8`), through the privacy-enhanced domain `www.youtube-nocookie.com`, in a responsive 16:9 wrapper (`.video-wrap`) with a `title` and `loading="lazy"`. A note says YouTube may set cookies when a video plays, and a plain link to the playlist on YouTube is the fallback for any recording that blocks embedding. Songs are added or removed in Julie's YouTube account and the page follows by itself; she was told to keep on the playlist any song the site text refers to. It is the one place the site loads anything from a third party, and only when the page is opened. Playback of each song has not been tested one by one: do that in a browser before launch.

## National Archives (TNA) image licence

Julie's licence (invoice on file with her; the number is deliberately not recorded here or on the site) allows up to **20** TNA document images on a website. Used so far: **5**: the HMS Snapdragon casualty register, and four Ainsdale story images (log book cover, ports of call, crew list, Ikalis passenger record). **15 remain.** Add to this count whenever a TNA image goes on a page.

## Image metadata and C2PA

On 9 Nov 2026 the C2PA/JUMBF "content credentials" segments (APP11) were removed losslessly from 45 JPEGs that had them, with no re-encoding: pixels and dimensions are identical. Check any new JPEG by scanning its bytes for `jumb` and `c2pa`; none should be found (no ready tool is installed, so a short Python script that drops APP11 segments was used). New images are resized and saved fresh, which also drops GPS and camera data.

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
- Every image has descriptive alt text. Visible lines under photos are limited to licence and record credits (Ways of Home, Research Journey) the three labels Julie asked for in the Scullery part, her label under the baby set photograph ("A gift from Mhairi for her grandniece."), and the Paragon label.
- The floating "Back to top" button has an accessible name ("Back to top of The Book") and can be reached by keyboard.
