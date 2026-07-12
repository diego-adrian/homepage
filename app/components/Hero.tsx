import Image from "next/image";
import { profile, projects, links } from "../data";

/**
 * Split light/dark diagonal hero inspired by the reference prototype.
 * Left = paper with the pitch + CTAs. Right = ink panel with an orbiting
 * avatar motif and a "featured project" card echoing the coupon card.
 */
export default function Hero() {
  const featured = projects[0];

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-ink text-white"
    >
      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-2 lg:pt-20">
        {/* ---------- left: pitch ---------- */}
        <div className="max-w-xl">
          <h1 className="enter mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl [animation-delay:140ms]">
            {profile.tagline}
            <br />
            <span className="relative inline-block">
              {profile.taglineAccent}
              <svg
                aria-hidden
                viewBox="0 0 300 24"
                className="absolute -bottom-2 left-0 h-4 w-full text-accent"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 18C60 6 140 4 298 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="enter mt-7 max-w-md text-base leading-relaxed text-white/70 [animation-delay:220ms]">
            {profile.intro}
          </p>

          <div className="enter mt-9 flex flex-wrap items-center gap-4 [animation-delay:300ms]">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-green px-7 py-3 font-light text-emerald-500 transition-all"
            >
              Trabajemos juntos
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              Ver proyectos
              <span aria-hidden>→</span>
            </a>
          </div>

          {/* featured project card (echo of the coupon card) */}
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="enter group mt-6 block w-full max-w-sm rounded-2xl bg-ink-soft/95 p-4 text-white shadow-2xl transition-transform hover:-translate-y-0.5 [animation-delay:440ms]"
          >
            <div className="dash flex items-center justify-between rounded-xl px-3 py-2 text-[11px] uppercase tracking-widest text-white/50">
              <span>Proyecto destacado</span>
              <span className="text-white/40">GitHub ↗</span>
            </div>
            <div className="mt-3 flex items-center gap-3 px-1">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent font-mono text-lg font-black text-ink">
                {"</>"}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold group-hover:text-accent">
                  {featured.name}
                </p>
                <p className="truncate text-xs text-white/50">
                  {featured.tech}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">
                {featured.badge}
              </span>
            </div>
          </a>
        </div>

        {/* ---------- right: avatar motif + featured card ---------- */}
        <div className="relative mx-auto flex h-full w-full max-w-md items-center justify-center lg:max-w-none">
          {/* floating decorative dots */}
          <span className="absolute left-4 top-6 h-3 w-3 rounded-full bg-accent animate-float" />
          <span className="absolute right-10 top-0 h-2 w-2 rounded-full bg-white/70 animate-float-slow" />
          <span className="absolute bottom-24 left-0 h-2.5 w-2.5 rounded-full bg-white/50 animate-drift" />

          {/* orbiting dashed ring + avatar */}
          <div className="relative flex items-center justify-center">
            <div
              aria-hidden
              className="absolute h-[19rem] w-[19rem] rounded-full border border-dashed border-white/25 animate-spin-slow sm:h-[23rem] sm:w-[23rem]"
            />
            <div
              aria-hidden
              className="absolute h-[15rem] w-[15rem] rounded-full bg-accent/10 blur-2xl sm:h-[18rem] sm:w-[18rem]"
            />

            {/* framed portrait — ~70% of the screen height, fades into the ink panel */}
            <div className="relative h-[52vh] w-[39vh] animate-float sm:h-[70vh] sm:w-[52.5vh]">
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/diego-v3.png"
                  alt={profile.name}
                  fill
                  priority
                  sizes="(min-width: 640px) 45vw, 80vw"
                  className="object-cover object-top"
                />
                {/* elegant bottom fade to ink for contrast */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/50 to-transparent"
                />
              </div>
              {/* floating code chips = the "ingredients" */}
              <span className="absolute -left-6 top-10 rounded-xl bg-ink px-3 py-1.5 font-mono text-sm text-accent shadow-lg animate-float-slow">
                &lt;/&gt;
              </span>
              <span className="absolute -right-5 bottom-14 rounded-xl bg-white px-3 py-1.5 font-mono text-sm text-ink shadow-lg animate-float">
                {"{ }"}
              </span>
              <span className="absolute -left-16 top-1/3 whitespace-nowrap rounded-xl bg-emerald-500 px-3 py-1.5 font-mono text-sm text-white shadow-lg animate-float">
                pnpm run start:dev
              </span>
              <span className="absolute -right-10 top-6 whitespace-nowrap rounded-xl bg-sky-500 px-3 py-1.5 font-mono text-sm text-white shadow-lg animate-drift">
                kubectl get rs
              </span>
              <span className="absolute -right-8 bottom-1/3 whitespace-nowrap rounded-xl bg-violet-500 px-3 py-1.5 font-mono text-sm text-white shadow-lg animate-float-slow">
                pnpm run lint
              </span>
              <span className="absolute -bottom-9 left-1/4 whitespace-nowrap rounded-xl bg-rose-500 px-3 py-1.5 font-mono text-sm text-white shadow-lg animate-float">
                {'export AWS_ACCESS_KEY_ID="AJHJH7876876ASDFE"'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
