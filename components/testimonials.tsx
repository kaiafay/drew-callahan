"use client";

import { useState, useEffect, useRef, useCallback, CSSProperties } from "react";

const testimonials = [
  {
    quote:
      "I'd worked with two trainers before Drew. Neither of them actually listened. Eight months in, I'm down 34 lbs and stronger than I've ever been.",
    attribution: "Jamie R., Online Client",
  },
  {
    quote:
      "Drew doesn't let you coast. The programming is tough but it's smart. Fourteen months and zero setbacks.",
    attribution: "Marcus T., In-Person Client",
  },
  {
    quote:
      "I travel constantly for work. The online program was the first thing that ever fit my actual life. I've stuck with it for over a year.",
    attribution: "Priya S., Online Client",
  },
];

interface Tx {
  from: number;
  to: number;
  direction: 1 | -1;
  phase: "start" | "end";
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [tx, setTx] = useState<Tx | null>(null);
  const [paused, setPaused] = useState(false);
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  const navigate = useCallback((to: number, direction: 1 | -1) => {
    setTx((prev) =>
      prev !== null
        ? prev
        : { from: currentRef.current, to, direction, phase: "start" },
    );
  }, []);

  // Two-phase transition: snap to start positions, then animate to end positions
  useEffect(() => {
    if (!tx) return;

    if (tx.phase === "start") {
      let r1: number;
      let r2 = 0;
      r1 = requestAnimationFrame(() => {
        r2 = requestAnimationFrame(() => {
          setTx((t) => (t ? { ...t, phase: "end" } : null));
        });
      });
      return () => {
        cancelAnimationFrame(r1);
        cancelAnimationFrame(r2);
      };
    }

    if (tx.phase === "end") {
      const timer = setTimeout(() => {
        setCurrent(tx.to);
        setTx(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [tx]);

  useEffect(() => {
    if (paused || tx) return;
    timerRef.current = setInterval(() => {
      const c = currentRef.current;
      const next = (c + 1) % testimonials.length;
      setTx((prev) =>
        prev !== null
          ? prev
          : { from: c, to: next, direction: 1, phase: "start" },
      );
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, tx]);

  const next = useCallback(() => {
    navigate((currentRef.current + 1) % testimonials.length, 1);
  }, [navigate]);

  const prev = useCallback(() => {
    navigate(
      (currentRef.current - 1 + testimonials.length) % testimonials.length,
      -1,
    );
  }, [navigate]);

  const goTo = useCallback(
    (index: number) => {
      const dir: 1 | -1 = index >= currentRef.current ? 1 : -1;
      navigate(index, dir);
    },
    [navigate],
  );

  const slideStyle = (role: "outgoing" | "incoming"): CSSProperties => {
    const base: CSSProperties = {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    };
    if (!tx) return base;
    const d = tx.direction;
    if (role === "outgoing") {
      return {
        ...base,
        transform:
          tx.phase === "start" ? "translateX(0)" : `translateX(${-d * 80}px)`,
        opacity: tx.phase === "start" ? 1 : 0,
        transition:
          tx.phase === "end"
            ? "transform 0.5s ease-in-out, opacity 0.5s ease-in-out"
            : "none",
      };
    }
    return {
      ...base,
      transform:
        tx.phase === "start" ? `translateX(${d * 80}px)` : "translateX(0)",
      opacity: tx.phase === "start" ? 0 : 1,
      transition:
        tx.phase === "end"
          ? "transform 0.5s ease-in-out, opacity 0.5s ease-in-out"
          : "none",
    };
  };

  const renderQuote = (index: number) => (
    <>
      <blockquote
        className="font-display font-bold text-[#F5F5F5] leading-tight mb-6 text-center"
        style={{ fontSize: "clamp(20px, 2.25vw, 32px)" }}
      >
        &ldquo;{testimonials[index].quote}&rdquo;
      </blockquote>
      <p className="font-body text-[#888888] text-sm tracking-wide">
        — {testimonials[index].attribution}
      </p>
    </>
  );

  const activeIndex = tx?.to ?? current;

  return (
    <section
      id="results"
      className="bg-[#0D0D0D] py-24 lg:py-32 border-t border-[#2A2A2A]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-[#888888] mb-4">
          / Client Results
        </p>
        <h2
          className="font-display font-black uppercase text-[#F5F5F5] leading-none mb-20"
          style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
        >
          Real people. Real progress.
        </h2>

        <div
          className="relative flex flex-col items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Quote track */}
          <div className="w-full max-w-4xl mx-auto relative overflow-hidden min-h-[240px]">
            {tx ? (
              <>
                <div style={slideStyle("outgoing")}>{renderQuote(tx.from)}</div>
                <div style={slideStyle("incoming")}>{renderQuote(tx.to)}</div>
              </>
            ) : (
              <div style={slideStyle("outgoing")}>{renderQuote(current)}</div>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center hover:border-[#3DDC97] transition-colors group"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8L10 13"
                  stroke="#3DDC97"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 transition-colors ${
                    i === activeIndex
                      ? "bg-[#3DDC97]"
                      : "bg-[#2A2A2A] hover:bg-[#888888]"
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
                <path
                  d="M6 3L11 8L6 13"
                  stroke="#3DDC97"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
