export default function FinalCTA() {
  return (
    <section id="cta" className="bg-[#1A1A1A] border-t border-[#2A2A2A] py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center gap-8">
        <h2
          className="font-display font-black uppercase text-[#F5F5F5] leading-none text-balance"
          style={{ fontSize: 'clamp(48px, 7vw, 100px)' }}
        >
          Ready to stop guessing?
        </h2>
        <p className="font-body text-[#888888] text-lg leading-relaxed max-w-md">
          Book a free 20-minute call. No commitment, just a conversation.
        </p>
        <a
          href="#"
          className="font-body font-semibold text-base bg-[#3DDC97] text-[#0D0D0D] px-10 py-4 rounded-none hover:bg-[#2bc87f] transition-colors inline-flex items-center gap-2 group"
        >
          Book Your Free Call
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  )
}
