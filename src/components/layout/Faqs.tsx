import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Who was Wada Sanzō?",
    answer: "Wada Sanzō (1883–1967) was a visionary Japanese artist and teacher. He was a pioneer in modern Japanese color theory and won an Academy Award for his costume design in the 1954 film 'Gate of Hell' (地獄門)."
  },
  {
    question: "What makes his color theory unique?",
    answer: "Unlike Western theories of the time, Wada focused on 'chords'—combinations of 2, 3, and 4 colors that captured the spirit of Showa-era Japan while embracing global modernism. His work 'Haishoku Sōkan' is a masterpiece of precision printing."
  },
  {
    question: "How are the hex codes derived?",
    answer: "The codes in the Wada Index are digital approximations of the original 1930s printed samples. We have carefully mapped these to modern sRGB values to ensure they remain as faithful as possible to the physical ink."
  },
  {
    question: "Can I use these palettes commercially?",
    answer: "Yes. The color combinations themselves are part of a historical legacy. We encourage designers to use them to bring traditional Japanese harmony to modern digital interfaces and physical products."
  }
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative text-white bg-black pt-32 pb-40 px-6 md:px-24 overflow-hidden ">

      {/* vertical watermark*/}
      <div className="absolute top-20 right-10 select-none pointer-events-none z-0 hidden lg:block">
        <h1
          className="text-[12vw] font-bold leading-none uppercase opacity-100"
          style={{
            writingMode: 'vertical-rl',
            color: 'transparent',
            WebkitTextStroke: '2px #333',
          }}
        >
          質問
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* header section */}
        <div className="mb-24 border-l border-zinc-800 pl-8">
          <div className="inline-block bg-[#b91c1c] text-white text-[10px] px-2 py-1 mb-6 tracking-[0.3em] font-bold">
            Questions You have?
          </div>
          <h1 className="font-fair text-7xl md:text-9xl text-white tracking-tighter leading-none mb-4">
            Common <br /> Queries
          </h1>
          <p className="text-white font-serif italic text-2xl">Guided Archive Access</p>
        </div>

        {/*  faq accordion grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/*  Side Column */}
          <div className="hidden lg:block lg:col-span-3">
             <div className="sticky top-40 space-y-4">
                <span className="text-[10px] text-white tracking-[0.5em] block uppercase">Navigation</span>
                <p className="font-fair italic text-white text-lg">Seeking harmony through understanding.</p>
                <div className="w-12 h-[1px] bg-zinc-800 mt-8"></div>
             </div>
          </div>

          {/*  FAQ Column */}
          <div className="lg:col-span-8 space-y-2">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`group border-b border-zinc-900 transition-all duration-500`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full py-10 flex items-start text-left"
                >
                  <span className="font-mono text-[10px] text-white mt-2 mr-8">
                    0{index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className={`font-fair text-2xl md:text-3xl transition-colors duration-200 ${activeIndex === index ? 'text-white' : 'text-zinc-200 group-hover:text-zinc-300'}`}>
                      {item.question}
                    </h3>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-zinc-200 leading-relaxed font-light text-lg max-w-2xl">
                        {item.answer}
                      </p>
                    </div>
                  </div>

                  {/*  toggle */}
                  <div className="ml-4 flex flex-col items-center">
                    <div className={`w-[2px] h-6 bg-zinc-600 transition-transform duration-300 ${activeIndex === index ? 'rotate-90' : 'rotate-0'}`}></div>
                    <div className="w-6 h-[2px] bg-zinc-800 -mt-3"></div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-40 pt-20 border-t border-zinc-900 text-center">
            <p className="text-zinc-600 text-xs uppercase tracking-[0.3em] mb-4">Still seeking answers?</p>
            <a href="mailto:hello@palettesnap.com" className="font-fair text-3xl text-white hover:text-zinc-400 transition-colors border-b border-zinc-800 pb-2">
              Reach the Archive
            </a>
        </div>
      </div>
    </section>
  );
}
