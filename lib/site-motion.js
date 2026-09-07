/* ===========================================================================
   Interaction & animation layer
   Progressive enhancement: degrades gracefully without JS / GSAP / motion.
   Modules: scroll progress + header condense · mobile nav · one-shot reveals
   with a single stagger · hero intro · word rotator · counters · magnetic
   buttons · callback form.

   Pinned and scroll-scrubbed scenes (speed dial, stacking process deck,
   race lanes, signal capsule), the drag/tap card carousel, both marquees
   and the cursor-glow effects were removed: entrance animation only.
   =========================================================================== */
export function initSiteMotion(G, ST) {
  "use strict";

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
  var hasIO = "IntersectionObserver" in window;
  var raf = window.requestAnimationFrame || function (cb) { return setTimeout(cb, 16); };
  window.__nfInit = true;

  /* GSAP availability — every cinematic module degrades to CSS without it. */
  /* G provided by caller */
  /* ST provided by caller */
  var cinema = !!G && !reduced;          // true → GSAP owns the hero intro
  if (G && ST) { try { G.registerPlugin(ST); } catch (e) { ST = null; } }
  if (!G) document.documentElement.classList.add("no-gsap");

  function $(s, c) { return (c || document).querySelector(s); }
  function $all(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function onceInView(el, cb, opts) {
    if (!hasIO) { cb(); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { cb(e.target); io.unobserve(e.target); } });
    }, opts || { rootMargin: "0px 0px -8% 0px", threshold: 0.15 });
    io.observe(el);
  }

  (function(boot){ if(document.readyState!=="loading"){ boot(); } else { document.addEventListener("DOMContentLoaded", boot); } })(function () {
    setYear();
    initScroll();
    initMobileNav();
    initReveals();
    initHeroCinema();     // GSAP master intro + scrubbed depth (no-op w/o GSAP)
    initHeroIntro();      // CSS fallback intro when GSAP is absent
    initCounters();
    initZip();
    if (fine && !reduced) {
      initMagnetic();
    }
    /* Recompute trigger positions once fonts and images settle. */
    if (G && ST) {
      ST.refresh();
      window.addEventListener("load", function () { ST.refresh(); });
    }
  });

  /* ----------------------------- Footer year ---------------------------- */
  function setYear() { var y = $("#year"); if (y) y.textContent = new Date().getFullYear(); }

  /* --------------------- Scroll progress + header ----------------------- */
  function initScroll() {
    var header = $("#siteHeader"), bar = $("#scrollProgress"), ticking = false;
    function update() {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("is-elevated", y > 8);
      if (bar) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = "scaleX(" + (h > 0 ? Math.min(y / h, 1) : 0) + ")";
      }
      ticking = false;
    }
    window.addEventListener("scroll", function () { if (!ticking) { raf(update); ticking = true; } }, { passive: true });
    update();
  }

  

  /* ---------------------------- Mobile nav ------------------------------ */
  function initMobileNav() {
    var toggle = $("#navToggle"), menu = $("#mobileNav"); if (!toggle || !menu) return;
    function close() { menu.classList.remove("is-open"); menu.hidden = true; toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open menu"); }
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open"); menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    $all("a", menu).forEach(function (a) { a.addEventListener("click", close); });
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* --------------------------- Scroll reveals --------------------------- */
  function initReveals() {
    var items = $all("[data-reveal]"); if (!items.length) return;
    if (reduced || !hasIO) { items.forEach(function (el) { el.classList.add("is-visible"); }); return; }
    items.forEach(function (el) {
      onceInView(el, function () {
        var d = parseFloat(el.getAttribute("data-delay")) || 0;
        if (d) el.style.transitionDelay = d + "s";
        el.classList.add("is-visible");
      });
    });
  }

  /* ------------------------- Text splitting utils ------------------------ */
  /* Chars: for the 3D headline cascade. Wrapped in .char (inline-block). */
  function splitChars(el) {
    var text = el.textContent, frag = document.createDocumentFragment(), out = [];
    el.textContent = "";
    for (var i = 0; i < text.length; i++) {
      var s = document.createElement("span");
      s.className = "char"; s.textContent = text.charAt(i);
      frag.appendChild(s); out.push(s);
    }
    el.appendChild(frag);
    return out;
  }
  /* Words: TreeWalker-based so inline markup (<strong>) survives intact. */
  function splitWords(root) {
    var out = [], nodes = [], w, i;
    try { w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null); } catch (e) { return out; }
    while (w.nextNode()) nodes.push(w.currentNode);
    for (i = 0; i < nodes.length; i++) {
      var node = nodes[i], parts = node.nodeValue.split(/(\s+)/), frag = document.createDocumentFragment();
      for (var j = 0; j < parts.length; j++) {
        var part = parts[j];
        if (!part) continue;
        if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); continue; }
        var s = document.createElement("span");
        s.className = "word"; s.textContent = part;
        frag.appendChild(s); out.push(s);
      }
      if (node.parentNode) node.parentNode.replaceChild(frag, node);
    }
    return out;
  }

  /* ═══════════════════════════ HERO CINEMA ═══════════════════════════════
     One master timeline choreographs the whole hero as a 4-act story:
       Act 1 · the stage wakes   — aurora settles, fiber strands draw
       Act 2 · the promise       — kicker, headline chars cascade in 3D, lead
       Act 3 · the proof         — instrument builds, arc sweeps, 0→7 counts
       Act 4 · the invitation    — CTAs spring, chips flip, badges land
     Afterwards: ambient loops (pulses travel, badges float) + scrubbed depth.
     ═══════════════════════════════════════════════════════════════════════ */
  function initHeroCinema() {
    var hero = $(".hero");
    if (!hero || !cinema) return;
    hero.classList.add("is-gsap");

    /* ---- prep: split text; the background photo is a plain <img> ---- */
    var chars = [];
    $all("[data-split]", hero).forEach(function (line) { chars.push(splitChars(line)); });
    var leadEl = $("[data-hero-lead]", hero);
    var words = leadEl ? splitWords(leadEl) : [];
    var rotline = $("[data-hero-rotline]", hero);
    var bg = $("[data-hero-bg]", hero);          // full-bleed background image
    var feats = $all("[data-feat]", hero);

    /* ---- initial states (pre-paint hidden handled by CSS) ---- */
    G.set(hero.querySelectorAll(".char"), { opacity: 0, yPercent: 118, rotateX: -82, transformPerspective: 900, transformOrigin: "50% 100%" });
    if (words.length) G.set(words, { opacity: 0, y: 16, filter: "blur(7px)" });
    if (rotline) G.set(rotline, { opacity: 0, y: 26 });
    G.set("[data-hero-kicker]", { opacity: 0, y: 20, scale: .9, clipPath: "inset(0 100% 0 0)" });
    G.set("[data-hero-cta] > *", { opacity: 0, y: 22, scale: .86 });
    /* CSS hides these containers pre-paint to avoid a flash; hand them back now */
    G.set([leadEl, $("[data-hero-cta]", hero)], { opacity: 1 });
    G.set(feats, { opacity: 0, y: 18 });

    var tl = G.timeline({ defaults: { ease: "power3.out" }, delay: .15 });

    /* ── Act 1 · the promise (kicker wipes, headline chars cascade in 3D) ── */
    tl.to("[data-hero-kicker]", { opacity: 1, y: 0, scale: 1, clipPath: "inset(0 0% 0 0)", duration: .9, ease: "power3.out" }, .35);
    chars.forEach(function (l, i) {
      tl.to(l, { opacity: 1, yPercent: 0, rotateX: 0, duration: 1.05, stagger: .022, ease: "power4.out" }, .52 + i * .16);
    });
    if (rotline) tl.to(rotline, { opacity: 1, y: 0, duration: .9, ease: "power4.out" }, .84);
    if (words.length) tl.to(words, { opacity: 1, y: 0, filter: "blur(0px)", duration: .8, stagger: .012, ease: "power2.out" }, 1.02);

    /* ── Act 2 · the invitation + feature strip stagger ─────────────────── */
    tl.to("[data-hero-cta] > *", { opacity: 1, y: 0, scale: 1, duration: .85, stagger: .1, ease: "back.out(1.7)" }, 1.35)
      .add(function () { revealFeats(); }, 1.7);

    /* Feature strip — icons pop + stagger on scroll-into-view (fires at top) */
    function revealFeats() {
      if (!feats.length) return;
      var run = function (batch) {
        var ics = batch.map(function (f) { return f.querySelector(".feat__ic"); }).filter(Boolean);
        G.to(batch, { opacity: 1, y: 0, duration: .6, stagger: .12, ease: "power3.out" });
        G.fromTo(ics, { scale: .55, rotate: -12 }, { scale: 1, rotate: 0, duration: .7, stagger: .12, ease: "back.out(2)" });
      };
      if (ST && ST.batch) {
        ST.batch(feats, { start: "top 94%", once: true, onEnter: run });
      } else {
        run(feats);
      }
    }

    /* ---- scroll parallax: background recedes (~0.3x) behind the copy ------
       GSAP owns translateY; the Ken-Burns zoom (CSS `scale`) and this transform
       are independent properties, so they compose without fighting. The image
       is over-sized (128% tall) so this movement never reveals an edge.        */
    if (ST) {
      if (bg) {
        G.fromTo(bg, { yPercent: -11 }, {
          yPercent: 11, ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: .6 }
        });
      }
      var mk = function (el, vars) {
        if (!el) return;
        G.to(el, Object.assign({ ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: .6 } }, vars));
      };
      mk($(".hero__copy", hero), { yPercent: -16, opacity: .25 });   // foreground moves faster → depth
      mk($(".scroll-cue", hero), { opacity: 0, y: 30 });
    }
  }

  

  /* --------------------------- Hero mask intro -------------------------- */
  /* CSS-only fallback path — skipped entirely when GSAP drives the intro. */
  function initHeroIntro() {
    var hero = $(".hero"); if (!hero || cinema) return;
    raf(function () { raf(function () { hero.classList.add("is-in", "is-drawn"); }); });
  }

  /* ----------------------------- Word rotator --------------------------- */
  /* GSAP path: 3D flip with blur. Fallback: the original fade/slide. */
  

  /* ------------------------------- Counters ----------------------------- */
  function initCounters() {
    $all("[data-count]").forEach(function (node) {
      /* The hero gauge counter belongs to the cinema timeline — don't race it. */
      if (cinema && node.closest && node.closest(".hero")) return;
      var target = parseFloat(node.getAttribute("data-count"));
      var suffix = node.getAttribute("data-suffix") || "";
      var dec = parseInt(node.getAttribute("data-decimals") || "0", 10);
      if (isNaN(target)) return;
      if (reduced || !hasIO) { node.textContent = target.toFixed(dec) + suffix; return; }
      onceInView(node, function () {
        var dur = 1300, start = null;
        (function tick(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
          node.textContent = (target * eased).toFixed(dec) + suffix;
          if (p < 1) raf(tick); else node.textContent = target.toFixed(dec) + suffix;
        })(performance && performance.now ? performance.now() : Date.now());
      }, { threshold: 0.5 });
    });
  }

  

  /* --------------------------- Magnetic buttons ------------------------- */
  /* GSAP path: pull toward the cursor, elastic snap back on exit.           */
  function initMagnetic() {
    $all("[data-magnetic]").forEach(function (el) {
      var s = parseFloat(el.getAttribute("data-mag-strength")) || .22;

      if (G) {
        var mx = G.quickTo(el, "x", { duration: .5, ease: "power3.out" });
        var my = G.quickTo(el, "y", { duration: .5, ease: "power3.out" });
        el.addEventListener("pointermove", function (e) {
          if (e.pointerType === "touch") return;
          var r = el.getBoundingClientRect();
          mx((e.clientX - r.left - r.width / 2) * s);
          my((e.clientY - r.top - r.height / 2) * s * 1.3);
        }, { passive: true });
        el.addEventListener("pointerleave", function () {
          G.to(el, { x: 0, y: 0, duration: 1.1, ease: "elastic.out(1, .38)" });
        });
        return;
      }

      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        el.style.transform = "translate(" + ((e.clientX - r.left - r.width / 2) * 0.25).toFixed(2) + "px," + ((e.clientY - r.top - r.height / 2) * 0.35).toFixed(2) + "px)";
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });
  }

  

  

  /* --------------------------- Hero ZIP hand-off ------------------------ */
  /* Frontier gates both serviceability and pricing behind a full address, so
     a ZIP alone cannot answer the question. This validates the ZIP and moves
     the reader to the plans, where every card orders by phone. */
  function initZip() {
    var form = $("#zipForm"); if (!form) return;
    var note = $("#zipNote"), input = $("#heroZip");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var zip = (input.value || "").trim();
      if (!/^[0-9]{5}$/.test(zip)) {
        input.classList.add("invalid");
        if (note) { note.textContent = "Enter a 5-digit ZIP code."; note.className = "ziplookup__note err"; }
        input.focus();
        return;
      }
      input.classList.remove("invalid");
      if (note) {
        note.textContent = "Frontier confirms availability and pricing by full address. Call and we will check " + zip + " with you.";
        note.className = "ziplookup__note ok";
      }
      var section = $("#plans");
      if (section) { section.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
    input.addEventListener("input", function () { input.classList.remove("invalid"); });
  }

}
