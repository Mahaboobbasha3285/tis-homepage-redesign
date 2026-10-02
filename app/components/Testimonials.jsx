import MotionReveal from "./MotionReveal";

const reviews = [
  ["Namita Agarwal", "M/O Krishna Agarwal", "Tula’s gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better."],
  ["Tashi Tsering", "F/O Jigmet Skaldon", "I would like to convey a big thanks to the Management and Teachers of Tula’s International School for taking good care of my son."],
  ["Suresh Kumar", "F/O Aditya Kumar", "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him."]
];

export default function Testimonials() {
  return (
    <section className="bg-[var(--forest)] py-24 text-[var(--background)] md:py-32">
      <div className="container-x">
        <MotionReveal>
          <p className="eyebrow opacity-50">05 / From the parents</p>
          <h2 className="display mt-4 max-w-2xl text-5xl leading-none md:text-7xl">The best stories<br /><em className="font-normal text-[#dfc476]">come from people.</em></h2>
        </MotionReveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {reviews.map(([name, role, quote], i) => (
            <MotionReveal key={name} delay={i * .1} className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="mb-10 text-[#dfc476]">★★★★★</div>
              <p className="text-sm leading-7 opacity-85">“{quote}”</p>
              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="text-sm font-bold">{name}</p>
                <p className="mt-1 text-xs opacity-45">{role}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}