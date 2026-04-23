const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Training", href: "#training" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#2A2A2A] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <p className="font-body text-xs text-[#888888] tracking-wide text-center md:text-left">
            Drew Callahan · Personal Training
          </p>

          {/* Center nav */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-xs text-[#888888] hover:text-[#3DDC97] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <a
              href="https://instagram.com/"
              className="font-body text-xs text-[#888888] hover:text-[#3DDC97] transition-colors tracking-wide"
              target="_blank"
              rel="noopener noreferrer"
            >
              @drewcallahan
            </a>
            <p className="font-body text-xs text-[#888888]">
              &copy; 2025 Drew Callahan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
