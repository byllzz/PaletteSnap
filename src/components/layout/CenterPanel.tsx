import { useStore } from "../../store/useStore";
import PaletteGrid from "../center/PaletteGrid";
import PaletteDetail from "../center/PaletteDetail";
import CreatePalette from "../center/CreatePalette";
import About from "../static/About";
import TermsOfService from "../static/TermsOfService";
import PrivacyPolicy from "../static/PrivacyPolicy";
import NotFound from "../static/NotFound";

const VIEW_TITLES: Record<string, string> = {
  new: "New palettes",
  popular: "Popular palettes",
  random: "Random palettes",
  collection: "My collection",
  creations: "My creations",
  tagged: "Filtered palettes",
};

export default function CenterPanel() {
  const { currentView, selectedPaletteId, isHydrated, likedPaletteIds } =
    useStore();

  if (!isHydrated) {
    return (
      <div className="flex-1 flex justify-center items-center h-full">
        <div className="w-8 h-8 border-2 border-zinc-200 border-t-zinc-800 rounded-full animate-spin" />
      </div>
    );
  }

  const isCreateView = currentView === "create";

  return (
    <div
      className={
        isCreateView
          ? "w-full h-full flex flex-col justify-center items-center"
          : "max-w-6xl mx-auto"
      }
    >
      {currentView === "detail" && selectedPaletteId && (
        <PaletteDetail id={selectedPaletteId} />
      )}
      {isCreateView && <CreatePalette />}
      {currentView === "about" && <About />}
      {currentView === "terms" && <TermsOfService />}
      {currentView === "privacy" && <PrivacyPolicy />}
      {currentView === "notFound" && <NotFound />}
      {[
        "new",
        "popular",
        "random",
        "collection",
        "tagged",
        "creations",
      ].includes(currentView) && (
        <div className="mt-2">
          {/* Collection Tab (With Divider and Count) */}
          {currentView === "collection" && (
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 hidden md:flex">
              <h1 className="text-[16px] text-zinc-900">
                <em className="not-italic italic">My collection</em>
              </h1>
              <span className="text-zinc-500 text-[13px]">
                {likedPaletteIds.size} palette
                {likedPaletteIds.size !== 1 ? "s" : ""}
              </span>
            </div>
          )}

          <PaletteGrid />
        </div>
      )}
    </div>
  );
}
