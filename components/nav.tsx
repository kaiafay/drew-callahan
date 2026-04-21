"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Training", href: "#training" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0D0D0D]/95 backdrop-blur-md border-[#2A2A2A]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className="font-display text-xl font-bold uppercase tracking-widest text-[#F5F5F5] hover:text-[#3DDC97] transition-colors"
          >
            Drew Callahan
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-base text-[#888888] hover:text-[#3DDC97] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#cta"
              className="hidden md:block font-body text-sm font-semibold bg-[#3DDC97] text-[#0D0D0D] px-5 py-2 rounded-none hover:bg-[#2bc87f] transition-colors"
            >
              Book a Free Call
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
              aria-label="Open menu"
            >
              <span className="block w-6 h-px bg-[#F5F5F5]" />
              <span className="block w-6 h-px bg-[#F5F5F5]" />
              <span className="block w-4 h-px bg-[#F5F5F5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0D0D0D] flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 text-[#888888] hover:text-[#F5F5F5] transition-colors text-3xl font-light"
            aria-label="Close menu"
          >
            ×
          </button>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl font-bold uppercase tracking-widest text-[#F5F5F5] hover:text-[#3DDC97] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="mt-4 font-body text-base font-semibold bg-[#3DDC97] text-[#0D0D0D] px-8 py-3 rounded-none hover:bg-[#2bc87f] transition-colors"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </>
  );
}
