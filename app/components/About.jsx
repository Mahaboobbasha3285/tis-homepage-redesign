import MotionReveal from "./MotionReveal";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="noise py-24 md:py-36">
      <div className="container-x grid gap-12 md:grid-cols-[.7fr_1.3fr] md:gap-24">
        <MotionReveal>
          <p className="eyebrow text-muted">01 / A different kind of school</p>
        </MotionReveal>
        <MotionReveal delay={.1}>
          <h2 className="display max-w-4xl text-4xl leading-[1.03] md:text-7xl">
            School should feel like an <span className="text-[var(--accent-dark)]">adventure</span>, not a checklist.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted md:text-lg">
            When students are inspired, they don&apos;t just learn. They grow, explore and shape their own futures. Tula&apos;s brings academic rigour together with a caring community and endless opportunities to discover what makes each student exceptional.
          </p>
          <a data-cursor href="https://tis.edu.in/about-tis/why-choose-us/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-current pb-2 text-sm font-bold">Why choose TIS <ArrowUpRight size={15} /></a>
        </MotionReveal>
      </div>
    </section>
  );
}