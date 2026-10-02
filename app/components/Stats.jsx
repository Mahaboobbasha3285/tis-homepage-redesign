import MotionReveal from "./MotionReveal";

const stats = [
  ["22", "Acre pollution-free campus"],
  ["16+", "Olympic sports"],
  ["24×7", "Medical assistance"],
  ["5:1", "Student-teacher ratio"]
];

export default function Stats() {
  return (
    <section className="bg-[var(--forest)] py-16 text-[var(--background)] md:py-20">
      <div className="container-x grid grid-cols-2 md:grid-cols-4">
        {stats.map(([value, label], i) => (
          <MotionReveal key={label} delay={i * .08} className="border-r border-white/15 px-5 py-4 first:pl-0 last:border-0 md:px-8">
            <p className="display text-5xl md:text-7xl">{value}</p>
            <p className="mt-3 max-w-[150px] text-[10px] font-bold uppercase leading-4 tracking-[.14em] opacity-65">{label}</p>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}