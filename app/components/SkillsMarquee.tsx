import { stack } from "../data";

/** The scrolling strip of technologies. Used both in-flow (after the hero)
 *  and inside the sticky bottom overlay. */
export default function SkillsMarquee() {
  return (
    <div className="border-y border-ink/10 bg-ink py-4 text-white">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="marquee-track flex shrink-0 items-center gap-10 pr-10 font-mono text-sm text-white/70">
          {[...stack, ...stack].map((t, i) => (
            <li key={i} className="flex items-center gap-10">
              <span>{t}</span>
              <span className="text-accent">•</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
