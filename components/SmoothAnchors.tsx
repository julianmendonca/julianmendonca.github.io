"use client";

import { useEffect } from "react";

export default function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as Element | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const id = decodeURIComponent(href.slice(1));
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior: ScrollBehavior = reduced ? "auto" : "smooth";

      // If the section is taller than the viewport, centering hides its label.
      // Fall back to aligning its top just below the fixed nav.
      const navOffset = 80;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      if (rect.height + navOffset > viewportH) {
        const targetY = window.scrollY + rect.top - navOffset;
        window.scrollTo({ top: targetY, behavior });
      } else {
        el.scrollIntoView({ behavior, block: "center" });
      }

      history.replaceState(null, "", href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
