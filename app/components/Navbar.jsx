"use client";

import { Menu, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Sports", "#sports"],
  ["Campus", "#campus"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3">
      <nav className="container-x glass flex h-[68px] items-center justify-between rounded-2xl px-4 md:px-6">
        <a href="#" className="flex items-center gap-3" data-cursor>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--forest)] text-sm font-black text-[var(--background)]">T</span>
          <span className="leading-none">
            <strong className="block text-sm tracking-[.12em]">TULA&apos;S</strong>
            <span className="text-[9px] font-bold tracking-[.18em] text-muted">INTERNATIONAL SCHOOL</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a data-cursor className="text-xs font-bold uppercase tracking-wider opacity-70 transition hover:opacity-100" href={href} key={label}>{label}</a>)}
          <ThemeToggle />
          <a data-cursor href="#admissions" className="flex items-center gap-2 rounded-full bg-[var(--forest)] px-5 py-3 text-xs font-bold text-[var(--background)]">
            Admissions <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded-full border border-line">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-x mt-2 rounded-2xl border border-line bg-[var(--background)] p-5 shadow-xl md:hidden">
          {links.map(([label, href]) => (
            <a onClick={() => setOpen(false)} key={label} href={href} className="block border-b border-line py-4 text-sm font-bold uppercase tracking-wider last:border-0">{label}</a>
          ))}
          <a onClick={() => setOpen(false)} href="#admissions" className="mt-4 block rounded-full bg-[var(--forest)] px-5 py-3 text-center text-xs font-bold text-[var(--background)]">Explore Admissions</a>
        </div>
      )}
    </header>
  );
}