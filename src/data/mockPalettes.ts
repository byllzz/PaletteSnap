import { Palette } from "../store/useStore";
import { generateId } from "../utils/idGenerator";
import { COLORS } from "./colors";

const SIDEBAR_TAGS = [
  "pastel",
  "vintage",
  "retro",
  "neon",
  "gold",
  "light",
  "dark",
  "warm",
  "cold",
  "summer",
  "fall",
  "winter",
  "spring",
  "happy",
];

const FALLBACK_PADDING = "#E0E0E0";

// Enforce exactly 4 color blocks
const padColors = (colors: string[]): string[] => {
  const padded = [...colors];
  while (padded.length < 4) {
    padded.push(FALLBACK_PADDING);
  }
  return padded.slice(0, 4);
};

const getRandomLikes = () => Math.floor(Math.random() * 400) + 10;
const getRandomDate = () => {
  const now = new Date();
  const randomDays = Math.floor(Math.random() * 30);
  const d = new Date(now);
  d.setDate(d.getDate() - randomDays);
  if (randomDays === 0) return "Just now";
  if (randomDays === 1) return "Yesterday";
  return `${randomDays} days ago`;
};

//  Uses index math so the 50 palettes NEVER shuffle on reload.
export const MOCK_PALETTES: Palette[] = (() => {
  const palettes: Palette[] = [];
  const colorPool = COLORS.filter((c) => c.hex !== "#FFFFFF");

  // Helper to pick a color deterministically using a numeric seed
  const getColor = (index: number, offset: number) => {
    return colorPool[(index * 17 + offset * 7) % colorPool.length];
  };

  // Generate 50 fixed palettes
  for (let i = 0; i < 50; i++) {
    let pickedColors;

    // 0-14: Duos (30%)
    if (i < 15) {
      pickedColors = [getColor(i, 1), getColor(i, 2)];
    }
    // 15-29: Triads (30%)
    else if (i < 30) {
      pickedColors = [getColor(i, 1), getColor(i, 3), getColor(i, 5)];
    }
    // 30-49: Tetrads (40%)
    else {
      pickedColors = [
        getColor(i, 1),
        getColor(i, 4),
        getColor(i, 7),
        getColor(i, 9),
      ];
    }

    // Sidebar Tags (always 1 or 2 specific tags based on index)
    const tag1Idx = (i * 5) % SIDEBAR_TAGS.length;
    const tag2Idx = (tag1Idx + 4) % SIDEBAR_TAGS.length;
    const styleTags =
      i % 3 === 0
        ? [SIDEBAR_TAGS[tag1Idx], SIDEBAR_TAGS[tag2Idx]]
        : [SIDEBAR_TAGS[tag1Idx]];

    const hexColors = pickedColors.map((c) => c.hex);
    const categoryTags = pickedColors.map((c) => c.category.toLowerCase());
    const combinedTags = Array.from(new Set([...categoryTags, ...styleTags]));

    palettes.push({
      id: generateId(),
      colors: padColors(hexColors),
      likes: getRandomLikes(),
      isLiked: false,
      tags: combinedTags,
      date: getRandomDate(),
    });
  }

  return palettes;
})(); // Immediately invoked to generate a fixed, static array
