import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="preloader"
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
        >
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <div className="relative flex flex-col items-center">
            <div className="relative">
              {/* Background Layer  */}
              <h1 className="text-[12vw] font-fair italic text-zinc-100 uppercase leading-none tracking-tighter select-none">
                PaletteSnap
              </h1>

              {/* Foreground Fill Layer */}
              <motion.h1
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: `inset(${100 - count}% 0 0 0)` }}
                transition={{ ease: 'linear', duration: 0.1 }}
                className="absolute inset-0 text-[12vw] font-fair italic text-black uppercase leading-none tracking-tighter select-none"
              >
                PaletteSnap
              </motion.h1>
            </div>

            {/* Archive Subtitle */}
            <div className="absolute -bottom-10 overflow-hidden">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: count > 20 ? 1 : 0 }}
                className="text-[10px] tracking-[0.1em] font-medium uppercase text-zinc-600 whitespace-nowrap"
              >
                Wada Sanzō Archive
              </motion.p>
            </div>
          </div>

          {/* Bottom Progress Indicator */}
          <div className="absolute bottom-12 flex flex-col items-center gap-3">
            <div className="w-48 h-[1px] bg-zinc-100 relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-black"
                animate={{ width: `${count}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <span className="text-[9px] font-outfit text-zinc-400 uppercase tracking-[0.3em]">
              Loading Index {count}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
