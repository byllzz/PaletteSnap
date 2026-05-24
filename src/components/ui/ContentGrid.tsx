import { useState, useEffect } from 'react';
import SingleColorCard from '../ui/SingleColorCard';
import PlateCard from '../ui/PlateCard';
import { EmptyState } from '../../pages/Home';

interface Color {
  id: string;
  name: string;
  hex: string;
  [key: string]: any;
}

interface Plate {
  id?: string;
  title: string;
  colors?: string[];
  [key: string]: any;
}

interface ContentGridProps {
  activeView: 'colors' | 'plates';
  filteredColors: Color[];
  filteredPlates: Plate[];
  searchQuery: string;
}

const COLORS_PER_PAGE = 80;
const PLATES_PER_PAGE = 9;

export default function ContentGrid({
  activeView,
  filteredColors,
  filteredPlates,
  searchQuery
}: ContentGridProps) {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [activeView, searchQuery]);

  const isColors = activeView === 'colors';
  const allItems = isColors ? filteredColors : filteredPlates;
  const perPage = isColors ? COLORS_PER_PAGE : PLATES_PER_PAGE;

  const totalPages = Math.ceil(allItems.length / perPage);
  const startIdx = (page - 1) * perPage;
  const visibleItems = allItems.slice(startIdx, startIdx + perPage);

  const itemCount = allItems.length;
  const viewLabel = isColors ? 'Pigments' : 'Harmonies';

  const goTo = (p: number) => {
    setPage(p);
    document.getElementById('gridContent')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getPageNumbers = (): (number | string)[] => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 4) return [1, 2, 3, 4, 5, '…', totalPages];
    if (page >= totalPages - 3) return [1, '…', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, '…', page - 1, page, page + 1, '…', totalPages];
  };

  return (
    <div className="min-h-[70vh] flex flex-col gap-8" id="gridContent">

      {/* Metadata bar */}
      <div className="flex justify-between items-end border-b border-white/5 pb-4 px-2">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            Current View
          </span>
          <span className="h-[1px] w-8 bg-white/20" />
          <span className="text-sm font-serif italic text-white/80">
            {viewLabel} ({itemCount.toString().padStart(2, '0')})
          </span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {totalPages > 1 && (
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">
              Page {page} / {totalPages}
            </span>
          )}
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">
            PaletteSnap Archive / 2026
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="relative">
        {isColors ? (
          <div
            key={`colors-${page}`}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-3 animate-in fade-in slide-in-from-bottom-8 duration-500"
          >
            {visibleItems.length > 0 ? (
              visibleItems.map((item, idx) => (
                <div
                  key={item.id}
                  style={{ animationDelay: `${Math.min(idx * 15, 300)}ms` }}
                  className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                >
                  <SingleColorCard item={item} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-20">
                <EmptyState query={searchQuery} />
              </div>
            )}
          </div>
        ) : (
          <div
            key={`plates-${page}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 animate-in fade-in slide-in-from-bottom-8 duration-500"
          >
            {visibleItems.length > 0 ? (
              visibleItems.map((plate, idx) => (
                <div
                  key={plate.id || idx}
                  style={{ animationDelay: `${Math.min(idx * 60, 400)}ms` }}
                  className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both"
                >
                  <PlateCard plate={plate} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-20">
                <EmptyState query={searchQuery} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex flex-col items-center gap-6">

          <div className="flex items-center gap-1">
            {/* Prev */}
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all text-sm"
            >
              ←
            </button>

            {/* Page numbers */}
            {getPageNumbers().map((p, i) =>
              p === '…' ? (
                <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center font-mono text-[11px] text-white/20">
                  ···
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => goTo(p as number)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full font-mono text-[11px] tracking-wider transition-all ${
                    p === page
                      ? 'bg-white text-black font-medium'
                      : 'border border-white/10 text-white/40 hover:text-white hover:border-white/30'
                  }`}
                >
                  {p}
                </button>
              )
            )}

            {/* Next */}
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 disabled:opacity-20 disabled:cursor-not-allowed transition-all text-sm"
            >
              →
            </button>
          </div>

          {/* Range label */}
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">
            Showing {startIdx + 1}–{Math.min(startIdx + perPage, itemCount)} of {itemCount} {viewLabel}
          </span>
        </div>
      )}

      {/* End of collection marker — only on last page */}
      {itemCount > 0 && page === totalPages && (
        <div className="mt-12 flex justify-center opacity-60 group">
          <div className="flex flex-col items-center gap-2">
            <div className="w-[1px] h-12 bg-white transition-all group-hover:h-20" />
            <span className="font-mono text-[12px] text-white uppercase tracking-[0.5em]">
              End of Collection
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
