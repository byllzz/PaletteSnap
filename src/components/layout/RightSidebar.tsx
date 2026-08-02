import { useState, useMemo } from "react";
import { useStore } from "../../store/useStore";
import { useShallow } from "zustand/react/shallow";

export default function RightSidebar() {
  const selectPalette = useStore((s) => s.selectPalette);
  const toggleLike = useStore((s) => s.toggleLike);
  const currentView = useStore((s) => s.currentView);

  const [hoveredPaletteId, setHoveredPaletteId] = useState<string | null>(null);

  const rawData = useStore(
    useShallow((state) => ({
      palettes: state.palettes,
      likedPaletteIds: state.likedPaletteIds,
      activeTags: state.activeTags,
    })),
  );

  const likedPalettes = useMemo(() => {
    return rawData.palettes.filter((p) => rawData.likedPaletteIds.has(p.id));
  }, [rawData.palettes, rawData.likedPaletteIds]);

  // If on Detail page and no favorites, just return null
  if (currentView === "detail" && likedPalettes.length === 0) return null;

  let title = "Color palettes for designers";
  if (currentView === "detail") {
    title = "Color palettes for designers";
  } else if (rawData.activeTags.length > 0) {
    const formatted = rawData.activeTags
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
      .join(", ");
    title = `${formatted} palettes`;
  } else if (currentView === "new")
    title = "Color Palettes for Designers and Artists";
  else if (currentView === "popular") title = "Popular palettes";
  else if (currentView === "random") title = "Random palettes";
  else if (currentView === "tagged") title = "Filtered palettes";

  return (
    <div className="space-y-7">
      {/* ONLY RENDER THE TEXT BLOCK IF NOT ON THE DETAIL PAGE */}
      {currentView !== "detail" && (
        <div className="w-full max-w-[80%] leading-tight">
          <h2 className="text-[18px] text-zinc-900 font-medium">
            <em className="not-italic italic">{title}</em>
          </h2>
          <p className="text-[12.5px] text-zinc-900 mt-1.5 leading-relaxed">
            Discover new hand-picked palettes, save your favorites, and publish
            your own.
          </p>
        </div>
      )}

      {/* ALWAYS RENDER THE COLLECTION GRID IF FAVORITES EXIST */}
      {likedPalettes.length > 0 && (
        <div className="pr-5">
          <p className="text-[18px] font-medium tracking-normal text-black mb-3">
            Collection ·{" "}
            <span
              className="font-bold"
              style={{ fontFamily: "Instrument Serif" }}
            >
              {Math.min(likedPalettes.length, 12)}
            </span>
          </p>
          <div className="grid grid-cols-4 gap-2">
            {likedPalettes.slice(0, 12).map((p) => (
              <div
                key={p.id}
                className="relative w-full aspect-square rounded-[5px] overflow-hidden flex flex-col cursor-pointer transition-colors"
                onMouseEnter={() => setHoveredPaletteId(p.id)}
                onMouseLeave={() => setHoveredPaletteId(null)}
                onClick={() => selectPalette(p.id)}
              >
                {p.colors.map((c, i) => (
                  <div
                    key={i}
                    className="flex-1"
                    style={{ backgroundColor: c }}
                  />
                ))}

                {hoveredPaletteId === p.id && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(p.id);
                    }}
                    className="absolute top-0.5 right-0.5 bg-white/90 rounded-full p-1 text-zinc-500 hover:text-zinc-900 hover:bg-white transition-colors"
                    title="Remove from collection"
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
