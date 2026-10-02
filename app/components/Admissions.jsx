import MotionReveal from "./MotionReveal";
import { ArrowUpRight } from "lucide-react";

export default function Admissions() {
  return (
    <section id="admissions" className="py-24 md:py-36">
      <div className="container-x">
        <MotionReveal>
          <div className="overflow-hidden rounded-[2rem] bg-[#d8c17a] p-8 text-[#17221c] md:p-16">
            <div className="grid gap-10 md:grid-cols-[1.4fr_.6fr] md:items-end">
              <div>
                <p className="eyebrow opacity-60">06 / Start the journey</p>
                <h2 className="display mt-5 text-5xl leading-[.9] md:text-8xl">Give curiosity<br /><em className="font-normal">somewhere to go.</em></h2>
              </div>
              <div>
                <p className="text-sm leading-7 opacity-75">Admissions are open for Classes IV–XII. Explore the application process and take the first step towards the TIS experience.</p>
                <a data-cursor href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#17221c] px-6 py-3 text-sm font-bold text-[#f4f1e9]">Explore admissions <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}