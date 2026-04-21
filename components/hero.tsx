import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#0D0D0D]">
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center pt-16">
        {/* Ticker */}
        <div className="mt-6">
          <div className="w-full h-px bg-[#2A2A2A]" />
          <div className="overflow-hidden py-4">
            <div
              className="flex animate-marquee"
              style={{ width: "max-content" }}
            >
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center min-w-max">
                  <span
                    className="font-display font-black uppercase leading-none"
                    style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
                  >
                    <span className="text-[#F5F5F5]">
                      TRAINING THAT ACTUALLY&nbsp;
                    </span>
                    <span className="text-[#3DDC97]">WORKS.</span>
                    <span className="inline-block w-32" />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-px bg-[#2A2A2A]" />
        </div>

        {/* Subhead + CTAs */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mt-10 mb-14">
          <p className="font-body text-[#888888] text-base lg:text-lg leading-relaxed max-w-[480px] mb-8">
            1:1 coaching built around your life, your schedule, and the results
            you&apos;ve been chasing. In-person or online. No cookie-cutter
            programs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#cta"
              className="font-body font-semibold text-sm bg-[#3DDC97] text-[#0D0D0D] px-7 py-3.5 rounded-none hover:bg-[#2bc87f] transition-colors"
            >
              Book a Free Call
            </a>
            <a
              href="#process"
              className="font-body font-semibold text-sm border border-[#3DDC97] text-[#3DDC97] px-7 py-3.5 rounded-none hover:bg-[#3DDC97]/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Cinematic photo pinned to bottom */}
      <div className="w-full relative" style={{ aspectRatio: "16/4" }}>
        <Image
          src="/images/hero-gym.jpg"
          alt="Athlete training in a dramatically lit gym"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
}
