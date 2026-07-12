"use client";

import { useEffect, useState } from "react";
import SkillsMarquee from "./SkillsMarquee";

/**
 * Pins the skills marquee to the bottom of the viewport while the page is at
 * the top. Once the user scrolls, it slides down out of view and the in-flow
 * marquee (rendered normally after the hero) takes over.
 */
export default function StickySkills() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ease-out ${
        atTop
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <SkillsMarquee />
    </div>
  );
}
