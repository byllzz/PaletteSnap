import { useNavigate } from 'react-router-dom';
import { MoveLeft, Wind } from 'lucide-react';

export default function ColorNotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden relative">

      {/* Abstract Background Element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <h1 className="text-[30vw] font-serif italic text-zinc-900 leading-none select-none">
          Null
        </h1>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-2xl">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-zinc-500 animate-pulse">
            <Wind size={32} strokeWidth={1} />
          </div>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-600 mb-4">
          Error 404 // Archive Search Failure
        </p>

        <h2 className="text-5xl md:text-7xl font-serif italic text-zinc-100 mb-8 tracking-tighter leading-tight">
          The pigment has <span className="text-zinc-800 not-italic font-sans font-light">vanished.</span>
        </h2>

        <p className="text-zinc-500 font-serif italic text-lg mb-12 leading-relaxed">
          The color combination you are seeking does not exist in the Wada Sanzō collection, or it has faded with time.
        </p>

        {/* Navigation Actions */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-white font-mono text-[11px] tracking-[0.3em] uppercase group border-b border-zinc-800 pb-2 hover:border-white transition-all duration-500"
          >
            <MoveLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-500" />
            Return to Archive
          </button>

          <div className="h-[1px] w-12 bg-zinc-900 hidden md:block"></div>

          <button
            onClick={() => navigate(-1)}
            className="text-zinc-600 hover:text-zinc-300 font-mono text-[11px] tracking-[0.3em] uppercase transition-colors duration-500"
          >
            Go Back
          </button>
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end opacity-30">
        <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
          Index: Unknown
        </div>
        <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
          System: Registry Null
        </div>
      </div>
    </div>
  );
}
