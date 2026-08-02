import { useStore } from "../../store/useStore";

export default function NotFound() {
  const setView = useStore((s) => s.setView);

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center max-w-md mx-auto">
      <div className="w-32 h-20 rounded-xl overflow-hidden flex border border-zinc-200 mb-8">
        <div className="flex-1" style={{ backgroundColor: "#E4E4E7" }} />
        <div className="flex-1" style={{ backgroundColor: "#D4D4D8" }} />
        <div className="flex-1" style={{ backgroundColor: "#A1A1AA" }} />
        <div className="flex-1" style={{ backgroundColor: "#71717A" }} />
      </div>

      <h1
        className="text-[40px] leading-none mb-3 text-zinc-900"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        <em className="not-italic italic">Page not found</em>
      </h1>
      <p className="text-zinc-500 text-[14px] mb-8 leading-relaxed">
        The palette or page you're looking for doesn't exist, or may have been
        removed.
      </p>

      <button
        onClick={() => setView("new")}
        className="flex items-center gap-1.5 bg-zinc-900 text-white rounded-full pl-4 pr-5 py-2.5 text-[13px] font-medium hover:bg-zinc-700 transition-colors"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to palettes
      </button>
    </div>
  );
}
