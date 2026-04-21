import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#0D0D0D] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-start">
          {/* Left: Portrait */}
          <div
            className="relative w-full mb-12 lg:mb-0"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src="/images/trainer-portrait.webp"
              alt="Drew Callahan, personal trainer"
              fill
              className="object-cover object-top"
              style={{
                filter: "grayscale(100%) contrast(1.1) brightness(0.85)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(13,13,13,0.35) 0%, transparent 25%, transparent 75%, rgba(13,13,13,0.45) 100%)",
              }}
            />
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-[#888888] mb-6">
              / About Drew
            </p>
            <h2
              className="font-display font-black uppercase text-[#F5F5F5] leading-none text-balance mb-8"
              style={{ fontSize: "clamp(40px, 4.5vw, 64px)" }}
            >
              No templates. <br />
              No fluff. <br />
              Just work.
            </h2>
            <p className="font-body text-[#888888] text-base leading-relaxed mb-10 max-w-[480px]">
              Eight years of coaching has taught me one thing: generic programs
              get generic results. Every client gets a program built from
              scratch around their schedule, their history, and where they want
              to go. I work with people who are serious about progress. If
              that&apos;s you, let&apos;s talk.
            </p>
            <a
              href="#cta"
              className="font-body font-semibold text-[#3DDC97] text-sm inline-flex items-center gap-2 relative self-start group"
            >
              Book a Free Call
              <span>→</span>
              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#3DDC97] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
