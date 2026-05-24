export default function About() {
  return (
    <section className="relative bg-black text-white pt-32 pb-40 px-6 md:px-24 overflow-hidden font-inter pt-40">
      {/* the watermark vertical */}
      <div className="absolute top-20 right-10 select-none pointer-events-none z-0 hidden lg:block">
        <h1
          className="text-[12vw] relative top-15 font-bold leading-none uppercase opacity-100"
          style={{
            writingMode: 'vertical-rl',
            color: 'transparent',
            WebkitTextStroke: '2px #333',
          }}
        >
          和田三造
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* red seal accent */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-32 border-l border-zinc-800 pl-8">
          <div>
            <div className="inline-block bg-[#b91c1c] text-white text-[10px] px-2 py-1 mb-6 tracking-[0.3em] font-bold">
              EST. 1883
            </div>
            <h1 className="font-fair text-7xl md:text-9xl text-white tracking-tighter leading-none mb-4">
              Wada <br /> Sanzō
            </h1>
            <p className="text-white font-serif italic text-2xl">Color Theorist & Visionary</p>
          </div>

          <div className="mt-12 relative right-40 top-70 md:mt-0 text-right space-y-2">
            <p className="font-mono text-xs tracking-widest text-zinc-500">PERIOD</p>
            <p className="font-fair text-4xl text-white">1883 — 1967</p>
          </div>
        </div>

        {/* main narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* journey */}
          <div className="lg:col-span-4 space-y-8">
            <span className="text-[10px] text-white tracking-[0.5em] block uppercase">
              The Genesis
            </span>
            <h3 className="font-fair text-3xl text-white italic leading-tight">
              From the shores of Hyogo to the studios of Tokyo.
            </h3>
            <p className="text-zinc-500 leading-relaxed font-light">
              Born in Hyogo Prefecture, Wada moved to Tokyo at 16 with a singular ambition. Under{' '}
              <span className="text-white">Kuroda Seiki</span>, he mastered the balance of light
              and form, becoming a cornerstone of the Hakubakai society.
            </p>
          </div>

          <div className="lg:col-start-6 lg:col-span-6 space-y-12">
            <div className="relative">
              {/* image - online image of Wada Sanzō */}
              <div className="w-full h-96 bg-zinc-900/50 border border-zinc-800 rounded-sm overflow-hidden flex items-center justify-center transition-all duration-700">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Wada_Sanzo.jpg/800px-Wada_Sanzo.jpg"
                  alt="Wada Sanzō portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/333/fff?text=Wada+Sanzō';
                  }}
                />
              </div>
              <p className="mt-4 text-[11px] text-zinc-600 uppercase tracking-widest text-right italic">
                Fig 1.1 — Wada Sanzō, circa 1930s
              </p>
            </div>

            <div className="space-y-6 max-w-xl">
              <p className="text-zinc-400 leading-relaxed text-lg">
                Between 1909 and 1914, his soul expanded across{' '}
                <span className="text-white">France, India, and Burma</span>. This pilgrimage
                birthed a unique philosophy: a synthesis of Western technique and the vibrant,
                spiritual palettes of the East.
              </p>
            </div>
          </div>
        </div>

        {/* centerpiece */}
        <div className="mt-48 py-24 border-y border-zinc-900 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h4 className="text-[#b91c1c] font-mono text-xs mb-4 tracking-widest">PUBLICATION</h4>
            <h2 className="font-fair text-5xl text-white leading-tight">
              Haishoku Sōkan <br />
              <span className="text-zinc-700 italic text-4xl">配色総鑑</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-zinc-500 text-xl font-light leading-relaxed">
              In 1934, Wada published a tour de force: an 11-volume system of color chords. It
              wasn't just a book; it was a physical experience of 30 cards, immaculately bound,
              defining the <span className="text-zinc-200">triads and tetrads</span> that still
              guide Japanese modernism.
            </p>
          </div>
        </div>

        {/* legacy & achievement */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="space-y-4">
            <div className="text-4xl font-fair text-white underline decoration-zinc-800 underline-offset-8">
              1927
            </div>
            <p className="text-sm text-zinc-500">
              Founded the Japan Standard Color Association (日本標準色協会).
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-fair text-white underline decoration-zinc-800 underline-offset-8">
              1954
            </div>
            <p className="text-sm text-zinc-500">
              Academy Award for Best Costume Design — "Gate of Hell" (地獄門).
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-fair text-white underline decoration-zinc-800 underline-offset-8">
              2026
            </div>
            <p className="text-sm text-zinc-500">
              Digital preservation via the PaletteSnap Archive.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-48">
          <h4 className="text-[#b91c1c] font-mono text-xs mb-8 tracking-widest text-center">GALLERY</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-full h-64 bg-zinc-900/50 border border-zinc-800 rounded-sm overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Gate_of_Hell_poster.jpg/800px-Gate_of_Hell_poster.jpg"
                  alt="Gate of Hell movie poster"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/333/fff?text=Gate+of+Hell';
                  }}
                />
              </div>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest text-center">Gate of Hell (1954) — Academy Award Winner</p>
            </div>

            <div className="space-y-3">
              <div className="w-full h-64 bg-zinc-900/50 border border-zinc-800 rounded-sm overflow-hidden flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Haishoku_Sokan.jpg/800px-Haishoku_Sokan.jpg"
                  alt="Haishoku Sōkan book cover"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/333/fff?text=Haishoku+Sōkan';
                  }}
                />
              </div>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest text-center">Haishoku Sōkan (1933) — Dictionary of Color Combinations</p>
            </div>

            <div className="space-y-3">
              <div className="w-full h-64 bg-zinc-900/50 border border-zinc-800 rounded-sm overflow-hidden flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Japanese_traditional_colors.jpg/800px-Japanese_traditional_colors.jpg"
                  alt="Traditional Japanese colors"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/333/fff?text=Traditional+Colors';
                  }}
                />
              </div>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest text-center">Traditional Japanese Pigments — Wada Index</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
