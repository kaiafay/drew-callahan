'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  {
    quote:
      "I'd worked with two trainers before Drew. Neither of them actually listened. Eight months in, I'm down 34 lbs and stronger than I've ever been.",
    attribution: 'Jamie R., Online Client',
  },
  {
    quote:
      "Drew doesn't let you coast. The programming is tough but it's smart. I've had zero injuries in 14 months of training.",
    attribution: 'Marcus T., In-Person Client',
  },
  {
    quote:
      "I travel constantly for work. The online program was the first thing that ever fit my actual life. I've stuck with it for over a year.",
    attribution: 'Priya S., Online Client',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setVisible(false)
    setTimeout(() => {
      setActive(index)
      setVisible(true)
    }, 300)
  }, [])

  const next = useCallback(() => {
    goTo((active + 1) % testimonials.length)
  }, [active, goTo])

  const prev = useCallback(() => {
    goTo((active - 1 + testimonials.length) % testimonials.length)
  }, [active, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 4000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, next])

  return (
    <section id="results" className="bg-[#0D0D0D] py-24 lg:py-32 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-[#888888] mb-4">
          / Client Results
        </p>
        <h2
          className="font-display font-black uppercase text-[#F5F5F5] leading-none mb-20"
          style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
        >
          Real people. Real progress.
        </h2>

        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote */}
          <div className="w-full max-w-4xl mx-auto text-center min-h-[200px] flex flex-col items-center justify-center px-4">
            <blockquote
              className="font-display font-bold uppercase text-[#F5F5F5] leading-tight mb-6 transition-opacity duration-300"
              style={{
                fontSize: 'clamp(24px, 3vw, 42px)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              &ldquo;{testimonials[active].quote}&rdquo;
            </blockquote>
            <p
              className="font-body text-[#888888] text-sm tracking-wide transition-opacity duration-300"
              style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
              — {testimonials[active].attribution}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:border-[#3DDC97] transition-colors group"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="#3DDC97" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 transition-colors ${
                    i === active ? 'bg-[#3DDC97]' : 'bg-[#2A2A2A] hover:bg-[#888888]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:border-[#3DDC97] transition-colors"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#3DDC97" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
