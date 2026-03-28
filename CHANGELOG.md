# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-03-28

Initial release of Substrate UI — a neobrutalist React component library built on Radix UI primitives and Tailwind CSS v4.

### Added

#### Core Design System
- Design tokens and component styles via CSS custom properties (`base/substrate.css`)
- Semantic status tokens for consistent theming
- Blue primary color scheme with pale-blue/navy page backgrounds
- Neobrutalist defaults: hard shadows, bold borders, sharp corners with opt-in rounded via `with-radius`
- Light/dark theme support with `ThemeProvider` and `ThemeToggle` component

#### UI Components
- **Layout**: `SimplePage`, `TwoColumnLayout`, `CardGrid`, `FormLayout`, `Tabs`, `SectionNav`, `Divider`
- **Data Display**: `Card`, `Badge`, `Avatar`, `Text` (typography with font-mono theme token), `Alert`, `Table`
- **Forms**: `Input`, `Textarea`, `Checkbox`, `RadioGroup`, `Select`, `Switch`, `Slider`
- **Actions**: `Button`, `IconButton`, `Link`
- **Overlays**: `Dialog`, `Drawer`, `ContextMenu`, `DropdownMenu`, `Menubar`
- **Feedback**: `Loader`, `Toast`
- 30 additional components ported from neobrutalism-components

#### Landing Page Components
- Full set of SaaS landing page building blocks (hero, features, pricing, testimonials, etc.)
- Individual demo pages for each landing component

#### Demo Site
- Next.js App Router demo/docs site with component catalog
- Global search with keyboard shortcuts
- Mobile-responsive navigation with sticky nav
- Per-component demo pages with live examples
- Auth workflow demo (sign-in/sign-up)
- Full SaaS landing page demo

#### Infrastructure
- Library build with `tsup` for npm publishing as `@mikenotthepope/substrate-ui`
- Vitest + Testing Library unit tests
- Playwright visual regression tests
- Storybook 10 with co-located stories
- Opt-in pre-commit hooks (lint, typecheck, test coverage)
- Vercel Analytics integration
- MIT license

#### Documentation
- `AGENTS.md` and `CLAUDE.md` with project instructions for AI agents
- Acknowledgements for neobrutalism-components and RetroUI

[0.1.0]: https://github.com/MikeNotThePope/substrate-ui/releases/tag/v0.1.0
