import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { navLinks } from "../data/portfolioData";

export default function Navbar({ activeSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group inline-flex items-center gap-2 text-lg font-semibold tracking-wide">
          <Sparkles className="h-5 w-5 text-cyan-300 transition-transform group-hover:rotate-12" />
          <span className="bg-linear-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Aryan Khan
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`group relative px-3 py-2 text-sm transition-colors duration-300 ${
                activeSection === link.id ? "text-cyan-300" : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-linear-to-r from-violet-400 to-cyan-400 transition-all duration-300 ${
                  activeSection === link.id
                    ? "w-full opacity-100"
                    : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                }`}
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="rounded-lg border border-white/15 bg-white/5 p-2 text-slate-100 transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/70 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 py-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-3 py-2 text-sm transition ${
                activeSection === link.id ? "bg-cyan-500/20 text-cyan-200" : "text-slate-300 hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
