import { useState } from 'react';
import { Check, Copy, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ColorItem {
  id: number;
  name: string;
  hex: string;
  kanji: string;
  [key: string]: any;
}

interface SingleColorCardProps {
  item: ColorItem;
}

export default function SingleColorCard({ item }: SingleColorCardProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDetails = () => {
    navigate('/ColorDetails', { state: { color: item } });
  };

  return (
    <div
      className="group relative flex flex-col w-full cursor-pointer bg-white overflow-hidden border border-black/5 hover:border-black/20 transition-all duration-300"
      onClick={handleDetails}
    >
      {/* main Color Area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f0f0f0]">
        <div
          className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
          style={{ backgroundColor: item.hex }}
        />

        {/* Vertical Kanji (Traditional Style) */}
        <div className="absolute top-4 left-4 flex flex-col items-center">
          <span
            className="text-white mix-blend-difference font-serif text-2xl md:text-3xl font-light leading-none py-2 px-1 border border-white/20 backdrop-blur-sm tracking-widest transition-all duration-700 group-hover:border-white/60"
            style={{ writingMode: 'vertical-rl' }}
          >
            {item.kanji}
          </span>
        </div>

        {/* Subtle Inner Glow on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.15)]" />

        {/* Corner Indicator */}
        <div className="absolute bottom-4 right-4 translate-x-10 group-hover:translate-x-0 transition-transform duration-500">
           <div className="bg-white/90 backdrop-blur-md p-2 rounded-full text-black shadow-xl">
              <ArrowRight size={18} strokeWidth={1.5} />
           </div>
        </div>
      </div>

      {/* metadata Section */}
      <div className="relative p-3 flex flex-col gap-3 bg-white z-10">
        <div className="flex flex-col items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            {/* ID Number */}
            <span className="text-[10px] font-mono text-black/40 tracking-[0.2em]">
              NO.{item.id.toString().padStart(3, '0')}
            </span>
            {/* Color Name */}
            <h3 className="text-lg md:text-xl font-serif text-black leading-none tracking-tight group-hover:tracking-normal transition-all duration-500">
              {item.name}
            </h3>
          </div>

          {/* Hex / Copy Interaction */}
          <button
            onClick={handleCopy}
            className="group/btn relative flex items-center justify-center overflow-hidden h-8 px-3 border border-black/10 rounded-sm transition-all hover:border-black"
          >
            <div className={`flex items-center gap-2 transition-all duration-500 ${copied ? '-translate-y-10' : 'translate-y-0'}`}>
               <span className="text-[10px] font-outfit font-medium uppercase text-black">{item.hex}</span>
               <Copy size={12} className="opacity-40 group-hover/btn:opacity-100" />
            </div>

            <div className={`absolute flex items-center gap-1 transition-all duration-500 text-green-600 ${copied ? 'translate-y-0' : 'translate-y-10'}`}>
               <Check size={12} />
               <span className="text-[10px] font-mono font-bold">COPIED</span>
            </div>
          </button>
        </div>

        {/* Decorative Progress bar / Tint line */}
        <div className="w-full h-[1px] bg-black/5 relative overflow-hidden">
            <div
              className="absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full group-hover:translate-x-0"
              style={{ backgroundColor: item.hex }}
            />
        </div>
      </div>

      {/* Floating Tooltip Label */}
      <div
        className="absolute top-0 right-0 w-1 h-0 transition-all duration-700 group-hover:h-full"
        style={{ backgroundColor: item.hex }}
      />
    </div>
  );
}
