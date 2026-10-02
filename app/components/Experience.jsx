import MotionReveal from "./MotionReveal";
import { ArrowUpRight, Brain, Heart, Sparkles } from "lucide-react";

const cards = [
  { icon: Brain, title: "Academic curiosity", text: "A CBSE curriculum shaped around reasoning, analytical thinking, projects and experiential learning." },
  { icon: Sparkles, title: "Creative confidence", text: "Art, music, drama, clubs and student-led publications create room for every kind of talent." },
  { icon: Heart, title: "Whole-person growth", text: "A caring residential community where character, independence and belonging matter as much as grades." }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36">
      <div className="container-x">
        <MotionReveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-muted">02 / The TIS experience</p>
              <h2 className="display mt-4 max-w-2xl text-5xl leading-[.95] md:text-7xl">Three ways to<br /><em className="font-normal text-[var(--accent-dark)]">grow.</em></h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted">Tradition meets modern science, academic rigour meets a caring heart, and every student gets room to become more.</p>
          </div>
        </MotionReveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-[var(--line)] md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <MotionReveal key={title} delay={i * .1} className="bg-[var(--background)] p-8 md:p-10">
              <div className="mb-16 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface)]"><Icon size={19} /></div>
              <span className="eyebrow text-muted">0{i + 1}</span>
              <h3 className="display mt-3 text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{text}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}