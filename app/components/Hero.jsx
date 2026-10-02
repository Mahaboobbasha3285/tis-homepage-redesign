"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--forest)] text-white">
      <div className="hero-image absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b261b]/90 via-[#0b261b]/55 to-transparent" />
      <div className="container-x relative flex min-h-screen items-end pb-12 pt-32 md:pb-16">
        <div className="max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="eyebrow mb-5 text-[#dfc476]">
            The Modern Gurukul · Dehradun
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .1 }} className="display max-w-4xl text-6xl leading-[.88] md:text-[clamp(5rem,10vw,9.5rem)]">
            Learn beyond<br /><em className="font-normal text-[#dfc476]">limits.</em>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .8, delay: .35 }} className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-sm leading-7 text-white/75 md:text-base">
              At Tula&apos;s, we believe in bringing out the best in every student, whether it&apos;s academics, music, art, drama or sport. Creativity finds its way when curiosity leads.
            </p>
            <div className="flex gap-3">
              <a data-cursor href="#about" className="flex items-center gap-2 rounded-full bg-[#dfc476] px-6 py-3 text-sm font-bold text-[#14251b]">Discover TIS <ArrowUpRight size={16} /></a>
              <a data-cursor href="#experience" className="grid h-12 w-12 place-items-center rounded-full border border-white/30 hover:bg-white/10"><ArrowDown size={17} /></a>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-7 right-8 hidden text-right text-[10px] font-bold uppercase tracking-[.22em] text-white/55 md:block">
        <span className="block">Grade IV–XII</span>
        <span>CBSE · Co-Ed · Residential</span>
      </div>
    </section>
  );
}