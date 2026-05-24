import { useState, useEffect } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const COLOR_STRIP: string[] = ['#8B2635','#C84B31','#E2FF46','#2E9CCA','#2D5016','#8154F0'];

interface LinkItem {
  to: string;
  label: string;
  sub: string;
}

const LINKS: LinkItem[] = [
  { to: '/',       label: 'Dictionary', sub: 'Browse all 486 colors' },
  { to: '/about',  label: 'About',      sub: 'The Wada Sanzo archive' },
  { to: '/faqs',   label: 'FAQ',        sub: 'Common questions' },
];

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
    style={{ width: 16, height: 16, flexShrink: 0 }}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LogoMark = () => (
  <NavLink to="/" className="flex items-center gap-2 group">
    <div className="flex overflow-hidden rounded-full border border-black/10 h-[22px]">
      {['#8B2635','#C84B31','#E2FF46','#2E9CCA'].map(c => (
        <div key={c} className="w-[10px] h-full" style={{ background: c }} />
      ))}
    </div>
    <span className="font-outfit text-[15px] font-semibold tracking-tight text-black">
      Palette<span className="text-[#C84B31]">Snap</span>
    </span>
  </NavLink>
);

interface ColorStripProps {
  rounded?: string;
}

const ColorStrip = ({ rounded = '' }: ColorStripProps) => (
  <div className={`flex h-[3px] ${rounded}`}>
    {COLOR_STRIP.map(c => (
      <div key={c} className="flex-1" style={{ background: c }} />
    ))}
  </div>
);

interface NavLinkClassesProps {
  isActive: boolean;
}

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const linkCls = ({ isActive }: NavLinkClassesProps): string =>
    `relative font-outfit text-[13px] font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
      isActive
        ? 'text-black after:absolute after:bottom-[3px] after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-[#C84B31]'
        : 'text-black/35 hover:text-black hover:bg-black/[0.04]'
    }`;

  return (
    <div>
      <nav className="fixed top-4 left-0 right-0 z-[60] flex justify-center px-4 font-outfit w-full">
        <div className="w-full max-w-[700px] overflow-hidden rounded-full"
          style={{ boxShadow: '0 2px 20px rgba(0,0,0,.08)' }}>

          <ColorStrip />

          <div className="flex items-center justify-between bg-white/95 backdrop-blur-md border-x border-b border-black/[0.07] px-6 h-12 rounded-b-full">
            <LogoMark />

            <div className="hidden md:flex items-center gap-0.5">
              {LINKS.map(({ to, label }) => (
                <NavLink key={to} to={to} className={linkCls}>{label}</NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:block w-px h-4 bg-black/10 mx-1" />
              <a
                href="https://github.com/byllzz/palettesnap"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-black/10 text-black/50 hover:bg-black hover:text-white hover:border-black transition-all duration-200"
              >
                <GitHubIcon />
              </a>
              <button className="hidden md:flex items-center gap-1.5 bg-black text-white text-[12px] font-medium px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4f53c] flex-shrink-0" />
                Explore
              </button>

              <button
                onClick={() => setOpen(o => !o)}
                className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-full bg-zinc-100 border border-black/07"
                aria-label="Toggle menu"
              >
                <span className={`block w-[14px] h-[1.5px] bg-black rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                <span className={`block w-[14px] h-[1.5px] bg-black rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`block w-[14px] h-[1.5px] bg-black rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-x-4 top-[76px] z-[55] md:hidden bg-white rounded-2xl border border-black/[0.07] overflow-hidden transition-all duration-30 ease-out origin-top ${open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}>
        <ColorStrip />

        <div className="p-2">
          {LINKS.map(({ to, label, sub }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-3 rounded-xl transition-colors ${
                  isActive ? 'bg-zinc-50' : 'hover:bg-zinc-50'
                }`
              }
            >
              <div>
                <div className="text-[14px] font-medium text-black">{label}</div>
                <div className="text-[11px] text-black/35 mt-0.5">{sub}</div>
              </div>
              <span className="text-black/20 text-sm">→</span>
            </NavLink>
          ))}
        </div>

        <div className="px-3 pb-3">
          <a
            href="https://github.com/byllzz/palettesnap"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-black text-white text-[13px] font-medium py-3 rounded-xl hover:opacity-82 transition-opacity"
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[50] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
