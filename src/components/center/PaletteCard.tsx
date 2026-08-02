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

  // Local state to trigger the heart pop animation
  const [isHeartPulsing, setIsHeartPulsing] = useState(false);

  const toggleLike = useStore((s) => s.toggleLike);
  const selectPalette = useStore((s) => s.selectPalette);

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(String(color));
    setCopiedHex(color);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  //  Wrapper to handle the pop animation when liking/unliking
  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLike(palette.id);
    setIsHeartPulsing(true);
    setTimeout(() => setIsHeartPulsing(false), 300);
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={() => selectPalette(palette.id)}
    >
      <div className="rounded-[10px] overflow-hidden h-70 flex flex-col mb-3 transition-colors">
        {palette.colors.map((color, i) => (
          <div
            key={i}
            //  First block flex-[2], second block flex-[1.3], remaining flex-1
            className={`${
              i === 0 ? "flex-[2]" : i === 1 ? "flex-[1.3]" : "flex-1"
            } relative`}
            style={{ backgroundColor: color }}
            onMouseEnter={() => setHoveredHex(color)}
            onMouseLeave={() => setHoveredHex(null)}
          >
            {hoveredHex === color && (
              <div
                className="absolute bottom-0 left-0 bg-black/75 backdrop-blur-sm text-white font-medium px-2 py-1 rounded-tr-[5px] text-[10px]  tracking-wide cursor-pointer hover:bg-black flex items-center gap-1.5 transition-colors z-10"
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

      <div className="flex items-center justify-between px-1">
        <button
          // Added press effect via active:scale-95 and transition
          onClick={handleLikeToggle}
          className="flex items-center gap-1.5 px-2 py-[2px] -ml-2 rounded-full  hover:bg-zinc-200 active:scale-98 transition-all duration-100"
        >
          {/*  Pop effect via isHeartPulsing state and transition-transform */}
          <HeartIcon
            filled={palette.isLiked}
            size={15}
            className={`transition-transform duration-200 ease-out ${
              isHeartPulsing ? "scale-125" : ""
            }`}
          />
          <span className="text-[13px] font-medium text-zinc-700">
            {palette.likes}
          </span>
        </button>
        <span className="text-[12px] text-zinc-400">{palette.date}</span>
      </div>
    </div>
  );
}
