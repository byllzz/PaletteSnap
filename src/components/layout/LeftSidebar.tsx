import { useStore } from "../../store/useStore";
import { TAG_COLORS } from "../../data/tagColors";

const TAGS = [
  "Pastel",
  "Vintage",
  "Retro",
  "Neon",
  "Gold",
  "Light",
  "Dark",
  "Warm",
  "Cold",
  "Summer",
  "Fall",
  "Winter",
  "Spring",
  "Happy",
];

const NAV_ICONS: Record<string, JSX.Element> = {
  new: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
    </svg>
  ),
  popular: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21c-4.4 0-7-2.7-7-6.6C5 10.5 8 7.8 8.6 4c1.4 1.9 2 3.5 1.9 5 1-.9 1.4-2.6 1.3-3.8 3 2 4.2 4.6 4.2 7.2 0 3.9-2.6 6.6-4 8.6Z" />
    </svg>
  ),
  random: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h3.6a3 3 0 0 1 2.5 1.4L15 15a3 3 0 0 0 2.5 1.4H20M4 16h3.6a3 3 0 0 0 2.5-1.4l.6-1M20 4h-2.9a3 3 0 0 0-2.5 1.4l-.6 1M17 3l3 1-3 1M17 19l3 1-3 1" />
    </svg>
  ),
  collection: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12v18l-6-4-6 4V3Z" />
    </svg>
  ),
  creations: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" />
    </svg>
  ),
};

export default function LeftSidebar() {
  const { currentView, setView, activeTags, setActiveTags, palettes } =
    useStore();

  const hasUserCreated = palettes.some((p) => p.isUserCreated === true);

  const handleTagClick = (tag: string) => {
    const isActive = activeTags.some(
      (t) => t.toLowerCase() === tag.toLowerCase(),
    );
    setActiveTags(isActive ? [] : [tag]);
  };

  const navItem = (key: string, label: string, view: string) => {
    const isActive = currentView === view;
    return (
      <button
        key={key}
        onClick={() => setView(view as any)}
        className={`group flex items-center gap-3 pl-3 pr-3 py-2 rounded-md text-left w-full text-[13.5px] transition-colors relative ${
          isActive
            ? "text-zinc-900 font-medium bg-zinc-100"
            : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50"
        }`}
      >
        <span
          className={
            isActive
              ? "text-zinc-900"
              : "text-zinc-400 group-hover:text-zinc-600"
          }
        >
          {NAV_ICONS[key]}
        </span>
        {label}
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Browse */}
      <div className="flex flex-col gap-0.5">
        <p className="px-3 mb-2 text-[10.5px] font-medium tracking-[0.08em] text-zinc-400 uppercase">
          Browse
        </p>
        {navItem("new", "New", "new")}
        {navItem("popular", "Popular", "popular")}
        {navItem("random", "Random", "random")}
        {navItem("collection", "Collection", "collection")}
        {hasUserCreated && navItem("creations", "My Creations", "creations")}
      </div>

      {/* Colors / tags — the one place color enters the chrome */}
      <div className="flex flex-col gap-0.5">
        <p className="px-3 mb-2 text-[10.5px] font-medium tracking-[0.08em] text-zinc-400 uppercase">
          Colors
        </p>
        {TAGS.map((tag) => {
          const isSelected = activeTags.some(
            (t) => t.toLowerCase() === tag.toLowerCase(),
          );
          const dot = TAG_COLORS[tag.toLowerCase()] ?? "#D4D4D8";
          return (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="relative flex items-center gap-3 pl-3 pr-3 py-1.5 text-left text-[13.5px] rounded-md transition-colors"
              style={{
                backgroundColor: isSelected
                  ? "rgba(24,24,27,0.045)"
                  : "transparent",
                color: isSelected ? "#18181B" : "#71717A",
                fontWeight: isSelected ? 500 : 400,
              }}
            >
              {isSelected && (
                <span
                  className="absolute left-0 top-1.5 bottom-1.5 w-[2.5px] rounded-full"
                  style={{ backgroundColor: dot }}
                />
              )}
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 border border-black/5"
                style={{ backgroundColor: dot }}
              />
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
