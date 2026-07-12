"use client";

import { useEffect, useState } from "react";
import { links } from "../data";

const items = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#work" },
  { label: "Docencia", href: "#teaching" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <div className="flex items-center gap-8 lg:gap-12">
          <a
            href="#top"
            className={`text-2xl font-extrabold tracking-tight transition-colors ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            DA<span className="text-accent">.</span>
          </a>

          <ul
            className={`hidden items-center gap-8 text-sm font-medium transition-colors md:flex ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            {items.map((it) => (
              <li key={it.href}>
                <a
                  href={it.href}
                  className="relative opacity-80 transition-opacity hover:opacity-100 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/15 bg-ink px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Hablemos
          </a>
          <button
            aria-label="Menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden ${
              scrolled ? "border-ink/15 text-ink" : "border-white/25 text-white"
            }`}
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={`overflow-hidden border-t border-ink/5 bg-paper/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-3">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-sm font-medium text-ink/70 transition-colors hover:bg-paper-2 hover:text-ink"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
