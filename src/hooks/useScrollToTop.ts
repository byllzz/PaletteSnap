import { createRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const scrollContainerRef = createRef<HTMLDivElement>();

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the real scrollable pane
    scrollContainerRef.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
    // Fallback in case the ref isn't attached yet 
    window.scrollTo(0, 0);
  }, [pathname]);
};
