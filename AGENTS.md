# Repository Guidelines

## Project Structure & Module Organization
- Next.js (App Router) project.
- `app/` pages and layouts; `components/` UI; `lib/` utilities; `types/` TypeScript types.
- Content: `data/works.json` (works data; `tracks` may include per-song notes and video IDs).
- Assets: `public/images/` (WORKS images under `public/images/works/uploads/`).
- Docs/Scripts: `docs/`, `scripts/` (scripts like `work:add`, `work:import`).

## Build, Test, and Development Commands
- Install deps: `pnpm i` (or `npm i`).
- Dev server: `pnpm dev` (http://localhost:9000).
- Build/Start: `pnpm build` / `pnpm start`.
- Quality checks: `pnpm lint`, `pnpm format`, `pnpm typecheck`.
- WORKS data: `pnpm work:import -- <img> "Artist" "Title" 2025-01-23 "Recording,Mixing"` or
  `pnpm work:add -- <slug> "Artist" "Title" "Full Production" 2025-01-23`.
- Temporary share (optional): `pnpm run share:lt` (Localtunnel) / `pnpm run share:cf` (Cloudflare Tunnel).

## Coding Style & Naming Conventions
- TS/TSX/JSON/YAML use 2 spaces. Prettier + ESLint enforced.
- Filenames: kebab-case (e.g., `works-grid.tsx`).
- Components/types: PascalCase; functions/variables: camelCase.
- Aim for ~100-char lines; favor small, pure components and functions.

## Testing Guidelines
- No test suite yet; use Vitest/Jest when adding tests.
- Place unit tests in `__tests__/` or alongside files (`*.test.ts[x]`).
- Keep tests fast and isolated; avoid network/real FS.

## Commit & Pull Request Guidelines
- Conventional Commits: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `perf`, `ci`.
- PRs include: concise description, scope of change, screenshots (UI), migration notes, and any data/schema updates (e.g., `data/works.json`). Keep diffs focused.

## Security & Configuration Tips
- Do not commit secrets. Configure via `.env.local` (see `.env.example`).
- Public contact email: set `NEXT_PUBLIC_CONTACT_EMAIL` (used in footer/EPK/CTA).
- Ignore artifacts: `node_modules/`, `.next/`, `dist/`, `coverage/`.

## Agent-Specific Instructions
- Prefer `rg` for search; keep changes minimal and consistent with existing style.
- Update docs alongside code; avoid unrelated refactors.

