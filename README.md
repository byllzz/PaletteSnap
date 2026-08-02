![PaletteSnap Preview](./src/assets/preview.png)

<h1 align="center">PaletteSnap</h1>

<p align="center"> A fast, no-login color palette discovery tool - browse, search, like, and publish four-color palettes with zero signup friction. </p>

<p align="center">
<img src="https://img.shields.io/badge/Status-Complete-9B72FF?style=flat" />
<img src="https://img.shields.io/badge/Built%20with-React%20%2B%20Vite-9B72FF?style=flat" />
<img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-9B72FF?style=flat" />
<img src="https://img.shields.io/badge/Language-TypeScript-9B72FF?style=flat&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Backend-Supabase-9B72FF?style=flat&logo=supabase&logoColor=white" />
<img src="https://img.shields.io/badge/License-MIT-9B72FF?style=flat" />
<img src="https://img.shields.io/badge/Deployed%20on-Vercel-9B72FF?style=flat&logo=vercel&logoColor=white" />
<img src="https://img.shields.io/badge/State-Zustand-9B72FF?style=flat" />
</p>

<p align="center">
  <a href="https://palettesnap.vercel.app/"><b style="color:#9B72FF">Live Demo</b></a> &nbsp;•&nbsp;
  <a href="https://github.com/byllzz/palettesnap/issues/new?labels=bug&template=bug-report---.md"><b style="color:#9B72FF">Report Bug</b></a> &nbsp;•&nbsp;
  <a href="https://github.com/byllzz/palettesnap/issues/new?labels=enhancement&template=feature-request---.md"><b style="color:#9B72FF">Request Feature</b></a>
</p>

<br>

# About PaletteSnap

Welcome to **PaletteSnap** - a modern, open-source color palette tool built to make discovering, saving, and publishing four-color palettes effortless in your browser.

Unlike sign-up-gated palette tools, PaletteSnap requires **no account at all**. Likes and collections are tied to your browser through an anonymous device identity, and anyone can publish a palette that instantly goes live for every visitor to discover - no approval queue, no friction.

## Why PaletteSnap?

| Feature | Highlights |
|---------|------------|
| **Browse Modes** | **New** • **Popular** • **Random** • **Tagged** • **My Creations** • **Collection** |
| **Discovery** | Sidebar tag filters (color-coded dots) • Multi-tag/color search bar with live dropdown |
| **Palette Detail** | Hex & RGB values • Click-to-copy • Related palettes by shared tag |
| **Publishing** | Pick 4 colors • Add tags • Publish instantly - visible to every visitor, no account needed |
| **Anonymous Identity** | Device-based likes and collections via `localStorage` - no email, no password |
| **Export** | Download any palette as **SVG**, **PNG**, or **JPEG** |
| **Persistent Data** | Palettes and likes stored in Supabase (Postgres) - global, not per-browser |
| **Responsive** | Mobile drawer for filters, collapsible search bar, icon-only header actions |

# PaletteSnap Features

## Complete Feature List

| # | Feature | Description |
|---|---------|-------------|
| 01 | **New / Popular / Random Feeds** | Three primary ways to browse the full palette catalog |
| 02 | **Sidebar Tag Filters** | Single-select tag browsing with a color-coded swatch per tag |
| 03 | **Multi-Tag Search** | Search bar supports combining multiple color/tag filters at once |
| 04 | **Palette Detail Page** | Full-size color blocks, hex/RGB display, click-to-copy |
| 05 | **Related Palettes** | Surfaces other palettes sharing a tag with the one you're viewing |
| 06 | **Create & Publish** | Pick 4 colors via color picker, tag them, publish - no login |
| 07 | **My Creations** | Personal view of every palette you've published from this device |
| 08 | **Anonymous Likes** | Device-scoped like/collection system, no account required |
| 09 | **Live Like Counts** | Likes are global and update in real time via Supabase |
| 10 | **Export Palette** | Download as SVG, PNG, or JPEG in one click |
| 11 | **URL-Synced State** | Every view, tag, filter, and search term is reflected in a shareable URL |
| 12 | **Responsive Layout** | Mobile drawer for filters, collapsible search, icon-only actions below breakpoint |
| 13 | **Offline Fallback** | Falls back to a static palette set if Supabase is unreachable |
| 14 | **Loading Sequencing** | Token-based loader ensures the UI never updates mid-animation |
| 15 | **Optimistic Likes** | Like state updates instantly in the UI, then syncs to the database |
| 16 | **Infinite Scroll** | Palette grid loads more results as you scroll instead of paginating |
| 17 | **Copy-to-Clipboard** | Click any hex swatch to copy it directly |
| 18 | **About / Terms / Privacy Pages** | Full static info pages built into the app |

# Usage

| Feature | Details |
|---------|---------|
| **Browsing** | New • Popular • Random • Tagged • Collection • My Creations |
| **Filtering** | Sidebar: single tag at a time • Search bar: combine multiple colors/tags |
| **Palette Detail** | Hex codes • RGB values • Click any swatch to copy • Related palettes by tag |
| **Creating** | Pick 4 colors • Add tags • Publish instantly, no approval needed |
| **Liking** | Tap the heart - saved to your device's Collection, live count updates for everyone |
| **Exporting** | SVG • PNG • JPEG downloads from the detail view |
| **Sharing** | Every view/filter/palette has its own shareable URL |
| **Mobile** | Tap the filter icon for a slide-in tag drawer • Tap search icon to expand search inline |

# Architecture & Folder Structure

```
palettesnap/
├── public/                          # Static assets served as-is
├── src/
│   ├── assets/
│   │   └── preview.png              # README preview screenshot
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.tsx        # Header, sidebars, mobile drawer/search shell
│   │   │   ├── LeftSidebar.tsx      # Browse nav + single-select tag filters
│   │   │   ├── RightSidebar.tsx     # Collection preview panel
│   │   │   ├── CenterPanel.tsx      # View router (grid / detail / create / static pages)
│   │   │   ├── TopLoader.tsx        # Thin loading bar tied to store's isLoading
│   │   │   └── ThreeDotsMenu.tsx    # Overflow nav menu (About, GitHub, Terms, Privacy)
│   │   │
│   │   ├── center/
│   │   │   ├── SearchBar.tsx        # Multi-tag/color search with live dropdown
│   │   │   ├── PaletteGrid.tsx      # Infinite-scroll grid + empty states
│   │   │   ├── PaletteCard.tsx      # Grid item - hover-to-copy, like button
│   │   │   ├── PaletteDetail.tsx    # Full palette view + related palettes
│   │   │   └── CreatePalette.tsx    # Publish flow - pick colors, tag, submit
│   │   │
│   │   ├── modals/
│   │   │   └── ExportModal.tsx      # SVG / PNG / JPEG export
│   │   │
│   │   ├── static/
│   │   │   ├── About.tsx
│   │   │   ├── TermsOfService.tsx
│   │   │   └── PrivacyPolicy.tsx
│   │   │
│   │   └── ui/
│   │       ├── Icons.tsx            # Shared inline SVG icon set
│   │       └── Button.tsx           # Shared button component
│   │
│   ├── data/
│   │   ├── colors.ts                # Base color pool + categories
│   │   ├── mockPalettes.ts          # Deterministic 50-palette generator (seed source + offline fallback)
│   │   ├── filters.ts               # COLOR_FILTERS / TAG_FILTERS definitions
│   │   └── tagColors.ts             # Tag → swatch hex map (used for dots everywhere)
│   │
│   ├── hooks/
│   │   ├── useSyncWithURL.ts        # Two-way sync between store state and the URL
│   │   ├── useScrollToTop.ts        # Scrolls the actual scrollable pane on route change
│   │   └── useInfiniteScroll.ts     # IntersectionObserver-based "load more"
│   │
│   ├── lib/
│   │   └── supabase.ts              # Supabase client (publishable key only)
│   │
│   ├── store/
│   │   └── useStore.ts              # Zustand store - single source of app state
│   │
│   ├── types/
│   │   └── palette.ts               # Palette type definition
│   │
│   ├── utils/
│   │   ├── idGenerator.ts           # crypto.randomUUID-based ID generation
│   │   ├── colorHelpers.ts          # hex → RGB conversion
│   │   └── deviceId.ts              # Anonymous per-device ID (localStorage)
│   │
│   ├── App.tsx                      # Router + fetchPalettes bootstrap
│   ├── main.tsx                     # React root entry point
│   └── index.css                    # Tailwind import, fonts, global resets
│
├── .env                             # VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY (git-ignored)
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

| File | Description |
|------|-------------|
| `index.html` | Main entry point |
| `src/` | Application source code |
| `src/components/layout/` | Header, sidebars, center panel router, mobile drawer |
| `src/components/center/` | Search bar, palette grid, palette card, detail view, create flow |
| `src/components/modals/` | Export modal |
| `src/components/static/` | About, Terms, Privacy pages |
| `src/components/ui/` | Shared icons and buttons |
| `src/data/` | Color pool, mock palette generator, filter/tag definitions |
| `src/hooks/` | URL sync, scroll-to-top, infinite scroll |
| `src/lib/` | Supabase client |
| `src/store/` | Zustand store - single source of app state |
| `src/utils/` | ID generation, color helpers, anonymous device ID |
| `public/` | Static assets |
| `package.json` | Dependencies and scripts |

# Built With

<details open>
<summary><strong> PaletteSnap is built using the following technologies</strong></summary>

- **React** - UI library
- **TypeScript** - Type safety across the app
- **Vite** - Fast development & build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Framer Motion** - Grid entrance animations
- **Supabase** - Postgres backend, no-auth public data layer
- **Lucide React** - Modern icon library

</details>

<p align="left">
  <img src="https://skillicons.dev/icons?i=react,vite,tailwind,ts,supabase,git" />
<img src="https://go-skill-icons.vercel.app/api/icons?i=reactrouter" height="48" />
</p>

# Getting Started

## Requirements

- npm or Yarn
- A free [Supabase](https://supabase.com) project
- Modern browser (Chrome, Firefox, Edge, Safari)

## Installation

```bash
# Clone repository
git clone https://github.com/byllzz/palettesnap.git

# Enter directory
cd palettesnap

# Install dependencies
npm install

# Start development server
npm run dev
```

App runs at `http://localhost:5173` by default.

## Environment Variables

Create a `.env` file in the project root:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-publishable-key
```

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase **publishable** (anon) key - safe for the frontend |

> Use the **publishable** key (Supabase's newer name for the `anon` key) - never the secret key - in frontend code. Add the same two variables in your Vercel project's **Settings → Environment Variables** before deploying, then redeploy.

## Supabase Setup

<details open>
<summary><strong>Click to expand full SQL setup</strong></summary>

```sql
-- 1. Create tables
create table palettes (
  id text primary key,
  colors jsonb not null,
  tags text[] not null default '{}',
  likes int not null default 0,
  is_user_created boolean not null default false,
  created_at timestamptz not null default now()
);

create table likes (
  device_id text not null,
  palette_id text not null references palettes(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (device_id, palette_id)
);

-- 2. Enable public access (no auth in this app)
alter table palettes enable row level security;
alter table likes enable row level security;

create policy "public read palettes" on palettes for select using (true);
create policy "public insert palettes" on palettes for insert with check (true);
create policy "public update palette likes" on palettes for update using (true);

create policy "public read likes" on likes for select using (true);
create policy "public insert likes" on likes for insert with check (true);
create policy "public delete own likes" on likes for delete using (true);

-- 3. Grant table privileges (required in addition to RLS policies)
grant usage on schema public to anon, authenticated;
grant select, insert, update on public.palettes to anon, authenticated;
grant select, insert, delete on public.likes to anon, authenticated;
```

**Seeding starter palettes (optional):** the app falls back to an empty grid if the `palettes` table has no rows. To seed it, export `MOCK_PALETTES` as JSON from the running app and bulk-insert it via the Supabase JS client using your **secret** key in a one-off Node script (never in frontend code). See `src/data/mockPalettes.ts` for the generator.

</details>

## Available Scripts

```bash
npm run dev       # Start local dev server
npm run build      # Type-check and build for production
npm run preview     # Preview the production build locally
npm run lint       # Run ESLint
```

# Architecture Notes

<details>
<summary><strong>Click to expand implementation details</strong></summary>

**State management** - All app state (current view, active tags, search text, selected filters, palettes, likes, loading) lives in a single Zustand store (`useStore.ts`). Components read from it via selectors; there's no prop drilling.

**URL as source of truth for navigation** - `useSyncWithURL` keeps the store and the browser URL in sync in both directions. URL → store sync uses a dedicated `_syncActiveTagsFromURL` action that updates tags *without* forcing a view change, since the view is already derived independently from the actual path segments in the same pass - this avoids a stale-tag mismatch clobbering an unrelated navigation (e.g. opening a palette detail page from a tagged view).

**Anonymous identity** - There are no user accounts. A random device ID is generated once via `crypto.randomUUID()` and persisted in `localStorage` (`utils/deviceId.ts`). Likes are stored server-side keyed by this ID, so they're global (visible to everyone) but only editable/visible-as-liked from the browser that made them.

**Optimistic updates** - Liking a palette updates local state immediately, then syncs to Supabase in the background. If you're offline or Supabase is unreachable, `fetchPalettes` falls back to the static `MOCK_PALETTES` array so the app never shows a fully broken/empty state.

**Loading sequencing** - All state-changing store actions route through a shared `withLoader` helper that uses a monotonically increasing token, so only the most recently dispatched action can clear the loading flag. The actual data mutation is deferred until the loader animation completes, so the UI never updates mid-animation.

**Design system** - Neutral ink-on-white UI (`zinc` palette) with `Instrument Serif` italics reserved for headings/wordmark and `Inter` for everything else. Color is intentionally kept out of the chrome except for small swatch dots next to tags (`data/tagColors.ts`) - the palettes themselves are the visual focus.

</details>

# Known Limitations

- No way for a user to delete or edit a palette they've published
- No moderation or rate-limiting on palette creation - anyone can publish unlimited palettes
- Likes/collections are lost if a user clears their browser's site data (by design - no accounts)
- No image/OG preview generation for shared palette links yet

# Roadmap

- [ ] Rate-limit palette creation per device
- [ ] Basic reporting/moderation flow
- [ ] OG image generation for palette detail links
- [ ] Optional real accounts (email/OAuth) for cross-device collections

# Show Your Support

If you like PaletteSnap:

- Star the repository
- Fork the project
- Report issues
- Suggest improvements
- Contribute

Every contribution helps make PaletteSnap better.

# Contributors

A huge thank you to everyone who has contributed to PaletteSnap!

<a href="https://github.com/byllzz/palettesnap/graphs/contributors">
  <img
    src="https://contrib.rocks/image?repo=byllzz/palettesnap"
    alt="Project Contributors"
  />
</a>

<p align="right">
<a href="#palettesnap">⬆ Back to Top</a>
</p>

## Author

<img src="https://github.com/byllzz.png" width="80" height="80" alt="Bilal Malik Profile" />

### Bilal Malik (byllzz)
<p align="left">

[![GitHub](https://img.shields.io/badge/GitHub-byllzz-9B72FF?style=flat&logo=github&logoColor=white)](https://github.com/byllzz)
[![X](https://img.shields.io/badge/Tweet-@bilalmlkdev-9B72FF?style=flat&logo=x&logoColor=white)](https://x.com/bilalmlkdev)
[![Portfolio](https://img.shields.io/badge/Portfolio-bilalmlkdev.vercel.app-9B72FF?style=flat&logo=vercel&logoColor=white)](https://bilalmlkdev.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Bilal%20Malik-9B72FF?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bilalmlkdev/)
[![Email](https://img.shields.io/badge/Email-bilalmlkdev@gmail.com-9B72FF?style=flat&logo=gmail&logoColor=white)](mailto:bilalmlkdev@gmail.com)

</p>

<p align="left">
If you enjoyed this project, consider giving it a ⭐ on GitHub!
</p>

# License (MIT)

This project is licensed under the **MIT License**.

```text
MIT License

Copyright (c) 2026 Bilal Malik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
© 2026 PaletteSnap. Licensed under the MIT License.
