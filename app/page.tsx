import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Reveal from "./components/Reveal";
import SkillsMarquee from "./components/SkillsMarquee";
import StickySkills from "./components/StickySkills";
import {
  profile,
  links,
  stats,
  experience,
  projects,
  teaching,
  education,
} from "./data";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        {/* ---------- stack marquee ---------- */}
        <SkillsMarquee />
        {/* same marquee pinned to the viewport bottom while at the top */}
        <StickySkills />

        {/* ---------- about + stats ---------- */}
        <section
          id="about"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8"
        >
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Ingeniero informático que{" "}
                <span className="bg-accent/60 px-1">habla de negocio</span> y
                escribe el código.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                Soy el MSc. {profile.name}, {profile.role} desde {profile.location}.
                Trabajamos el ciclo completo de desarrollo: modelado de datos, diseño con los más altos estándares en UX/UI, levantamiento de servicios y construcción de APIs. Mi metodología se basa en entregables claros que aseguran la conclusión satisfactoria de cada proyecto.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
                Además de construir, enseño: soy docente de postgrado y profesor
                digital y comparto lo que aprendo como{" "}
                <span className="font-semibold text-ink">@add_code</span>.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {education.map((e) => (
                  <span
                    key={e.title}
                    className="rounded-full border border-ink/10 bg-paper-2 px-4 py-2 text-xs font-medium text-ink/70"
                  >
                    🎓 {e.title}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`rounded-2xl border border-ink/10 bg-paper-2 p-6 ${
                      i === 0 ? "sm:col-span-2 bg-ink text-white" : ""
                    }`}
                  >
                    <p
                      className={`text-4xl font-extrabold tracking-tight ${
                        i === 0 ? "text-accent" : ""
                      }`}
                    >
                      {s.value}
                    </p>
                    <p
                      className={`mt-1 text-sm ${
                        i === 0 ? "text-white/60" : "text-muted"
                      }`}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
                <div className="rounded-2xl border border-dashed border-ink/20 p-6">
                  <p className="font-mono text-xs text-muted">Stack principal</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-ink/80">
                    TypeScript · Node.js · React · Nest.js · MySQL · AWS· K8s· New Relic· Flutter
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- experience ---------- */}
        <section
          id="experience"
          className="scroll-mt-24 bg-ink py-24 text-white"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                Dónde he construido cosas que corren en producción.
              </h2>
            </Reveal>

            <div className="mt-14 space-y-2">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 80} as="div">
                  <div className="group grid grid-cols-1 gap-4 border-t border-white/10 py-7 transition-colors hover:bg-white/[0.03] sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-8 sm:px-4">
                    <span className="font-mono text-sm text-white/40">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="text-xl font-bold transition-colors group-hover:text-accent">
                          {job.company}
                        </h3>
                        <span className="text-sm text-accent/80">
                          {job.role}
                        </span>
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
                        {job.description}
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-sm font-medium">{job.period}</p>
                      <p className="text-xs text-white/40">{job.place}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- projects ---------- */}
        <section
          id="work"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8"
        >
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Selección del código abierto.
              </h2>
            </div>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-ink/40"
            >
              106+ repos en GitHub <span aria-hidden>↗</span>
            </a>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 100} as="article">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-paper-2 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink font-mono text-lg font-black text-accent transition-transform group-hover:rotate-6">
                      {"</>"}
                    </span>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
                    <span className="font-mono text-xs text-muted">
                      {p.tech}
                    </span>
                    <span className="text-sm font-semibold text-ink/70 transition-colors group-hover:text-ink">
                      Ver →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- teaching ---------- */}
        <section id="teaching" className="scroll-mt-24 bg-paper-2 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {teaching.title}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                {teaching.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  ▶ YouTube · add_code
                </a>
                <a
                  href={links.medium}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-ink/40"
                >
                  Medium
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="space-y-4">
                {teaching.points.map((pt, i) => (
                  <li
                    key={pt}
                    className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-paper p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-sm font-bold text-ink">
                      0{i + 1}
                    </span>
                    <span className="pt-1 text-sm font-medium text-ink/80">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ---------- contact / CTA ---------- */}
        <section
          id="contact"
          className="relative scroll-mt-24 overflow-hidden bg-ink py-28 text-white"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <Reveal>
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                ¿Tienes una idea?{" "}
                <span className="text-accent">La construimos.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-md text-white/60">
                Escríbenos y conversemos
              </p>
              <a
                href={links.email}
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent py-4 pl-4 pr-8 text-ink shadow-xl transition-transform hover:-translate-y-1"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-accent">
                  ✉
                </span>
                <span className="font-semibold">{profile.email}</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------- footer ---------- */}
      <footer className="border-t border-white/10 bg-ink text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          <div>
            <p className="mt-1 text-sm text-white/50">
              MSc. {profile.name} · {profile.location}
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <a href={links.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              LinkedIn
            </a>
            <a href={links.twitter} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              Twitter
            </a>
            <a href={links.youtube} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              YouTube
            </a>
            <a href={links.medium} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
              Medium
            </a>
          </nav>
        </div>
        <div className="border-t border-white/5 py-5 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {profile.short}
        </div>
      </footer>
    </>
  );
}
