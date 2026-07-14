# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a Next.js 16 (App Router) demo app, bootstrapped with `create-next-app` and currently at its default scaffold — `app/page.tsx` and `app/layout.tsx` have not yet been customized. It uses React 19, TypeScript (strict mode), and Tailwind CSS v4.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # Run ESLint (flat config via eslint.config.mjs)
```

There is no test suite or test runner configured in this repo.

## Architecture

- **App Router**: pages/layouts live under `app/`. `app/layout.tsx` is the root layout — it loads the Geist Sans/Geist Mono fonts via `next/font/google` and sets them as CSS variables (`--font-geist-sans`, `--font-geist-mono`) consumed by Tailwind.
- **Styling**: Tailwind CSS v4 is configured via the `@tailwindcss/postcss` plugin (see `postcss.config.mjs`), not a `tailwind.config.js` — theme tokens (`--color-background`, `--color-foreground`, fonts) are defined inline in `app/globals.css` using the `@theme inline` directive. Light/dark colors are set via `prefers-color-scheme` in `:root`.
- **Path alias**: `@/*` resolves to the repo root (`tsconfig.json`).
- **TypeScript**: strict mode is enabled; `next.config.ts` currently has no custom config.

## Code style

- When implementing a function, add a one-line comment directly above it stating what it does, simply and on-point.
