import { useState, useMemo } from "react";
import { useStore } from "../../store/useStore";
import { HeartIcon, ImageIcon, LinkIcon } from "../ui/Icons";
import { hexToRgb } from "../../utils/colorHelpers";
import { TAG_COLORS } from "../../data/tagColors";
import ExportModal from "../modals/ExportModal";

export default function PaletteDetail({ id }: { id: string }) {
  const [hoveredHex, setHoveredHex] = useState<string | null>(null);
  const [relatedPaletteHex, SetrelatedPaletteHex] = useState<string | null>(
    null,
  );
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const { palettes, toggleLike, setActiveTags, selectPalette } = useStore();
  const palette = palettes.find((p) => p.id === id);

  const relatedPalettes = useMemo(() => {
    if (!palette) return [];
    return palettes
      .filter(
        (p) =>
          p.id !== palette.id &&
          p.tags.some((tag) => palette.tags.includes(tag)),
      )
      .slice(0, 4);
  }, [palettes, palette]);

  if (!palette)
    return (
      <div className="py-10 text-center text-zinc-400 text-[13.5px]">
        Palette not found
      </div>
    );

  const handleTagClick = (tag: string) => setActiveTags([tag]);

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(String(color));
    setCopiedHex(color);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex flex-col items-center py-6">
      <div className="w-full max-w-[400px] h-[390px] rounded-xl overflow-hidden flex flex-col border border-zinc-200 mb-4">
        {palette.colors.map((color, i) => (
          <div
            key={i}
            //  the 2:1.3:1:1 ratio exactly like PaletteCard
            className={`${
              i === 0 ? "flex-[2]" : i === 1 ? "flex-[1.3]" : "flex-1"
            } relative`}
            style={{ backgroundColor: color }}
            onMouseEnter={() => setHoveredHex(color)}
            onMouseLeave={() => setHoveredHex(null)}
          >
            {hoveredHex === color && (
              <div
                className="absolute bottom-0 left-0 bg-black/75 backdrop-blur-sm text-white px-3.5 py-2 rounded-tr-[10px] text-xs  tracking-wide cursor-pointer hover:bg-black flex items-center gap-2.5 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy(color);
                }}
                title="Click to copy"
              >
                <span className="text-[12px]">
                  {copiedHex === color ? (
                    <span>Copied ✓</span>
                  ) : (
                    <span>{color.toUpperCase()}</span>
                  )}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full max-w-[400px] flex items-center justify-between mb-8">
        <div className="flex gap-2">
          <button
            onClick={() => toggleLike(id)}
            className="flex items-center gap-2 px-3.5 py-2 border border-zinc-200 rounded-lg text-[13px] hover:bg-zinc-100 hover:border-zinc-300 transition-colors"
          >
            <HeartIcon filled={palette.isLiked} size={16} />
            <span className="font-medium text-zinc-700">{palette.likes}</span>
          </button>

          <button
            onClick={() => setIsExportOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 border border-zinc-200 rounded-lg text-[13px] text-zinc-700 hover:bg-zinc-100 hover:border-zinc-300 transition-colors"
          >
            <ImageIcon /> Image
          </button>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-3.5 py-2 border border-zinc-200 rounded-lg text-[13px] text-zinc-700 hover:bg-zinc-100 hover:border-zinc-300 transition-colors"
          >
            <LinkIcon /> Link
          </button>
        </div>
        <span className="text-[12.5px] text-zinc-400">{palette.date}</span>
      </div>

      <div className="w-full max-w-3xl border-t border-b border-zinc-200 py-6 flex flex-col gap-5">
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {palette.colors.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                handleCopy(c);
              }}
              title="Click to copy hex"
            >
              <div
                className="w-7 h-7 rounded-full border border-black/5"
                style={{ backgroundColor: c }}
              />
              <span className="text-[13px] font-mono font-medium uppercase tracking-wide text-zinc-800">
                {c}
              </span>
              {copiedHex === c && (
                <span className="text-[10px] text-emerald-600 font-medium">
                  Copied ✓
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {palette.colors.map((c, i) => {
            const rgb = hexToRgb(c);
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy(c);
                }}
                title="Click to copy color"
              >
                <span className="text-[11px] text-zinc-400 font-mono">
                  {rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : ""}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-3xl mt-6 flex justify-center gap-2 flex-wrap">
        {palette.tags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className="flex items-center gap-1.5 pl-2.5 pr-3 py-1.5 border border-zinc-200 rounded-full text-[12.5px] font-medium text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
          >
            <div
              className="w-2 h-2 rounded-full border border-black/5"
              style={{
                backgroundColor: TAG_COLORS[tag.toLowerCase()] ?? "#D4D4D8",
              }}
            />
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>

      {relatedPalettes.length > 0 && (
        <div className="w-full mt-14">
          <h3
            className="text-[26px] mb-5 text-center text-zinc-900"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            More with{" "}
            <em className="not-italic italic">
              {palette.tags[0] &&
                palette.tags[0].charAt(0).toUpperCase() +
                  palette.tags[0].slice(1)}
            </em>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPalettes.map((p) => (
              <div
                key={p.id}
                onClick={() => selectPalette(p.id)}
                className="cursor-pointer group"
              >
                <div className="h-70 rounded-lg overflow-hidden flex flex-col mb-2 border border-zinc-200/70 group-hover:border-zinc-300 transition-colors">
                  {p.colors.map((c, i) => (
                    <div
                      key={i}
                      className={`flex relative ${
                        i === 0 ? "flex-[2]" : i === 1 ? "flex-[1.3]" : "flex-1"
                      }`}
                      style={{ backgroundColor: c }}
                      onMouseEnter={() => SetrelatedPaletteHex(c)}
                      onMouseLeave={() => SetrelatedPaletteHex(null)}
                    >
                      {relatedPaletteHex === c && (
                        <div
                          className="absolute bottom-0 left-0 bg-black/75 backdrop-blur-sm text-white px-3.5 py-2 rounded-tr-[10px] text-xs tracking-wide cursor-pointer hover:bg-black flex items-center gap-2.5 transition-colors z-10"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(c);
                          }}
                          title="Click to copy"
                        >
                          <span className="text-[12px]">
                            {copiedHex === c ? (
                              <span>Copied ✓</span>
                            ) : (
                              <span>{c.toUpperCase()}</span>
                            )}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center p-1 gap-1.5">
                  {/* Made the heart button clickable and interactive */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(p.id);
                    }}
                    className="flex items-center gap-0.5 px-2 py-0.5  active:scale-98 transition-all duration-100 rounded-full hover:bg-zinc-100 transition-colors"
                  >
                    <HeartIcon
                      size={13}
                      filled={p.isLiked}
                      className={`${p.isLiked ? "text-black" : "text-zinc-400"}`}
                    />
                    <span className="text-[12px] text-zinc-500">{p.likes}</span>
                  </button>

                  <span className="text-[12.5px] text-zinc-400">{p.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        colors={palette.colors}
        paletteId={palette.id}
      />
    </div>
  );
}
