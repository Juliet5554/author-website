/* ==========================================================================
   SITE CONTENT: every word on the pages lives in this file.
   Edit the text between the quotes; the page layout picks it up
   automatically. No HTML knowledge needed.

   Tips
   - Keep the quote marks. Use \" if you need a quote mark inside text.
   - Put *asterisks* around words that should be in italics.
   - Paragraph lists are [ "first", "second" ]: add or remove entries freely.
   - The Book's text is Julie's own wording from Hameward_Bend.docx. Change
     it only if Julie asks.
   ========================================================================== */

window.SITE_CONTENT = {

  /* ------------------------------------------------------------------
     OPEN ITEMS: things Julie still owes. Search this file for "[ " to
     find every one. The first two are shown on the page as placeholder
     blocks; the rest are not shown anywhere yet.
     ------------------------------------------------------------------ */
  markers: {
    heroPhoto: "[ hero photo — Julie to confirm an original ]",
    bookCover: "[ book cover image — Julie to supply ]",
    buyLink: "[ IngramSpark / buy link — Julie to supply ]",           // not on the page: no buy button yet
    contactEmail: "[ reader contact email — Julie to confirm ]",       // not on the page: footer has no email yet
    welcomeTemp: "[ TEMP — replace with Julie's own welcome ]",        // the welcome line below is her outline text, as a stand-in
  },

  site: {
    title: "The House That Waited",
    footer: "A companion to *Hameward Bend – A Family’s Journey Home* by Julie Tan",
    skipLink: "Skip to main content",
    navLabel: "Main",
  },

  // Only pages that exist. "path" is relative to the site's top folder.
  nav: [
    { id: "home", label: "Home", path: "" },
    { id: "book", label: "The Book", path: "the-book/" },
  ],

  home: {
    meta: {
      title: "The House That Waited",
      description: "A companion website for Hameward Bend – A Family’s Journey Home.",
    },
    hero: {
      subtitle: "The companion archive to *Hameward Bend – A Family’s Journey Home*",
      epigraph: {
        quote: "And weary o’er the moor, his course does hameward bend.",
        cite: "Robert Burns, *The Cotter’s Saturday Night*",
      },
      // Temporary: verbatim from Julie's outline (see markers.welcomeTemp).
      welcome: "It is the history of an ordinary family, told with the conviction that ordinary lives are worthy of remembrance.",
      photoAlt: "A family photograph will be added here",
    },
    doors: {
      heading: "Explore",
      // href only where the page exists. No href = shown as "In preparation".
      items: [
        { title: "The Book", path: "the-book/", status: "Available now" },
        { title: "Research Journey", status: "In preparation" },
        { title: "Music", status: "In preparation" },
        { title: "From the Scullery", status: "In preparation" },
      ],
    },
  },

  bookPage: {
    meta: {
      title: "The Book | The House That Waited",
      description: "An outline of Hameward Bend – A Family’s Journey Home, by Julie Tan.",
    },
    coverAlt: "Book cover to be added",
    whereToBuy: "Where to buy: coming soon",
  },

  /* ------------------------------------------------------------------
     THE BOOK: Julie's wording from Hameward_Bend.docx, in her order.
     One deliberate change: "housethatwaited.au" is written
     "thehousethatwaited.au" in "Beyond the Book" (her real domain).
     ------------------------------------------------------------------ */
  book: {
    "kicker": "An Outline of the Book",
    "title": "Hameward Bend -A Family’s Journey Home",
    "byline": "By Julie Tan",
    "epigraph": {
      "quote": "“And weary o’er the moor, his course does hameward bend.”",
      "cite": "— Robert Burns, The Cotter’s Saturday Night"
    },
    "story": {
      "heading": "The Story",
      "paragraphs": [
        "At the heart of Hameward Bend stands a modest sandstone tenement at 15 Armour Street, Kilmarnock, Western Scotland.",
        "For generations, this ordinary home sheltered a family whose lives were anything but ordinary. From the age of sailing ships to two world wars, from the industrial streets of Scotland to Newfoundland, India and Australia, their journeys took them far beyond the place they called home.",
        "Yet Armour Street remained a constant presence: a place of beginnings and homecomings, of laughter, hardship, love and loss.",
        "Drawing upon family stories passed down through generations, personal memories, letters, photographs, official records and historical research, Hameward Bend brings these people and their world to life."
      ]
    },
    "journey": {
      "heading": "The Journey Through the Book",
      "parts": [
        {
          "number": "1.",
          "title": "The Beginnings — Nineteenth-Century Scotland",
          "paragraphs": [
            "The story reaches back to the nineteenth century, introducing the Merrilees, Glass, Knoud and Muir families.",
            "Among them is Peter Merrilees, a fatherless boy born in North Berwick who goes to sea and rises to become a ship's officer. His travels carry him across the oceans, on the old trading routes between Scotland and the Antipodes. While other branches of the family establish their lives amid the working communities of Glasgow and Ayrshire.",
            "Gradually, the family histories converge upon Armour Street."
          ]
        },
        {
          "number": "2.",
          "title": "A House and Its People",
          "paragraphs": [
            "The rooms, stairs, scullery and wash house of 15 Armour Street reveal the rhythms of everyday life.",
            "Here are the women who held families together, the men who worked long hours, the children who grew up surrounded by neighbours and relatives, and the small domestic rituals that made a house a home.",
            "These chapters preserve a way of life that has largely disappeared, with its distinctive Scots language, customs, humour and sense of community."
          ]
        },
        {
          "number": "3.",
          "title": "War, Separation and Homecoming",
          "paragraphs": [
            "The two world wars reach deeply into the family's lives.",
            "Men leave for military service, families wait for news, and the consequences of conflict are felt long after the fighting ends.",
            "Alongside loss and uncertainty are stories of endurance, friendship, courtship and the beginnings of new lives."
          ]
        },
        {
          "number": "4.",
          "title": "The Generations Between",
          "paragraphs": [
            "As the twentieth century unfolds, the family changes with it.",
            "The book follows the lives and relationships of parents, grandparents and relatives whose stories were familiar around the family table long before their historical significance became clear.",
            "Work, marriage, migration and the changing world reshape the family, while inherited traditions and memories continue to connect one generation with another."
          ]
        },
        {
          "number": "5.",
          "title": "Remembering Armour Street",
          "paragraphs": [
            "Interwoven with the family history are the author's own childhood recollections of Kilmarnock.",
            "The scullery, the wash house, the streets and shops, familiar voices, family celebrations and everyday moments offer a child's view of the world that earlier generations helped create.",
            "These memories give the reader a sense of the people behind the names and dates."
          ]
        },
        {
          "number": "6.",
          "title": "The Journey Home",
          "paragraphs": [
            "In later generations, the family's story returns to Australia.",
            "As the author begins to explore the documents, photographs and recollections left behind, the past takes on new meaning. Questions emerge, discoveries are made, and people once known only through family stories become vivid individuals with lives of their own.",
            "The journey home becomes more than a return to a physical place. It is a journey towards understanding where we come from and what we carry forward."
          ]
        }
      ]
    },
    "heart": {
      "heading": "The Heart of the Book",
      "paragraphs": [
        "Hameward Bend is not a history of famous people or great events, although great events repeatedly touch the lives of its characters.",
        "It is the history of an ordinary family, told with the conviction that ordinary lives are worthy of remembrance.",
        "At its heart is the belief that, despite separation, hardship, war and loss, love is the legacy that one generation can pass to the next.",
        "The house in Armour Street provides the setting, but the family — its stories, relationships and enduring connections — is the heart of the book."
      ]
    },
    "beyond": {
      "heading": "Beyond the Book",
      "paragraphs": [
        "The companion website, thehousethatwaited.au, will extend the story through original photographs, historical documents, family trees, maps, personal recollections and discoveries that could not all be accommodated within the printed pages.",
        "It will offer readers the opportunity to explore the people, places and history behind Hameward Bend, while allowing the family archive to continue growing for future generations."
      ]
    }
  },
};
