const services = [
  {
    title: '1:1 In-Person Training',
    description:
      'Train out of NYC with hands-on coaching, real-time form feedback, and programming that adjusts week to week. Best for clients who want accountability in the room.',
  },
  {
    title: 'Online Coaching',
    description:
      'Full programming, weekly check-ins, video form review, and direct access via app. Built for people with busy schedules who don\'t want to compromise on quality.',
  },
]

export default function Services() {
  return (
    <section id="training" className="bg-[#0D0D0D] py-24 lg:py-32 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-[#888888] mb-4">
          / Training
        </p>
        <h2
          className="font-display font-black uppercase text-[#F5F5F5] leading-none mb-16"
          style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
        >
          Pick your format.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#1A1A1A] border border-[#2A2A2A] p-10 flex flex-col gap-6 group"
            >
              <h3
                className="font-display font-bold uppercase text-[#F5F5F5] leading-tight"
                style={{ fontSize: 'clamp(28px, 3vw, 40px)' }}
              >
                {service.title}
              </h3>
              <p className="font-body text-[#888888] text-base leading-relaxed flex-1">
                {service.description}
              </p>
              <a
                href="#cta"
                className="font-body font-semibold text-[#3DDC97] text-sm inline-flex items-center gap-2 relative self-start group/link"
              >
                Book a Call
                <span>→</span>
                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#3DDC97] transition-all duration-300 ease-out group-hover/link:w-full" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
