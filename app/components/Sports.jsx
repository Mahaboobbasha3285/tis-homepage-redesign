import MotionReveal from "./MotionReveal";
import { ArrowUpRight } from "lucide-react";

const sports = ["Archery", "Cycling", "Hockey", "Swimming", "Taekwondo", "Football", "Horse Riding", "Squash", "Volleyball", "Basketball", "Cricket", "Lawn Tennis", "Badminton", "Table Tennis"];

export default function Sports() {
  return (
    <section id="sports" className="bg-surface py-24 md:py-36">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <MotionReveal>
            <p className="eyebrow text-muted">03 / Beyond academics</p>
            <h2 className="display mt-4 text-5xl leading-[.92] md:text-8xl">Sport is<br /><em className="font-normal text-[var(--accent-dark)]">foundation.</em></h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-muted">16+ sports curated to bring joy and discipline to student life, supported by dedicated facilities and experienced coaches.</p>
            <a data-cursor href="https://tis.edu.in/beyond-academics/sports/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--forest)] px-5 py-3 text-sm font-bold text-[var(--background)]">Explore sports <ArrowUpRight size={15} /></a>
          </MotionReveal>
          <MotionReveal delay={.15}>
            <div className="sport-image min-h-[460px] rounded-[2rem] p-6 md:min-h-[620px]">
              <div className="flex h-full items-end">
                <div className="glass w-full rounded-2xl p-5">
                  <p className="eyebrow text-muted">Built for movement</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sports.map(s => <span key={s} className="rounded-full border border-line px-3 py-2 text-xs font-semibold">{s}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}