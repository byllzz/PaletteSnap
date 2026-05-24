import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ColorNotFound from './ColorNotFound';

interface ColorItem {
  id: number;
  name: string;
  hex: string;
  kanji: string;
  category: string;
  description: string;
  [key: string]: any;
}

interface LocationState {
  color: ColorItem;
}

export default function ColorDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = (location.state as LocationState)?.color;

  // Hex to RGB for the UI
  const hexToRgb = (hex: string): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `R:${r} / G:${g} / B:${b}`;
  };

  if (!item) return <ColorNotFound />;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-40">
      <div className="absolute top-30 flex justify-between items-start w-full items-center justify-between px-10">
          <button
            onClick={() => navigate(-1)}
            className="text-white mix-blend-difference font-mono text-[10px] tracking-[0.4em] uppercase flex items-center gap-2 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Archive
          </button>
          <span className="text-white mix-blend-difference font-serif italic text-xl">
            Dictionary
          </span>
        </div>
      {/* Hero Section */}
      <div
        className="w-full h-[60vh] relative flex flex-col justify-between p-8 md:p-16 transition-colors duration-1000"
        style={{ backgroundColor: item.hex }}
      >

        <div className="flex justify-between items-end">
          <h1 className="text-7xl md:text-[12vw] font-serif leading-none tracking-tighter text-white mix-blend-difference">
            {item.name}
          </h1>
          <span className="font-mono text-sm mb-4 opacity-70 mix-blend-difference">{item.hex}</span>
        </div>
      </div>

      {/* Technical Data Section */}
      <div className="px-6 md:px-16 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-zinc-900">
        <div className="space-y-2">
          <p className="font-mono text-[10px] text-white uppercase tracking-widest">Hex Code</p>
          <p className="text-3xl font-serif italic">{item.hex}</p>
        </div>

        <div className="space-y-2">
          <p className="font-mono text-[10px] text-white uppercase tracking-widest">
            RGB Values
          </p>
          <p className="text-3xl font-serif italic">{hexToRgb(item.hex)}</p>
        </div>

        <div className="space-y-2">
          <p className="font-mono text-[10px] text-white uppercase tracking-widest">Category</p>
          <p className="text-3xl font-serif italic">{item.category}</p>
        </div>
      </div>

      {/* Description & Narrative */}
      <div className="px-8 md:px-16 py-24 max-w-4xl">
        <h2 className="font-mono text-[10px] text-white uppercase tracking-[0.5em] mb-10">
          Historical Context
        </h2>
        <p className="text-4xl md:text-5xl font-serif leading-tight text-white italic">
          "{item.description}"
        </p>

        <div className="mt-20 flex gap-4 items-center">
          <span className="text-8xl font-serif text-zinc-200">{item.kanji}</span>
          <div className="h-[1px] flex-grow bg-zinc-400"></div>
        </div>
      </div>
    </div>
  );
}
