# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (a `pnpm-workspace.yaml` and `pnpm-lock.yaml` are committed; ignore the README's npm/yarn/bun examples).

- `pnpm dev` — start the dev server at http://localhost:3000 (Next.js with Turbopack)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — run ESLint

There is no test runner configured.

## Architecture

Next.js 16 App Router project (React 19). It began as a `create-next-app` scaffold, so much of `app/layout.tsx` and `app/page.tsx` still holds boilerplate metadata/content — expect to replace rather than extend it.

- `app/` — all routes and layout (App Router). `layout.tsx` is the root layout; it loads the Geist / Geist Mono fonts via `next/font/google` and exposes them as the `--font-geist-sans` / `--font-geist-mono` CSS variables.
- Styling is **Tailwind CSS v4**, configured entirely in `app/globals.css` via `@import "tailwindcss"` and the `@theme inline` block — there is no `tailwind.config` file. Design tokens (`--background`, `--foreground`, font families) are defined there, with dark mode driven by `prefers-color-scheme`.
- `@/*` path alias maps to the repo root (see `tsconfig.json`).
- `pnpm-workspace.yaml` opts `sharp` and `unrs-resolver` into building; other native postinstall builds are blocked by default.
