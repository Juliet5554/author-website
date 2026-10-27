/* ==========================================================================
   main.js: optional extras only. Every page is complete without it.
   Words live in the HTML files (look for "EDIT HERE" comments).
     1. Floating "Back to top" button on The Book and From the Scullery (wide screens only)
     2. Developer QA tools: ?debug=alt and ?debug=headings
   ========================================================================== */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  function el(tag, className) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  }

  /* ---------- 1. Floating "Back to top" button ----------
     Appears after scrolling down. On narrow screens it stays hidden (CSS),
     because it would sit on top of the text; the "Back to top" link at the
     end of each section is there instead and works without JavaScript. */

  if (document.querySelector(".back-to-top")) {
    var toTop = el("a", "to-top-float");
    toTop.href = "#top";
    /* same accessible name as the page's own "Back to top" link, e.g. "Back to top of The Book" */
    toTop.setAttribute("aria-label", document.querySelector(".back-to-top a").getAttribute("aria-label") || "Back to top");
    toTop.textContent = "↑ Top";
    toTop.hidden = true;
    document.body.appendChild(toTop);

    var onScroll = function () {
      toTop.hidden = window.scrollY < 600;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

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
    var title = el("p", "debug-title");
    title.textContent = "Heading outline";
    box.appendChild(title);
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
