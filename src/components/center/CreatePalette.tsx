import { useState, useRef } from "react";
import { useStore } from "../../store/useStore";
import { Button } from "../ui/Button";
import { FilterItem } from "../../store/useStore";
import { COLOR_FILTERS, TAG_FILTERS } from "../../data/filters";
import { TAG_COLORS } from "../../data/tagColors";
import { generateId } from "../../utils/idGenerator";

export default function CreatePalette() {
  const [colors, setColors] = useState([
    "#B0B0B0",
    "#C0C0C0",
    "#D0D0D0",
    "#E0E0E0",
  ]);
  const [selectedTags, setSelectedTags] = useState<FilterItem[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");

  const { addPalette, setView } = useStore();

  const lowerSearch = inputValue.toLowerCase().trim();
  const filteredColors = COLOR_FILTERS.filter((c) =>
    c.label.toLowerCase().includes(lowerSearch),
  );
  const filteredTags = TAG_FILTERS.filter((t) =>
    t.label.toLowerCase().includes(lowerSearch),
  );
  const hasMatches = filteredColors.length > 0 || filteredTags.length > 0;

  const handleSave = () => {
    const tagLabels = selectedTags.map((tag) => tag.label.toLowerCase());
    const newPalette = {
      id: generateId(),
      colors,
      likes: 0,
      isLiked: false,
      tags: tagLabels,
      date: "Just now",
    };
    addPalette(newPalette);
    setView("new");
  };

  const updateColor = (index: number, newColor: string) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  const toggleTag = (tag: FilterItem) => {
    setSelectedTags((prev) => {
      const exists = prev.some((t) => t.id === tag.id);
      if (exists) return prev.filter((t) => t.id !== tag.id);
      return [...prev, tag];
    });
  };

  const clearAllTags = () => setSelectedTags([]);

  const handleBlur = (e: React.FocusEvent) => {
    if (
      inputWrapperRef.current &&
      inputWrapperRef.current.contains(e.relatedTarget as Node)
    )
      return;
    setIsDropdownOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (filteredColors.length === 1) {
        toggleTag(filteredColors[0]);
        setInputValue("");
        setIsDropdownOpen(false);
        return;
      }
      if (filteredTags.length === 1) {
        toggleTag(filteredTags[0]);
        setInputValue("");
        setIsDropdownOpen(false);
        return;
      }
      setInputValue("");
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 max-w-3xl mx-auto w-full">
      <h1
        className="text-[32px] mb-1.5 text-zinc-900"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        <em className="not-italic italic">New palette</em>
      </h1>
      <p className="text-zinc-500 mb-8 text-[13.5px]">
        Pick four colors and publish for everyone to discover
      </p>

      <div className="w-full h-[450px] rounded-xl overflow-hidden flex flex-col border border-zinc-200 mb-6">
        {colors.map((color, idx) => (
          <div key={idx} className="flex-1 relative group">
            <div className="w-full h-full" style={{ backgroundColor: color }} />
            <input
              type="color"
              value={color}
              onChange={(e) => updateColor(idx, e.target.value)}
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 cursor-pointer w-10 h-10 rounded-full border-2 border-white shadow-md transition-opacity"
            />
          </div>
        ))}
      </div>

      <div className="w-full max-w-lg relative" ref={inputWrapperRef}>
        <div
          className={`flex items-center flex-wrap gap-2 px-3.5 py-1.5 bg-white border rounded-full transition-all min-h-[44px] cursor-text ${
            isDropdownOpen
              ? "border-zinc-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              : "border-zinc-200"
          }`}
          onClick={() => setIsDropdownOpen(true)}
        >
          {selectedTags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-1.5 pl-2 pr-1.5 py-1 bg-zinc-100 rounded-full text-[12.5px] font-medium text-zinc-800"
            >
              <div
                className="w-2 h-2 rounded-full border border-black/5 flex-shrink-0"
                style={{
                  backgroundColor:
                    tag.colorHex ??
                    TAG_COLORS[tag.label.toLowerCase()] ??
                    "#D4D4D8",
                }}
              />
              <span>{tag.label}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTag(tag);
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
              setIsDropdownOpen(true);
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={handleBlur}
            placeholder={selectedTags.length > 0 ? "Add tag" : "Add tags"}
            className="flex-1 outline-none bg-transparent min-w-[80px] text-[13.5px] placeholder-zinc-400"
          />

          {(inputValue || selectedTags.length > 0) && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setInputValue("");
                clearAllTags();
              }}
              className="text-zinc-400 hover:text-zinc-700 w-4 h-4 flex items-center justify-center"
            >
              ×
            </button>
          )}
        </div>

        {isDropdownOpen && (inputValue === "" ? true : hasMatches) && (
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
                      onClick={() => {
                        toggleTag(color);
                        setInputValue("");
                        setIsDropdownOpen(false);
                      }}
                      className={`flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 text-[12px] rounded-full border transition-colors ${
                        selectedTags.some((t) => t.id === color.id)
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
                      onClick={() => {
                        toggleTag(tag);
                        setInputValue("");
                        setIsDropdownOpen(false);
                      }}
                      className={`flex items-center gap-1.5 pl-2 pr-2.5 py-1.5 text-[12px] rounded-full border transition-colors ${
                        selectedTags.some((t) => t.id === tag.id)
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

      <div className="w-full max-w-lg mt-6 flex justify-end gap-2.5">
        <Button variant="outline" onClick={() => setView("new")}>
          Cancel
        </Button>
        <Button onClick={handleSave}>Publish palette</Button>
      </div>
    </div>
  );
}
