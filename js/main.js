/* ==========================================================================
   main.js: fills the pages from content.js and runs the developer QA tools.
   You shouldn't need to edit this to change words; see content.js.
   ========================================================================== */

(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  var root = document.documentElement;
  var base = root.dataset.root || ""; // "" on the home page, "../" one folder down
  root.classList.add("js");

  if (!C) {
    console.error("content.js did not load: SITE_CONTENT is missing.");
    return;
  }

  // Look up "home.hero.subtitle" style paths in the content object.
  function get(path) {
    return path.split(".").reduce(function (obj, key) {
      return obj == null ? undefined : obj[key];
    }, C);
  }

  function el(tag, className) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  }

  // Put text into a node. *Asterisks* make italics (built with the DOM, so
  // nothing in content.js is ever treated as HTML).
  function setRich(node, text) {
    node.textContent = "";
    text.split("*").forEach(function (piece, i) {
      if (!piece) return;
      if (i % 2) {
        var em = el("em");
        em.textContent = piece;
        node.appendChild(em);
      } else {
        node.appendChild(document.createTextNode(piece));
      }
    });
  }

  function richEl(tag, className, text) {
    var node = el(tag, className);
    setRich(node, text);
    return node;
  }

  var page = document.body.dataset.page;
  var pageMeta = (page === "book" ? C.bookPage : C[page]).meta;

  /* ---------- 1. Fill in content ---------- */

  document.title = pageMeta.title;
  document.querySelector('meta[name="description"]').setAttribute("content", pageMeta.description);

  document.querySelectorAll("[data-content]").forEach(function (node) {
    var value = get(node.dataset.content);
    if (value != null) setRich(node, value);
  });

  document.querySelectorAll("[data-aria-label]").forEach(function (node) {
    var value = get(node.dataset.ariaLabel);
    if (value != null) node.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-paragraphs]").forEach(function (box) {
    get(box.dataset.paragraphs).forEach(function (text) {
      box.appendChild(richEl("p", null, text));
    });
  });

  // Paths in content.js are relative to the site's top folder.
  function href(path) {
    return base + path || "./";
  }

  var renderers = {
    nav: function (list, items) {
      items.forEach(function (item) {
        var li = el("li");
        var a = richEl("a", null, item.label);
        a.href = href(item.path);
        if (item.id === page) a.setAttribute("aria-current", "page");
        li.appendChild(a);
        list.appendChild(li);
      });
    },

    "home.doors.items": function (list, items) {
      items.forEach(function (item) {
        var li = el("li", "door" + (item.path ? " door-live" : " door-soon"));
        var h3 = el("h3");
        if (item.path) {
          var a = richEl("a", null, item.title);
          a.href = href(item.path);
          h3.appendChild(a);
        } else {
          setRich(h3, item.title);
        }
        li.appendChild(h3);
        li.appendChild(richEl("p", "door-status", item.status));
        list.appendChild(li);
      });
    },

    "book.journey.parts": function (list, items) {
      items.forEach(function (part) {
        var li = el("li", "part");
        var h3 = el("h3");
        h3.appendChild(richEl("span", "part-number", part.number));
        h3.appendChild(document.createTextNode(" " + part.title));
        li.appendChild(h3);
        part.paragraphs.forEach(function (text) {
          li.appendChild(richEl("p", null, text));
        });
        list.appendChild(li);
      });
    },
  };

  document.querySelectorAll("[data-list]").forEach(function (box) {
    var key = box.dataset.list;
    if (renderers[key]) renderers[key](box, get(key) || []);
  });

  /* ---------- 2. Developer QA tools (add to the address; not for visitors) ----------
       ?debug=alt        shows every image's alt text under the image
       ?debug=headings   shows the heading outline at the top of the page
     Both can be combined: ?debug=alt,headings */

  var debug = (new URLSearchParams(window.location.search).get("debug") || "").split(",");

  if (debug.indexOf("alt") !== -1) {
    document.querySelectorAll("img, [role='img']").forEach(function (node) {
      var alt = node.tagName === "IMG" ? node.getAttribute("alt") : node.getAttribute("aria-label");
      var tag = el("span", "debug-alt");
      if (alt === null) {
        tag.textContent = "NO ALT ATTRIBUTE";
        tag.classList.add("debug-bad");
      } else if (alt === "") {
        tag.textContent = 'alt="" (decorative)';
      } else {
        tag.textContent = "alt: " + alt;
      }
      node.insertAdjacentElement("afterend", tag);
    });
  }

  if (debug.indexOf("headings") !== -1) {
    var box = el("aside", "debug-headings");
    box.setAttribute("aria-label", "Heading outline (developer tool)");
    box.appendChild(richEl("p", "debug-title", "Heading outline"));
    var prev = 0;
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(function (h) {
      var level = Number(h.tagName.charAt(1));
      var row = el("div", "debug-row");
      row.style.paddingLeft = (level - 1) * 1.25 + "em";
      var skipped = prev && level > prev + 1;
      row.textContent = "H" + level + "  " + h.textContent.trim() + (skipped ? "   ← skips a level" : "");
      if (skipped || (!prev && level !== 1)) row.classList.add("debug-bad");
      box.appendChild(row);
      prev = level;
    });
    document.body.insertBefore(box, document.body.firstChild);
  }
})();
