import { navLinks, socials } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 h-1 w-full rounded-full bg-linear-to-r from-violet-500 via-cyan-500 to-emerald-500" />

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-full border border-white/20 bg-white/5 p-2 text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Made with ❤️, React &amp; a lot of Google searches 😄
        </p>
        <p className="mt-2 text-center text-xs text-slate-500">© {new Date().getFullYear()} Aryan Khan. All rights reserved.</p>
      </div>
    </footer>
  );
}
