import { Search, Command, SlidersHorizontal } from 'lucide-react';

interface SearchNavigationProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeView: 'colors' | 'plates';
  setActiveView: (view: 'colors' | 'plates') => void;
}

export default function SearchNavigation({
  searchQuery,
  setSearchQuery,
  activeView,
  setActiveView
}: SearchNavigationProps) {
  return (
    <div className="flex flex-col items-center mb-32 w-full px-6">

      {/* whole container*/}
      <div className="relative w-full max-w-4xl group mb-20">
        <div className="absolute -top-8 left-0 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 group-focus-within:text-white/60 transition-colors">
          <Search size={10} />
          <span>Registry Search</span>
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search by mood, name, or era..."
          className="w-full bg-transparent py-8 text-3xl md:text-6xl tracking-tighter text-white outline-none border-b border-white/5 placeholder:text-white/50 font-serif transition-all duration-700 focus:placeholder:opacity-0 focus:border-white"
        />

        {/* meta data */}
        <div className="absolute right-0 bottom-4 flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest leading-none mb-1">Shortcut</span>
            <div className="flex items-center gap-1 px-2 py-1 border border-white/10 rounded text-white/40 text-[10px] font-mono">
              <Command size={10} /> K
            </div>
          </div>

          <button className="p-4 rounded-full border border-white/5 text-white/40 hover:text-white hover:border-white/20 hover:rotate-90 transition-all duration-500">
            <SlidersHorizontal size={20} strokeWidth={1} />
          </button>
        </div>

        {/* focus line */}
        <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1000 ease-in-out group-focus-within:w-full" />
      </div>

      {/* --- Collection Toggles --- */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24 relative">

        {/* collection 01 */}
        <button
          onClick={() => setActiveView('colors')}
          className={`group flex items-start gap-4 transition-all duration-700 ${
            activeView === 'colors' ? 'opacity-100' : 'opacity-20 hover:opacity-50'
          }`}
        >
          <span className="font-mono text-[11px] mt-2 border-b border-current leading-none italic">01</span>
          <div className="flex flex-col items-start">
            <span className={`text-3xl md:text-5xl font-serif tracking-tight transition-all ${activeView === 'colors' ? 'italic' : ''}`}>
              Individual Colors
            </span>
            <span className="text-[9px] uppercase tracking-[0.5em] mt-2 font-bold group-hover:translate-x-2 transition-transform duration-500">
              The Purest Shades
            </span>
          </div>
        </button>

        {/* vertical divider */}
        <div className="hidden md:block h-16 w-[1px] bg-white/10 relative overflow-hidden">
           <div className={`absolute inset-0 bg-white transition-transform duration-1000 ${activeView === 'colors' ? '-translate-y-full' : 'translate-y-0'}`} />
        </div>

        {/* collection 02 */}
        <button
          onClick={() => setActiveView('plates')}
          className={`group flex items-start gap-4 transition-all duration-700 ${
            activeView === 'plates' ? 'opacity-100' : 'opacity-20 hover:opacity-50'
          }`}
        >
          <span className="font-mono text-[11px] mt-2 border-b border-current leading-none italic">02</span>
          <div className="flex flex-col items-start">
            <span className={`text-3xl md:text-5xl font-serif tracking-tight transition-all ${activeView === 'plates' ? 'italic' : ''}`}>
              Color Plates
            </span>
            <span className="text-[9px] uppercase tracking-[0.5em] mt-2 font-bold group-hover:translate-x-2 transition-transform duration-500">
              Curated Harmonies
            </span>
          </div>
        </button>

      </div>
    </div>
  );
}
