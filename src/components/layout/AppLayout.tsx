import { useStore } from "../../store/useStore";
import LeftSidebar from "./LeftSidebar";
import CenterPanel from "./CenterPanel";
import RightSidebar from "./RightSidebar";
import SearchBar from "../center/SearchBar";
import TopLoader from "./TopLoader";
import ThreeDotsMenu from "./ThreeDotsMenu";
import { scrollContainerRef } from "../../hooks/useScrollToTop";

 function AppLayout() {
  const { currentView, setView } = useStore();

  const isCreateView = currentView === "create";
  const isFullScreenView = ["create", "about", "terms", "privacy"].includes(
    currentView,
  );

  return (
    <div className="flex flex-col h-screen bg-[#FAFAF9] text-zinc-900">
      <TopLoader />

      <header className="flex items-center justify-between px-6 h-16 border-b border-zinc-200 flex-shrink-0 sticky top-0 bg-[#FAFAF9]/90 backdrop-blur-sm z-50">
        <div className="flex items-center flex-shrink-0 mr-6 md:mr-10">
          <button
            onClick={() => setView("new")}
            className="flex items-center gap-2.5 group"
          >
            <span className="relative w-6 h-4 flex-shrink-0">
              <span className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#E4572E]" />
              <span className="absolute left-2 top-0 w-4 h-4 rounded-full bg-[#4C86A8] mix-blend-multiply" />
              <span className="absolute left-1 top-0 w-4 h-4 rounded-full bg-[#D4AF37] mix-blend-multiply" />
            </span>
            <span
              className="text-[22px] leading-none tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              <em className="not-italic italic">palettesnap</em>
            </span>
          </button>
        </div>

        <div className="flex-1 max-w-xl hidden md:block">
          {!isFullScreenView && <SearchBar />}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 ml-4">
          <button
            onClick={() => setView("create")}
            className="flex items-center gap-1.5 bg-zinc-900 text-white rounded-full pl-3 pr-4 py-2 text-[13px] font-medium hover:bg-zinc-700 transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            Create
          </button>
          <ThreeDotsMenu />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {!isCreateView && !isFullScreenView && (
          <div className="w-64 flex-shrink-0 border-r border-zinc-200 h-full overflow-y-auto p-4 pt-6 hidden lg:block">
            <LeftSidebar />
          </div>
        )}

        <div
          ref={scrollContainerRef}
          className={`flex-1 h-full overflow-y-auto ${isFullScreenView ? "" : "px-4 md:px-8 py-6"}`}
        >
          <CenterPanel />
        </div>

        {!isCreateView &&
          !isFullScreenView &&
          currentView !== "collection" &&
          currentView !== "creations" && (
            <div className="w-80 flex-shrink-0 border-l border-zinc-200 h-full overflow-y-auto p-6 bg-[#FAFAF9] hidden lg:block">
              <RightSidebar />
            </div>
          )}
      </div>
    </div>
  );
}

export default AppLayout;
