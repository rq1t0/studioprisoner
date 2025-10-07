# STUDIO PRISONER Clone (Demo)

A faithful UI/UX clone of studioprisoner.jp with paraphrased text and placeholder images. Built with Next.js App Router, TypeScript, Tailwind CSS, and lightweight shadcn-like components.

## Stack
- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS
- ESLint + Prettier
- Package manager: `pnpm`

## Setup
```bash
pnpm i
```

## Development
```bash
pnpm dev
```
Runs on http://localhost:9000

## Lint / Types / Build / Start
```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```
`start` also runs on http://localhost:9000

## Data & Content
- 詳細マニュアル: `docs/WORKS.md`（画像の推奨仕様、保存場所、追加手順、トラブルシュートまで）
- JSON under `data/`: `works.json`, `voices.json`, `media.json`, `faq.json`.
- Images in `public/images/` (placeholders). Thumbs are 1:1; hero images can be 3:2 or 1:1.
- Edit data to update pages. WORKS ordering follows the JSON order (newest first recommended).

### 作品（WORKS）の追加方法（かんたん）
（より詳しい手順は `docs/WORKS.md` を参照）
1) Put an image (square 1:1, e.g., 1200×1200 WebP/JPG) under `public/images/works/`.
   - Example: `public/images/works/echoes-of-night.jpg`
2) Add an entry to `data/works.json` (top of array = newest):
   ```json
   {
     "slug": "echoes-of-night",
     "artist": "Mira K.",
     "title": "Echoes of Night",
     "roles": ["Full Production"],
     "releaseDate": "2024-08-01",
     "thumb": "/images/works/echoes-of-night.jpg",
     "hero": "/images/works/echoes-of-night.jpg"
   }
   ```
3) Or use the helper script (adds to the top):
   ```bash
   npm run work:add -- echoes-of-night "Mira K." "Echoes of Night" "Full Production" 2024-08-01
   # thumb defaults to /images/works/<slug>.jpg
   ```
4) 画像パスから自動コピーして登録する（より簡単）
   ```bash
   npm run work:import -- /path/to/album.jpg "Artist" "Title" 2025-01-23 "Recording,Mixing"
   # public/images/works/<slug>.jpg にコピーし、data/works.json に追記
   ```
表示順/注意:
- Title format shows as `Artist – Title` on cards.
- Alt text uses the same format automatically.
- Keep images square 1:1 for best look; Next/Image will crop with `object-cover`.
- 一覧は `releaseDate` の新しい順で表示（降順）。日付がない作品は後ろに並びます。
- 画像は1:1推奨（CDジャケット向け）。最低 800×800px 以上を推奨。

## Routes
- `/` HOME: hero, process cards, pickup works
- `/works` list, `/works/[slug]` detail (breadcrumb, roles, links, optional YouTube, prev/next)
- `/services`, `/about`, `/voice`, `/testimonials`, `/media`, `/faq` (accordion)
- `/case-studies` (list) + `/case-studies/[slug]` (detail)
- `/epk` with one-sheet download
- SEO: `app/sitemap.ts`, `app/robots.ts`, metadata + JSON-LD
- i18n: `/en/*` with alternates hreflang on layout

## Notes
- Text is paraphrased; images are placeholders to respect copyright.
- Accessibility: visible focus, alt text, keyboard-friendly navigation, AA-oriented contrast.
- To change site URL in sitemap/robots, update `app/sitemap.ts` and `app/robots.ts`.

## Contact Email
- The contact pages now use a simple email workflow (no form).
- Set your email via environment variable: `NEXT_PUBLIC_CONTACT_EMAIL`.
  - Create `.env.local` and add:
    ```bash
    NEXT_PUBLIC_CONTACT_EMAIL=contact@example.com
    ```
  - It is also referenced in the footer.
