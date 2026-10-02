import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[var(--surface)] py-12">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--forest)] text-sm font-black text-[var(--background)]">T</span>
              <div><strong className="block text-sm tracking-[.12em]">TULA&apos;S</strong><span className="text-[9px] font-bold tracking-[.18em] text-muted">INTERNATIONAL SCHOOL</span></div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-6 text-muted">The modern Gurukul. A co-educational residential school in Dehradun, affiliated with CBSE.</p>
          </div>
          <div>
            <p className="eyebrow text-muted">Explore</p>
            <div className="mt-4 space-y-3 text-sm"><a className="block hover:underline" href="#about">About</a><a className="block hover:underline" href="#experience">Experience</a><a className="block hover:underline" href="#sports">Sports</a><a className="block hover:underline" href="#admissions">Admissions</a></div>
          </div>
          <div>
            <p className="eyebrow text-muted">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <p>Dhoolkot, P.O. Selaqui,<br />Chakrata Road, Dehradun</p>
              <p>+91-9837983791<br />info@tis.edu.in</p>
              <a className="inline-flex items-center gap-2 font-bold text-[var(--foreground)]" href="https://tis.edu.in/contact-us/" target="_blank" rel="noreferrer">Contact TIS <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6 text-[10px] font-bold uppercase tracking-[.16em] text-muted">
          Tula&apos;s International School · Dehradun · Homepage redesign concept
        </div>
      </div>
    </footer>
  );
}