interface InlineChipProps {
  swatches: string[];
  label: string;
}

interface HeroProps {
  filteredColors: any[];
  filteredPlates: any[];
}

const TILES: Array<{ c: string; n: string }> = [
  {c:'#8B2635',n:'Akane'},{c:'#C84B31',n:'Shu'},{c:'#E2FF46',n:'Hanada'},
  {c:'#1D3557',n:'Kon'},{c:'#2E9CCA',n:'Asagi'},{c:'#2D5016',n:'Matcha'},
  {c:'#C8A96E',n:'Kincha'},{c:'#8154F0',n:'Fuji'},{c:'#FF5C2B',n:'Hiiro'},
  {c:'#F0EDE8',n:'Shiro'},{c:'#4B1D8C',n:'Murasaki'},{c:'#1B5E7B',n:'Tokiwa'},
  {c:'#DD6E42',n:'Tochi'},{c:'#0a0a0a',n:'Kuro'},{c:'#6B8C3A',n:'Wakaba'},
];

const MQ_WORDS: string[] = ['Japanese Tradition','Wada Sanzo',`108 Colors`,'Export Ready','High Contrast','Edo Period','Color Science','Visual Identity'];

const InlineChip = ({ swatches, label }: InlineChipProps) => (
  <span className="inline-flex items-center rounded-full overflow-hidden border border-white/10 shrink-0 h-[clamp(44px,6vw,80px)] cursor-pointer hover:scale-105 transition-transform" style={{background:'#111'}}>
    {swatches.map((c: string) => <span key={c} className="h-full w-[clamp(24px,3.5vw,48px)]" style={{background:c}} />)}
    <span className="px-4 text-[clamp(9px,1.1vw,13px)] uppercase tracking-widest font-semibold text-white/55 whitespace-nowrap font-outfit">{label}</span>
  </span>
);

export default function Hero({ filteredColors, filteredPlates }: HeroProps) {
  const colorCards = filteredColors.length;
  const platesCards = filteredPlates.length;

  return (
    <section className="bg-[#080808] text-[#f0ede8] font-outfit overflow-hidden min-h-screen flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,900&family=Outfit:wght@300;400;600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-outfit   { font-family: 'Outfit', sans-serif; }
        @keyframes mq { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .tile-label { opacity:0; transition:opacity .2s; }
        .tile:hover .tile-label { opacity:1; }
      `}</style>

      {/* Hero area */}
      <div className="flex-1 flex flex-col">
        {/* Giant headline */}
        <div className="px-8 pt-30 md:pt-25 pb-0">
          {/* Line 1 */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 font-playfair font-black leading-[.92] tracking-tight text-[clamp(44px,8.5vw,116px)]">
            <span>281</span>
            <InlineChip swatches={['#8B2635', '#C84B31', '#E2FF46']} label="Curated" />
            <span className="italic text-[#d4f53c]">colors</span>
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 font-playfair font-black leading-[.92] tracking-tight text-[clamp(44px,8.5vw,116px)] mt-1.5">
            <span style={{ WebkitTextStroke: '1.5px #f0ede8', color: 'transparent' }}>
              for digital
            </span>
            <InlineChip swatches={['#0D2137', '#2E9CCA', '#A8D8EA']} label="Palettes" />
          </div>

          {/* Line 3 */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 font-playfair font-black leading-[.92] tracking-tight text-[clamp(44px,8.5vw,116px)] mt-1.5 mb-10">
            <span>&amp; visual</span>
            <InlineChip swatches={['#2D5016', '#6B8C3A', '#C8A96E']} label="Stories" />
            <span className="italic">artists.</span>
          </div>
        </div>

        {/* Bottom 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/[0.07] flex-1">
          {/* Left meta */}
          <div className="flex flex-col justify-between p-8 border-b md:border-b-0 md:border-r border-white/[0.07]">
            <p className="text-[13px] text-white/45 leading-[1.8] max-w-sm">
              High-contrast Japanese color pairings from the Wada Sanzo archive — export-ready for
              interfaces, design systems, and visual identity.
            </p>

            <div className="flex gap-7 mt-7">
              {[
                [colorCards, 'Single Colors'],
                [platesCards, 'Palettes'],
                ['Edo', 'Origin'],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-playfair font-black text-[30px] leading-none">{n}</div>
                  <div className="text-[9px] uppercase tracking-[.12em] text-white/30 mt-1">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-7 flex-wrap">
              <a
                href="#gridContent"
                className="bg-[#f0ede8] flex items-center gap-2 text-black font-semibold text-[12px] px-6 py-3 rounded-full hover:opacity-85 transition-opacity font-outfit"
              >
                Browse Archive{' '}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ width: 16, height: 16, flexShrink: 0 }}
                >
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                  <path
                    d="M5.5 10.5L10.5 5.5M10.5 5.5H6.5M10.5 5.5V9.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right color mosaic */}
          <div className="grid grid-cols-5 grid-rows-3" style={{ minHeight: 220 }}>
            {TILES.map(({ c, n }) => (
              <div
                key={n}
                className="tile relative overflow-hidden cursor-pointer hover:scale-105 transition-transform hover:z-10"
                style={{ background: c }}
                title={`${n} · ${c}`}
              >
                <div
                  className="tile-label absolute bottom-0 left-0 right-0 px-2 py-1.5 text-[8px] uppercase tracking-widest text-white font-semibold font-outfit"
                  style={{ background: 'rgba(0,0,0,.5)' }}
                >
                  {n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="overflow-hidden border-t border-white/[0.06] py-3"
        style={{ background: 'rgba(255,255,255,.015)' }}
      >
        <div
          className="flex gap-10 whitespace-nowrap items-center"
          style={{ animation: 'mq 20s linear infinite' }}
        >
          {[...MQ_WORDS, ...MQ_WORDS].map((w, i) => (
            <span
              key={i}
              className="text-[9px] uppercase tracking-[.2em] text-white/20 flex items-center gap-3"
            >
              {w}
              <span className="w-1 h-1 rounded-full bg-white/15 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
