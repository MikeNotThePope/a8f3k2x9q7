# Substrate UI — Agent Instructions

## Project Overview

Substrate UI is a neobrutalist React component library built on Radix UI primitives and Tailwind CSS v4. It ships as an npm package (`@mikenotthepope/substrate-ui`) with a Next.js demo/docs site.

## Architecture

- **Library source**: `components/` (ui, landing, composite) + `src/index.ts` (barrel export)
- **Styles**: `base/substrate.css` (design tokens + component styles)
- **Demo site**: `app/` (Next.js App Router — pages at `app/components/*/page.tsx` and `app/demos/*/page.tsx`)
- **Build**: `tsup` for library, `next build` for demo site
- **Tests**: Vitest + Testing Library (unit), Playwright (visual regression)
- **Stories**: Storybook 10, co-located as `*.stories.tsx`

## Key Commands

```
npm run dev          # Next.js dev server
npm run build        # Library build (tsup)
npm run build:demo   # Demo site build (next build)
npm run test         # Vitest
npm run storybook    # Storybook dev
npm run test:visual  # Playwright visual tests
```

## Conventions

- Components use `class-variance-authority` for variants and `tailwind-merge` + `clsx` for class composition
- All primitives wrap Radix UI — preserve accessibility props and forwarded refs
- CSS custom properties (not Tailwind config) for theming tokens — see `base/substrate.css`
- Neobrutalist defaults: hard shadows (`shadow-[4px_4px_0_0_var(--border)]`), bold borders, sharp corners (rounded opt-in via `with-radius` class)
- Export every public component and type from `src/index.ts`
- React 19 + TypeScript strict mode

<!-- BEGIN:nextjs-agent-rules -->
## Next.js

This is NOT the Next.js you know. This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
