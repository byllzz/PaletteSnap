import { useCallback, useState } from "react";
import { useStore, AppState } from "../../store/useStore";
import { useShallow } from "zustand/react/shallow";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import PaletteCard from "./PaletteCard";
import { motion } from "framer-motion";

export default function PaletteGrid() {
  const getPalettes = useCallback(
    (state: AppState) => state.getCurrentPalettes(),
    [],
  );
  const palettes = useStore(useShallow(getPalettes));

  const [displayCount, setDisplayCount] = useState(12);
  const loadMore = () => setDisplayCount((prev) => prev + 8);
  const loaderRef = useInfiniteScroll(loadMore);

  if (palettes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-zinc-400 text-[13.5px]">
          No palettes match this filter yet.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
    >
      {palettes.slice(0, displayCount).map((palette) => (
        <motion.div
          key={palette.id}
          variants={{
            hidden: { opacity: 0, y: 14 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <PaletteCard palette={palette} />
        </motion.div>
      ))}

      {displayCount < palettes.length && (
        <div
          ref={loaderRef}
          className="col-span-full h-10 flex justify-center items-center"
        >
          <div className="w-4 h-4 border-2 border-zinc-200 border-t-zinc-500 rounded-full animate-spin" />
        </div>
      )}
    </motion.div>
  );
}
