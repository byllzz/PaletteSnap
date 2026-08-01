import { useState, useRef, useEffect } from "react";
import { useStore } from "../../store/useStore";
import { ThreeDotsIcon } from "../ui/Icons";

const INSTAGRAM_URL = "https://instagram.com/palettesnap"; //

export default function ThreeDotsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { setView, currentView } = useStore();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNav = (view: any) => {
    setView(view);
    setIsOpen(false);
  };

  const itemClass = (isActive: boolean) =>
    `block w-full text-left px-3 py-2 rounded-md text-[13.5px] transition-colors ${
      isActive ? "bg-zinc-100 text-zinc-900 font-medium" : "text-zinc-600 hover:bg-zinc-50"
    }`;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full transition-colors ${isOpen ? "bg-zinc-100" : "hover:bg-zinc-100"}`}
      >
        <ThreeDotsIcon />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-52 bg-white border border-zinc-200 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-50 p-1.5 text-sm">
          <div className="flex flex-col gap-0.5 mb-1">
            <button onClick={() => handleNav("new")} className={itemClass(currentView === "new")}>
              Palettes
            </button>
            <button onClick={() => handleNav("create")} className={itemClass(currentView === "create")}>
              Create
            </button>
            <button onClick={() => handleNav("collection")} className={itemClass(currentView === "collection")}>
              Collection
            </button>
          </div>

          <hr className="border-zinc-100 my-1" />

          <div className="flex flex-col gap-0.5 my-1">
            <button onClick={() => handleNav("about")} className={itemClass(currentView === "about")}>
              About
            </button>
            {/* Instagram  */}
             <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-2 rounded-md text-[13.5px] text-zinc-600 hover:bg-zinc-50 transition-colors"
            >
              Instagram
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
              </svg>
            </a>
          </div>

          <hr className="border-zinc-100 my-1" />

          <div className="flex flex-col gap-0.5 mt-1">
            <button onClick={() => handleNav("terms")} className={itemClass(currentView === "terms")}>
              Terms of service
            </button>
            <button onClick={() => handleNav("privacy")} className={itemClass(currentView === "privacy")}>
              Privacy policy
            </button>
          </div>

          <hr className="border-zinc-100 my-1.5" />

          <div className="px-3 py-1.5">
            <span className="text-[11px] text-zinc-400">Made by Bilal</span>
          </div>
        </div>
      )}
    </div>
  );
}
