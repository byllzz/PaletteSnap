import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function License() {
  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-16 relative overflow-hidden pt-10">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 w-full select-none pointer-events-none z-0">
        <h1
          className="text-[20vw] font-bold leading-none uppercase tracking-tighter opacity-10"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px #ccc',
          }}
        >
          Legal
        </h1>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16 border-b border-zinc-800 pb-10">
          <h1 className="font-fair text-5xl md:text-6xl mb-4 tracking-tight">License & Rights</h1>
          <p className="text-white font-mono text-sm uppercase tracking-widest">
            Last Updated: March 2026
          </p>
        </header>

        <div className="space-y-12">
          {/* sec -1 */}
          <section className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black">
              01. Software License
            </h2>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <p className="text-zinc-400 leading-relaxed italic mb-6">The MIT License (MIT)</p>
              <p className="text-zinc-300 leading-relaxed text-sm">
                Copyright © 2026 (Bilal Malik). Permission is hereby granted, free of charge, to any
                person obtaining a copy of this software and associated documentation files (the
                "Software"), to deal in the Software without restriction, including without
                limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
                and/or sell copies of the Software.
              </p>
            </div>
          </section>

          {/* sec -2 */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black">
                02. The Wada Legacy
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                The color combinations and theories presented in this index are based on the
                historical work <strong>"Haishoku Sōkan"</strong> (1933) by Wada Sanzō. While the
                original research is in the public domain in many jurisdictions, this digital
                interpretation and curated dataset remain the property of the PaletteSnap archive.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black">
                03. Usage Policy
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Users are encouraged to use these palettes for personal and commercial design
                projects. We ask for a "Design Credit" to Wada Sanzō where possible to preserve the
                cultural heritage of these colors.
              </p>
            </div>
          </section>

          {/* sec-3 */}
          <section className="pt-10 border-t border-zinc-900">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-md">
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-black mb-2">
                  Disclaimer
                </h2>
              <p className="text-zinc-600 text-[12px] leading-relaxed">
                  Colors may vary across different digital displays. This archive provides the
                  closest digital hex-code approximations to the original printed ink samples from
                  1933.
                </p>
              </div>

              {/* stamp */}
              <div className="w-24 h-24 border-2 border-zinc-500 rounded-full flex items-center justify-center rotate-12 opacity-50">
                <span className="text-[10px] text-center uppercase tracking-tighter font-bold text-white">
                  PaletteSnap
                  <br />
                  Official
                  <br />
                  2026
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
