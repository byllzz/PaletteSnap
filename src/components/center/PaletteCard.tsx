import { useState } from "react";
import { useStore } from "../../store/useStore";
import { HeartIcon } from "../ui/Icons";
import { Palette } from "../../store/useStore";

interface Props {
  palette: Palette;
}

export default function PaletteCard({ palette }: Props) {
  const [hoveredHex, setHoveredHex] = useState<string | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const toggleLike = useStore((s) => s.toggleLike);
  const selectPalette = useStore((s) => s.selectPalette);

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(String(color));
    setCopiedHex(color);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={() => selectPalette(palette.id)}
    >
      <div className="rounded-lg overflow-hidden h-60 flex flex-col mb-3 border border-zinc-200/70 group-hover:border-zinc-300 transition-colors">
        {palette.colors.map((color, i) => (
          <div
            key={i}
            className="flex-1 relative"
            style={{ backgroundColor: color }}
            onMouseEnter={() => setHoveredHex(color)}
            onMouseLeave={() => setHoveredHex(null)}
          >
            {hoveredHex === color && (
              <div
                className="absolute bottom-0 left-0 bg-black/75 backdrop-blur-sm text-white px-2 py-1  rounded-tr-[5px]  text-[10px] font-mono tracking-wide cursor-pointer hover:bg-black flex items-center gap-1.5 transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy(color);
                }}
                title="Click to copy"
              >
                <span>{color.toUpperCase()}</span>
                <span className="text-[9px] text-white/60">
                  {copiedHex === color ? "✓" : ""}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(palette.id);
          }}
          className="flex items-center gap-1.5 px-2 py-1 -ml-2 rounded-full hover:bg-zinc-100 transition-colors"
        >
          <HeartIcon filled={palette.isLiked} size={15} />
          <span className="text-[13px] font-medium text-zinc-700">
            {palette.likes}
          </span>
        </button>
        <span className="text-[12px] text-zinc-400">{palette.date}</span>
      </div>
    </div>
  );
}
