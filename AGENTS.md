# Repository Guidelines

## Project Structure & Module Organization
- Framework: Next.js (App Router) with TypeScript.
- Key dirs: `app/` (pages/layouts), `components/` (UI), `lib/` (helpers), `types/` (shared types).
- Content: `data/works.json` (all works), `data/home-works.json` (TOP order, max 8, filename order).
- Assets: `public/images/` (works uploads in `public/images/works/uploads/`).
- Docs/Scripts: `docs/`, `scripts/` (CSV import, image tasks).

## Build, Test, and Development Commands
- Install/Dev: `npm i` ; `npm run dev` (http://localhost:9000).
- Build/Start: `npm run build` ; `npm run start`.
- Static/Standalone: `npm run build:static` ; `npm run build:standalone`.
- Quality: `npm run typecheck`, `npm run lint`, `npm run format`.
- Data & Images: `npm run works:import:csv -- data/works.csv`, `npm run img:normalize`, `npm run img:rename-uploads`.

## Coding Style & Naming Conventions
- Indent: 2 spaces for TS/TSX/JSON/YAML (Prettier enforced).
- Names: files `kebab-case` (e.g., `works-grid.tsx`); Components/Types `PascalCase`; functions/vars `camelCase`.
- Images: photos `.jpg`, vectors `.svg`; prefer `uploads/<slug>.jpg`.

## Testing Guidelines
- Tests not yet introduced; add Vitest/Jest if needed.
- Location: `__tests__/` or beside target file (`*.test.ts[x]`).
- Emphasize unit tests, fast runs, and isolate external deps.

## Commit & Pull Request Guidelines
- Conventional Commits: `feat` | `fix` | `docs` | `chore` | `refactor` | `test` | `perf` | `ci`.
- PRs: include summary, scope/impact, screenshots (for UI), migration notes, and any `data/` changes. Prefer small, focused PRs.

## Security & Configuration Tips
- No secrets in repo. Use `.env.local` (e.g., `NEXT_PUBLIC_CONTACT_EMAIL`).
- Only public assets in `public/`; optimize large files.

## Agent-Specific Instructions
- TOP ordering: driven by `data/home-works.json` (filename order, max 8).
- WORKS listing: sort by `addedAt` → image mtime → `releaseDate`.
- For adding images/data, follow `data/WORKS_MANUAL.md` and `docs/IMAGES.md`.
- Preserve existing behavior; keep diffs minimal. Prefer `rg` for search.
