const steps = [
  {
    number: "01",
    title: "Free 20-Min Call",
    description:
      "We talk through your goals, your schedule, and what's worked or hasn't.",
  },
  {
    number: "02",
    title: "Custom Program Built",
    description:
      "I design your first training block from scratch. You get it before we start.",
  },
  {
    number: "03",
    title: "Train. Adjust. Progress.",
    description:
      "Weekly check-ins, program updates, steady progress. Results that last.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#0D0D0D] py-24 lg:py-32 border-t border-[#2A2A2A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-[#888888] mb-4">
          / The Process
        </p>
        <h2
          className="font-display font-black uppercase text-[#F5F5F5] leading-none mb-20"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          Simple. No surprises.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2A2A2A]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="py-10 md:py-0 md:px-12 first:md:pl-0 last:md:pr-0 flex flex-col gap-6"
            >
              <span
                className="font-display font-black text-[#3DDC97] leading-none"
                style={{ fontSize: "clamp(56px, 6vw, 88px)" }}
              >
                {step.number}
              </span>
              <h3
                className="font-display font-bold uppercase text-[#F5F5F5] leading-tight"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              >
                {step.title}
              </h3>
              <p className="font-body text-[#888888] text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
