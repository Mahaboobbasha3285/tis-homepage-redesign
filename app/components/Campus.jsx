import MotionReveal from "./MotionReveal";
import { ArrowUpRight } from "lucide-react";

export default function Campus() {
  return (
    <section id="campus" className="py-24 md:py-36">
      <div className="container-x">
        <MotionReveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-muted">04 / The campus</p>
              <h2 className="display mt-4 max-w-3xl text-5xl leading-[.95] md:text-7xl">A place to <em className="font-normal text-[var(--accent-dark)]">belong.</em></h2>
            </div>
            <a data-cursor className="hidden items-center gap-2 border-b border-current pb-2 text-xs font-bold md:flex" href="https://tis.edu.in/" target="_blank" rel="noreferrer">Visit TIS <ArrowUpRight size={14} /></a>
          </div>
        </MotionReveal>
        <MotionReveal delay={.12} className="mt-12">
          <div className="campus-image relative min-h-[500px] overflow-hidden rounded-[2rem] md:min-h-[680px]">
            <div className="absolute bottom-6 left-6 right-6 grid gap-3 md:grid-cols-3">
              {[
                ["Digital workstations", "Technology that supports hands-on learning."],
                ["20,000+ books", "A spacious library built for discovery."],
                ["Clubs & societies", "Platforms to uncover hidden talents."]
              ].map(([title, text]) => (
                <div key={title} className="glass rounded-2xl p-5">
                  <p className="text-sm font-bold">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}