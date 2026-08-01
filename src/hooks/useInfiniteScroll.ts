import { useEffect, useRef, } from "react";

export function useInfiniteScroll(callback: () => void) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [callback]);

  return loaderRef;
}
