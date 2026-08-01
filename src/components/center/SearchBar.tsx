import { useCallback, useRef, useState } from "react";
import { useStore } from "../../store/useStore";
import { useShallow } from "zustand/react/shallow";
import { COLOR_FILTERS, TAG_FILTERS } from "../../data/filters";
import { TAG_COLORS } from "../../data/tagColors";
import { SearchIcon } from "../ui/Icons";
import { AppState } from "../../store/useStore";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const searchSelector = useCallback(
    (state: AppState) => ({
      setSearchText: state.setSearchText,
      selectedFilters: state.selectedFilters,
      toggleFilter: state.toggleFilter,
    }),
    [],
  );

  const { setSearchText, selectedFilters, toggleFilter } = useStore(
    useShallow(searchSelector),
  );

  const lowerSearch = inputValue.toLowerCase().trim();
  const filteredColors = COLOR_FILTERS.filter((color) =>
    color.label.toLowerCase().includes(lowerSearch),
  );
  const filteredTags = TAG_FILTERS.filter((tag) =>
    tag.label.toLowerCase().includes(lowerSearch),
  );
  const hasMatches = filteredColors.length > 0 || filteredTags.length > 0;

  const handleBlur = (e: React.FocusEvent) => {
    if (
      wrapperRef.current &&
      wrapperRef.current.contains(e.relatedTarget as Node)
    )
      return;
    setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (filteredColors.length === 1) {
        toggleFilter(filteredColors[0]);
        setInputValue("");
        setIsFocused(false);
        return;
      }
      if (filteredTags.length === 1) {
        toggleFilter(filteredTags[0]);
        setInputValue("");
        setIsFocused(false);
        return;
      }
      setInputValue("");
      setSearchText("");
      setIsFocused(false);
    }
  };

  const handlePillClick = (filter: any) => {
    toggleFilter(filter);
    setInputValue("");
    setIsFocused(false);
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div
        className={`flex items-center flex-wrap gap-2 px-3.5 py-1.5 bg-white border rounded-full transition-all min-h-[42px] ${
          isFocused
            ? "border-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            : "border-zinc-200"
        }`}
        onClick={() => setIsFocused(true)}
      >
        <SearchIcon className="text-zinc-400 flex-shrink-0" />

        {selectedFilters.map((filter) => (
          <div
            key={filter.id}
            className="flex items-center gap-1.5 pl-2 pr-1.5 py-1 bg-zinc-100 rounded-full text-[12.5px] font-medium text-zinc-800 flex-shrink-0"
          >
            <div
              className="w-2 h-2 rounded-full border border-black/5 flex-shrink-0"
              style={{
                backgroundColor:
                  filter.colorHex ??
                  TAG_COLORS[filter.label.toLowerCase()] ??
                  "#D4D4D8",
              }}
            />
            <span>{filter.label}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFilter(filter);
              }}
              className="text-zinc-400 hover:text-zinc-700 w-4 h-4 flex items-center justify-center"
            >
              ×
            </button>
          </div>
        ))}

        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsFocused(true);
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          placeholder={
            selectedFilters.length > 0 ? "Add tag" : "Search palettes"
          }
          className="flex-1 outline-none bg-transparent min-w-[80px] text-[13.5px] placeholder-zinc-400"
        />

        {(inputValue || selectedFilters.length > 0) && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setInputValue("");
              setSearchText("");
            }}
            className="text-zinc-400 hover:text-zinc-700 flex-shrink-0 w-4 h-4 flex items-center justify-center"
          >
            ×
          </button>
        )}
      </div>

      {isFocused && (inputValue === "" ? true : hasMatches) && (
        <div
          className="absolute left-0 top-full mt-2 w-full bg-white border border-zinc-200 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] z-50 p-4 max-h-[60vh] overflow-y-auto"
          onMouseDown={(e) => e.preventDefault()}
        >
          {filteredColors.length > 0 && (
            <div className="mb-4">
              <p className="text-[10.5px] font-medium tracking-[0.08em] text-zinc-400 uppercase mb-2.5">
                Colors
              </p>
              <div className="flex flex-wrap gap-1.5">
                {filteredColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => handlePillClick(color)}
                    className={`flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 text-[12px] rounded-full border transition-colors ${
                      selectedFilters.some((f) => f.id === color.id)
                        ? "border-zinc-900 bg-zinc-50"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full border border-black/5"
                      style={{ backgroundColor: color.colorHex }}
                    />
                    {color.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredTags.length > 0 && (
            <div>
              <p className="text-[10.5px] font-medium tracking-[0.08em] text-zinc-400 uppercase mb-2.5">
                Collections
              </p>
              <div className="flex flex-wrap gap-1.5">
                {filteredTags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => handlePillClick(tag)}
                    className={`flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 text-[12px] rounded-full border transition-colors ${
                      selectedFilters.some((f) => f.id === tag.id)
                        ? "border-zinc-900 bg-zinc-50"
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full border border-black/5"
                      style={{
                        backgroundColor:
                          TAG_COLORS[tag.label.toLowerCase()] ?? "#D4D4D8",
                      }}
                    />
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
