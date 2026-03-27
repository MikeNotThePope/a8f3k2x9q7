# Substrate UI

A neobrutalist React component library with bold borders, hard shadows, and high contrast design. Built on [Radix UI](https://www.radix-ui.com/) primitives and [Tailwind CSS v4](https://tailwindcss.com/).

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-black.svg)](https://www.typescriptlang.org/)
[![React 19](https://img.shields.io/badge/React-19-black.svg)](https://react.dev/)

**[Documentation & Demos](https://www.substrate-ui.com)** | **[Storybook](https://www.substrate-ui.com)** | **[npm](https://www.npmjs.com/package/@mikenotthepope/substrate-ui)**

---

## Why Substrate UI?

Most component libraries optimize for invisibility — neutral colors, subtle shadows, rounded everything. Substrate UI goes the other direction: **hard pixel-offset shadows, bold borders, and sharp corners by default.** It's opinionated about aesthetics but flexible about theming, built on Radix UI so accessibility comes free.

- **57 UI primitives** — Button, Dialog, Tabs, Select, DataTable, and more
- **12 landing page components** — Hero, Pricing, FAQ, Testimonials, and more
- **5 composite layouts** — NavBar, CardGrid, SectionNav, SimplePage, TwoColumnLayout
- **Light & dark themes** with CSS custom properties
- **Tree-shakeable** ESM + CJS builds
- **Full TypeScript** support with exported types

## Quick Start

### Install

```bash
npm install @mikenotthepope/substrate-ui
```

Requires `react` and `react-dom` v19+ as peer dependencies.

### Import the stylesheet

Add the base stylesheet once in your app root. This provides all design tokens and component styles.

```tsx
// app/layout.tsx (Next.js) or src/main.tsx (Vite)
import "@mikenotthepope/substrate-ui/styles";
```

### Use components

```tsx
import { Button, Card, Text } from "@mikenotthepope/substrate-ui";

export function Example() {
  return (
    <Card>
      <Card.Header>
        <Text variant="h3">Hello</Text>
      </Card.Header>
      <Card.Body>
        <Text>Neobrutalist components, ready to go.</Text>
        <Button>Get Started</Button>
      </Card.Body>
    </Card>
  );
}
```

## Fonts

Substrate UI uses three font families via CSS custom properties:

| Token          | Default Font    | Purpose    |
| -------------- | --------------- | ---------- |
| `--font-head`  | Archivo Black   | Headings   |
| `--font-sans`  | Space Grotesk   | Body text  |
| `--font-mono`  | Space Mono      | Code       |

**Next.js:**

```tsx
import { Space_Grotesk, Archivo_Black, Space_Mono } from "next/font/google";

const sans = Space_Grotesk({ variable: "--font-sans", subsets: ["latin"], weight: "400" });
const head = Archivo_Black({ variable: "--font-head", subsets: ["latin"], weight: "400" });
const mono = Space_Mono({ variable: "--font-mono", subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html className={`${sans.variable} ${head.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Plain HTML / Vite:**

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;700&family=Space+Mono&display=swap" rel="stylesheet">
<style>
  :root {
    --font-head: 'Archivo Black', sans-serif;
    --font-sans: 'Space Grotesk', sans-serif;
    --font-mono: 'Space Mono', monospace;
  }
</style>
```

If fonts aren't loaded, the library falls back to `Space Grotesk -> system-ui -> sans-serif`.

## Theming

### Light / Dark Mode

Use the built-in `ThemeProvider` to manage theme switching:

```tsx
import { ThemeProvider } from "@mikenotthepope/substrate-ui";

function App({ children }) {
  return (
    <ThemeProvider defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
```

Access and toggle the theme anywhere:

```tsx
import { useTheme } from "@mikenotthepope/substrate-ui";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  );
}
```

Accepts `"light"`, `"dark"`, or `"system"` (default). Persists to `localStorage` and respects `prefers-color-scheme`.

### Rounded Corners

Components have sharp corners by default. Add `with-radius` to opt in to rounded corners:

```html
<html class="with-radius">
```

### Custom Tokens

Override any CSS custom property to customize the theme:

```css
:root {
  --primary: #6366f1;
  --primary-foreground: #fff;
  --primary-hover: #4f46e5;
}
```

See the full token reference in `base/substrate.css`.

## Components

### Primitives

Accordion, Alert, AlertDialog, Avatar, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Chart, Checkbox, Collapsible, Combobox, Command, Container, ContextMenu, DataTable, Dialog, Divider, Drawer, DropdownMenu, Flex, Form, FormLayout, Grid, HoverCard, IconButton, ImageCard, Input, InputOTP, Label, Link, Loader, Marquee, Menu, Menubar, NavigationMenu, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Sheet, Sidebar, Skeleton, Slider, Sonner, Stack, Switch, Table, Tabs, Text, Textarea, Tooltip

### Landing

AnnouncementBanner, CTABanner, FAQ, FeatureSection, Footer, Hero, LogoCloud, NewsletterSignup, PricingTable, Section, StatsBar, Testimonial

### Composite

CardGrid, NavBar, SectionNav, SimplePage, TwoColumnLayout

## Framework Compatibility

Works in any React 19 environment — Next.js, Vite, Remix, etc.

The `NavBar` component accepts an optional `linkComponent` prop for framework-specific routing:

```tsx
import Link from "next/link";
import { NavBar } from "@mikenotthepope/substrate-ui";

<NavBar linkComponent={Link} brand={{ name: "MyApp" }} auth={{ state: "signed-out", href: "/login" }} />
```

When omitted, it defaults to a plain `<a>` tag.

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start the demo app (Next.js)
npm run storybook    # Start Storybook
npm run test         # Run tests
npm run build        # Build the library (tsup)
```

### Project Structure

```
substrate-ui/
├── src/index.ts          # Barrel export for the published package
├── components/ui/        # 57 primitive components
├── components/landing/   # 12 landing page components
├── components/           # Composite components + ThemeProvider
├── base/substrate.css    # Design tokens & base styles
├── app/                  # Next.js demo/docs site
├── AGENTS.md             # Shared AI agent instructions
├── CLAUDE.md             # Claude Code config (imports AGENTS.md)
└── tsup.config.ts        # Library build config
```

## License

[MIT](LICENSE)
