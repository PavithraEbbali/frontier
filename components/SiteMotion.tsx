"use client";

import { useEffect } from "react";
import gsap from "gsap";
// dist path resolves in both Turbopack dev and the production build (the bare
// `gsap/ScrollTrigger` subpath trips Turbopack's dev server-graph on gsap 3.12.5);
// types are supplied by types/gsap.d.ts.
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// ported, verbatim, from the original vanilla animation layer (js/main.js)
import { initSiteMotion } from "@/lib/site-motion";

export default function SiteMotion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // expose on window (as the original CDN build did) for interop/debugging
    (window as unknown as { gsap: unknown }).gsap = gsap;
    (window as unknown as { ScrollTrigger: unknown }).ScrollTrigger = ScrollTrigger;
    try {
      initSiteMotion(gsap, ScrollTrigger);
    } catch (e) {
      // Failsafe: if anything in the motion layer throws, reveal all
      // progressive-enhancement-hidden content so nothing stays invisible.
      console.error("[SiteMotion]", e);
      document.documentElement.classList.add("no-gsap");
      document
        .querySelectorAll<HTMLElement>(
          "[data-animate],[data-reveal],[data-hero-kicker],[data-hero-lead],[data-hero-cta],[data-hero-chip],[data-hero-rotline],.hero__stage,.hero__title .mask__i"
        )
        .forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.clipPath = "none";
          el.style.filter = "none";
        });
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
