import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import ColorNotFound from './ColorNotFound';

interface Plate {
  id: string;
  title: string;
  colors: string[];
  names: string[];
  weights: number[];
  kanji: string;
  tags: string[];
}

interface LocationState {
  plate: Plate;
}

export default function PlateDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const plate = (location.state as LocationState)?.plate;

  if (!plate) return <ColorNotFound />;

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black pt-20">

      {/* Header Navigation */}
      <div className="text-white absolute top-20 w-full z-99 p-8 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="text-white font-mono text-[10px] tracking-[0.4em] uppercase flex items-center gap-2 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </button>
        <span className="text-white font-serif italic text-xl">Plate No. {plate.id}</span>
      </div>

      {/* hero */}
      <div className="flex h-[70vh] w-full pt-24 px-4 gap-1">
        {plate.colors.map((hex, index) => (
          <div
            key={index}
            className="group relative flex-grow hover:flex-[1.5] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden"
            style={{ backgroundColor: hex }}
            onClick={() => navigator.clipboard.writeText(hex)}
          >
            {/* Hover Info */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/10">
              <p className="font-mono text-xs text-white mix-blend-difference uppercase tracking-widest">{plate.names[index]}</p>
              <p className="text-2xl font-serif italic text-white mix-blend-difference">{hex}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Narrative & Plate Data */}
      <div className="px-8 md:px-20 py-24 flex flex-col md:flex-row justify-between gap-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] text-white uppercase tracking-[0.5em] mb-6">Plate Composition</p>
          <h1 className="text-8xl font-serif italic mb-8 leading-none tracking-tighter">
            {plate.title}
          </h1>
          <p className="text-white text-xl font-serif italic leading-relaxed">
            A {plate.tags[0]} harmony capturing the essence of {plate.kanji}. This combination utilizes the {plate.tags[1]} aesthetic prevalent in Wada Sanzō's mid-century studies.
          </p>
        </div>

        {/* Technical Sidebar */}
        <div className="min-w-[300px] space-y-12">
          <div>
            <p className="font-mono text-[10px] text-white uppercase tracking-widest mb-4">Original Kanji</p>
            <span className="text-7xl font-serif text-white">{plate.kanji}</span>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">Weight Distribution</p>
            <div className="flex w-full h-2 rounded-full overflow-hidden bg-zinc-900">
              {plate.weights.map((w, i) => (
                <div
                  key={i}
                  style={{ width: `${(w / plate.weights.reduce((a, b) => a + b)) * 100}%`, backgroundColor: plate.colors[i] }}
                />
              ))}
            </div>
          </div>

          <button className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white hover:text-white transition-colors">
            <Share2 size={14} /> Export Harmony
          </button>
        </div>
      </div>

      {/* Decorative Separator */}
      <div className="px-20 pb-32">
        <div className="h-[1px] w-full bg-zinc-900"></div>
      </div>
    </div>
  );
}
