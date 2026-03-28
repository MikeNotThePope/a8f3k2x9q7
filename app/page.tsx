import NextLink from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { SectionNav } from "@/components/SectionNav/SectionNav";
import { Hero } from "@/components/landing/Hero";
import { StatsBar } from "@/components/landing/StatsBar";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { Section } from "@/components/landing/Section";
import { CTABanner } from "@/components/landing/CTABanner";
import { Footer } from "@/components/landing/Footer";
import { AnnouncementBanner } from "@/components/landing/AnnouncementBanner";
import {
  Cog,
  Paintbrush,
  Palette,
  Moon,
  Code,
  Zap,
  Star,
  Sparkles,
  LayoutGrid,
  Terminal,
  Layers,
  Calendar as CalendarIcon,
} from "lucide-react";

import { CopyButton } from "./_components/CopyButton";
import { ComponentCatalog } from "./_components/ComponentCatalog";
import { SiteNav } from "./_components/SiteNav";
import { CommandPalette } from "./_components/CommandPalette";
import { BackToTop } from "./_components/BackToTop";
import type {
  ComponentEntry,
  ComponentGroup,
  DemoGroup,
} from "./_components/types";

const componentGroups: ComponentGroup[] = [
  {
    title: "Primitives",
    id: "primitives",
    description: "Small, composable building blocks.",
    components: [
      {
        name: "Avatar",
        description: "User photo with fallback initials.",
        href: "/components/avatar",
        status: "Ready",
        builtOn: "Radix Avatar",
      },
      {
        name: "Badge",
        description: "Small status label with color variants and retro styling.",
        href: "/components/badge",
        status: "Ready",
      },
      {
        name: "Button",
        description: "Clickable action with size and variant options.",
        href: "/components/button",
        status: "Ready",
      },
      {
        name: "Card",
        description: "Container with header, body, and footer slots.",
        href: "/components/card",
        status: "Ready",
      },
      {
        name: "IconButton",
        description: "Icon-only button with retro shadow, sized to fit SVG icons.",
        href: "/components/icon-button",
        status: "Ready",
      },
      {
        name: "Link",
        description: "Styled anchor with variant support and asChild for Next.js Link.",
        href: "/components/link",
        status: "Ready",
      },
      {
        name: "Loader",
        description: "Bouncing dots loader with configurable count and speed.",
        href: "/components/loader",
        status: "Ready",
      },
      {
        name: "Text",
        description: "Typography primitives for headings, body, small text, and code.",
        href: "/components/text",
        status: "Ready",
      },
      {
        name: "Menu",
        description: "Dropdown menu for contextual actions.",
        href: "/components/menu",
        status: "Ready",
        builtOn: "Radix",
      },
      {
        name: "Tabs",
        description: "Tabbed interface with overflow dropdown.",
        href: "/components/tabs",
        status: "Ready",
        builtOn: "Radix Tabs",
      },
      {
        name: "Accordion",
        description: "Collapsible content sections for FAQs and grouped info.",
        href: "/components/accordion",
        status: "Ready",
        builtOn: "Radix Accordion",
      },
      {
        name: "Breadcrumb",
        description: "Navigation trail showing the current page hierarchy.",
        href: "/components/breadcrumb",
        status: "Ready",
      },
      {
        name: "Collapsible",
        description: "Toggle visibility of a content section.",
        href: "/components/collapsible",
        status: "Ready",
        builtOn: "Radix Collapsible",
      },
      {
        name: "ContextMenu",
        description: "Right-click menu with nested items and shortcuts.",
        href: "/components/context-menu",
        status: "Ready",
        builtOn: "Radix Context Menu",
      },
      {
        name: "DropdownMenu",
        description: "Full-featured dropdown with checkboxes, radios, and submenus.",
        href: "/components/dropdown-menu",
        status: "Ready",
        builtOn: "Radix Dropdown Menu",
      },
      {
        name: "HoverCard",
        description: "Popup card triggered by hovering over an element.",
        href: "/components/hover-card",
        status: "Ready",
        builtOn: "Radix Hover Card",
      },
      {
        name: "ImageCard",
        description: "Card with image, title, and description for media content.",
        href: "/components/image-card",
        status: "Ready",
      },
      {
        name: "Marquee",
        description: "Scrolling horizontal content for logos or announcements.",
        href: "/components/marquee",
        status: "Ready",
      },
      {
        name: "Menubar",
        description: "Desktop-style menu bar with nested dropdowns.",
        href: "/components/menubar",
        status: "Ready",
        builtOn: "Radix Menubar",
      },
      {
        name: "NavigationMenu",
        description: "Site navigation with dropdown panels and indicators.",
        href: "/components/navigation-menu",
        status: "Ready",
        builtOn: "Radix Navigation Menu",
      },
      {
        name: "Popover",
        description: "Floating panel anchored to a trigger element.",
        href: "/components/popover",
        status: "Ready",
        builtOn: "Radix Popover",
      },
      {
        name: "Progress",
        description: "Visual indicator of completion or loading progress.",
        href: "/components/progress",
        status: "Ready",
        builtOn: "Radix Progress",
      },
      {
        name: "ScrollArea",
        description: "Custom scrollbar container for overflowing content.",
        href: "/components/scroll-area",
        status: "Ready",
        builtOn: "Radix Scroll Area",
      },
      {
        name: "Skeleton",
        description: "Placeholder loading animation for content.",
        href: "/components/skeleton",
        status: "Ready",
      },
      {
        name: "Tooltip",
        description: "Brief informational popup on hover or focus.",
        href: "/components/tooltip",
        status: "Ready",
        builtOn: "Radix Tooltip",
      },
    ],
  },
  {
    title: "Form",
    id: "form",
    description: "Inputs, selects, and controls for collecting data.",
    components: [
      {
        name: "Alert",
        description:
          "Contextual feedback with semantic status colors and composable title/description.",
        href: "/components/alert",
        status: "Ready",
      },
      {
        name: "Input",
        description: "Text input supporting all standard HTML input types.",
        href: "/components/input",
        status: "Ready",
      },
      {
        name: "Textarea",
        description: "Multi-line text input for longer content.",
        href: "/components/textarea",
        status: "Ready",
      },
      {
        name: "Checkbox",
        description: "Toggle a single option on or off.",
        href: "/components/checkbox",
        status: "Ready",
        builtOn: "Radix Checkbox",
      },
      {
        name: "RadioGroup",
        description: "Select one option from a set.",
        href: "/components/radio-group",
        status: "Ready",
        builtOn: "Radix Radio Group",
      },
      {
        name: "Select",
        description: "Dropdown picker for choosing from a list.",
        href: "/components/select",
        status: "Ready",
        builtOn: "Radix Select",
      },
      {
        name: "Switch",
        description: "Binary toggle for on/off settings.",
        href: "/components/switch",
        status: "Ready",
        builtOn: "Radix Switch",
      },
      {
        name: "Slider",
        description: "Range input for selecting numeric values.",
        href: "/components/slider",
        status: "Ready",
        builtOn: "Radix Slider",
      },
      {
        name: "Calendar",
        description: "Date picker with single, multiple, and range selection.",
        href: "/components/calendar",
        status: "Ready",
        builtOn: "react-day-picker",
      },
      {
        name: "Combobox",
        description: "Searchable dropdown with filtering and multi-select.",
        href: "/components/combobox",
        status: "Ready",
      },
      {
        name: "Command",
        description: "Searchable command palette for actions and navigation.",
        href: "/components/command",
        status: "Ready",
        builtOn: "cmdk",
      },
      {
        name: "Form",
        description: "Form wrapper with validation, labels, and error messages.",
        href: "/components/form",
        status: "Ready",
        builtOn: "react-hook-form",
      },
      {
        name: "InputOTP",
        description: "One-time password input with grouped digit slots.",
        href: "/components/input-otp",
        status: "Ready",
        builtOn: "input-otp",
      },
    ],
  },
  {
    title: "Layout",
    id: "layout",
    description: "Page structure and responsive containers.",
    components: [
      {
        name: "CardGrid",
        description: "Responsive grid for cards with configurable columns.",
        href: "/components/card-grid",
        status: "Ready",
      },
      {
        name: "Container",
        description: "Centered, max-width wrapper with responsive horizontal padding.",
        href: "/components/container",
        status: "Ready",
      },
      {
        name: "Dialog",
        description: "Modal dialog with header, body, footer, and overlay.",
        href: "/components/dialog",
        status: "Ready",
        builtOn: "Radix Dialog",
      },
      {
        name: "Divider",
        description: "Horizontal or vertical separator with optional label.",
        href: "/components/divider",
        status: "Ready",
      },
      {
        name: "Drawer",
        description: "Slide-in panel from the left or right edge.",
        href: "/components/drawer",
        status: "Ready",
      },
      {
        name: "Flex",
        description: "General-purpose flexbox container with direction, wrap, and gap.",
        href: "/components/flex",
        status: "Ready",
      },
      {
        name: "FormLayout",
        description:
          "Form shell with sections, field wrappers, inline rows, and action bar.",
        href: "/components/form-layout",
        status: "Ready",
      },
      {
        name: "Grid",
        description: "CSS grid layout with configurable column count and gap.",
        href: "/components/grid",
        status: "Ready",
      },
      {
        name: "NavBar",
        description: "Responsive navigation with auth states and mobile drawer.",
        href: "/components/navbar",
        status: "Ready",
      },
      {
        name: "SectionNav",
        description: "Sticky horizontal anchor navigation between page sections.",
        href: "/components/section-nav",
        status: "Ready",
      },
      {
        name: "SimplePage",
        description: "Page shell with header, title, actions slot, and content area.",
        href: "/components/page",
        status: "Ready",
      },
      {
        name: "Stack",
        description: "Vertical or horizontal flex layout with consistent spacing.",
        href: "/components/stack",
        status: "Ready",
      },
      {
        name: "TwoColumnLayout",
        description: "Side-by-side panels on desktop, drawer on mobile.",
        href: "/components/two-column-layout",
        status: "Ready",
      },
      {
        name: "AlertDialog",
        description: "Confirmation dialog for destructive or important actions.",
        href: "/components/alert-dialog",
        status: "Ready",
        builtOn: "Radix Alert Dialog",
      },
      {
        name: "Carousel",
        description: "Swipeable content carousel with prev/next controls.",
        href: "/components/carousel",
        status: "Ready",
        builtOn: "Embla Carousel",
      },
      {
        name: "Chart",
        description: "Themed chart container for recharts visualizations.",
        href: "/components/chart",
        status: "Ready",
        builtOn: "Recharts",
      },
      {
        name: "DataTable",
        description: "Feature-rich table with sorting, filtering, and pagination.",
        href: "/components/data-table",
        status: "Ready",
        builtOn: "TanStack Table",
      },
      {
        name: "Pagination",
        description: "Page navigation controls with previous, next, and ellipsis.",
        href: "/components/pagination",
        status: "Ready",
      },
      {
        name: "Resizable",
        description: "Resizable split panels with draggable handles.",
        href: "/components/resizable",
        status: "Ready",
        builtOn: "react-resizable-panels",
      },
      {
        name: "Sheet",
        description: "Slide-in overlay panel from any edge of the screen.",
        href: "/components/sheet",
        status: "Ready",
        builtOn: "Radix Dialog",
      },
      {
        name: "Sidebar",
        description: "Collapsible sidebar navigation with nested menus.",
        href: "/components/sidebar",
        status: "Ready",
      },
      {
        name: "Sonner",
        description: "Toast notifications with neobrutalism styling.",
        href: "/components/sonner",
        status: "Ready",
        builtOn: "Sonner",
      },
      {
        name: "Table",
        description: "Styled HTML table with header, body, and footer sections.",
        href: "/components/table",
        status: "Ready",
      },
    ],
  },
  {
    title: "Landing",
    id: "landing",
    description: "Sections and blocks for marketing and landing pages.",
    components: [
      {
        name: "AnnouncementBanner",
        description:
          "Dismissible top-of-page banner for announcements and promotions.",
        href: "/components/announcement-banner",
        status: "Ready",
      },
      {
        name: "CTABanner",
        description: "Call-to-action section with headline and action buttons.",
        href: "/components/cta-banner",
        status: "Ready",
      },
      {
        name: "FAQ",
        description: "Accordion-style frequently asked questions section.",
        href: "/components/faq",
        status: "Ready",
      },
      {
        name: "FeatureSection",
        description: "Grid of feature cards with icons and descriptions.",
        href: "/components/feature-section",
        status: "Ready",
      },
      {
        name: "Footer",
        description: "Site footer with link groups, branding, and newsletter.",
        href: "/components/footer",
        status: "Ready",
      },
      {
        name: "Hero",
        description: "Main hero section with headline, subtitle, and CTA buttons.",
        href: "/components/hero",
        status: "Ready",
      },
      {
        name: "LogoCloud",
        description: "Trusted-by logo strip for social proof.",
        href: "/components/logo-cloud",
        status: "Ready",
      },
      {
        name: "NewsletterSignup",
        description: "Email signup form with input and submit button.",
        href: "/components/newsletter-signup",
        status: "Ready",
      },
      {
        name: "PricingTable",
        description: "Pricing plan cards with feature lists and tier highlights.",
        href: "/components/pricing-table",
        status: "Ready",
      },
      {
        name: "Section",
        description:
          "Generic wrapper for landing page sections with consistent spacing.",
        href: "/components/section",
        status: "Ready",
      },
      {
        name: "StatsBar",
        description: "Metrics row displaying key numbers and stats.",
        href: "/components/stats-bar",
        status: "Ready",
      },
      {
        name: "Testimonial",
        description: "Customer quote cards with author details.",
        href: "/components/testimonial",
        status: "Ready",
      },
    ],
  },
];

const demoGroup: DemoGroup = {
  title: "Demos",
  id: "demos",
  description: "Full-page compositions showing components working together.",
  subGroups: [
    {
      label: "Full Pages",
      demos: [
        {
          name: "Landing Page",
          description:
            "Full SaaS landing page with hero, features, pricing, testimonials, FAQ, and more.",
          href: "/demos/landing",
          status: "Ready",
        },
      ],
    },
    {
      label: "Authentication",
      demos: [
        {
          name: "Unified Sign In",
          description:
            "Tabbed sign-in with password and magic link methods in one page.",
          href: "/demos/unified-sign-in",
          status: "Ready",
        },
        {
          name: "Sign In",
          description:
            "Authentication page with form validation, social login, and loading states.",
          href: "/demos/sign-in",
          status: "Ready",
        },
        {
          name: "Sign Up",
          description:
            "Registration flow with multi-field validation and success feedback.",
          href: "/demos/sign-up",
          status: "Ready",
        },
        {
          name: "Magic Link",
          description:
            "Passwordless sign-in via email link with sent confirmation.",
          href: "/demos/magic-link",
          status: "Ready",
        },
      ],
    },
    {
      label: "Verification",
      demos: [
        {
          name: "Check Email",
          description:
            "Waiting state after sign-up with resend action and guidance.",
          href: "/demos/check-email",
          status: "Ready",
        },
        {
          name: "Verify Email",
          description:
            "Outcome page for email verification: success, expired, or invalid.",
          href: "/demos/verify-email",
          status: "Ready",
        },
        {
          name: "Link Expired",
          description:
            "Dead-end page for expired or invalid links with recovery path.",
          href: "/demos/link-expired",
          status: "Ready",
        },
      ],
    },
    {
      label: "Password",
      demos: [
        {
          name: "Forgot Password",
          description: "Single-field form to request a password reset link.",
          href: "/demos/forgot-password",
          status: "Ready",
        },
        {
          name: "Reset Password",
          description: "Set a new password with confirmation and validation.",
          href: "/demos/reset-password",
          status: "Ready",
        },
        {
          name: "Change Password",
          description: "Three-field password change from account settings.",
          href: "/demos/change-password",
          status: "Ready",
        },
      ],
    },
    {
      label: "Two-Factor",
      demos: [
        {
          name: "2FA Setup",
          description:
            "QR code scan, manual key entry, and recovery codes for two-factor auth.",
          href: "/demos/2fa-setup",
          status: "Ready",
        },
        {
          name: "2FA Challenge",
          description:
            "TOTP code entry at login with method switching links.",
          href: "/demos/2fa-challenge",
          status: "Ready",
        },
        {
          name: "2FA SMS",
          description:
            "SMS verification with masked phone, resend cooldown timer.",
          href: "/demos/2fa-sms",
          status: "Ready",
        },
        {
          name: "2FA Recovery",
          description:
            "Recovery code entry as a fallback when authenticator is lost.",
          href: "/demos/2fa-recovery",
          status: "Ready",
        },
      ],
    },
    {
      label: "Security",
      demos: [
        {
          name: "Rate Limited",
          description: "Too-many-attempts screen with live countdown timer.",
          href: "/demos/rate-limited",
          status: "Ready",
        },
        {
          name: "Account Locked",
          description:
            "Security alert for locked accounts with reset and support options.",
          href: "/demos/account-locked",
          status: "Ready",
        },
      ],
    },
    {
      label: "Lifecycle",
      demos: [
        {
          name: "Onboarding",
          description:
            "Profile setup with avatar, bio, role select, and notification prefs.",
          href: "/demos/onboarding",
          status: "Ready",
        },
        {
          name: "Welcome",
          description:
            "Success/celebration screen after completing account setup.",
          href: "/demos/welcome",
          status: "Ready",
        },
        {
          name: "Sessions",
          description: "Active device list with revoke confirmation dialogs.",
          href: "/demos/sessions",
          status: "Ready",
        },
        {
          name: "Delete Account",
          description:
            "Destructive flow with type-to-confirm and final dialog.",
          href: "/demos/delete-account",
          status: "Ready",
        },
      ],
    },
  ],
};

// Featured components to highlight in the marketing section
interface FeaturedEntry extends ComponentEntry {
  tag: string;
  icon: React.ReactNode;
}

const featuredComponents: FeaturedEntry[] = [
  {
    name: "Button",
    description: "Clickable action with size and variant options.",
    href: "/components/button",
    status: "Ready",
    tag: "Most Popular",
    icon: <Star className="h-5 w-5" />,
  },
  {
    name: "Dialog",
    description: "Modal dialog with header, body, footer, and overlay.",
    href: "/components/dialog",
    status: "Ready",
    builtOn: "Radix Dialog",
    tag: "Essential",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    name: "DataTable",
    description: "Feature-rich table with sorting, filtering, and pagination.",
    href: "/components/data-table",
    status: "Ready",
    builtOn: "TanStack Table",
    tag: "Complex Example",
    icon: <LayoutGrid className="h-5 w-5" />,
  },
  {
    name: "Command",
    description: "Searchable command palette for actions and navigation.",
    href: "/components/command",
    status: "Ready",
    builtOn: "cmdk",
    tag: "Power User",
    icon: <Terminal className="h-5 w-5" />,
  },
  {
    name: "NavBar",
    description: "Responsive navigation with auth states and mobile drawer.",
    href: "/components/navbar",
    status: "Ready",
    tag: "Showcase",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    name: "Calendar",
    description: "Date picker with single, multiple, and range selection.",
    href: "/components/calendar",
    status: "Ready",
    builtOn: "react-day-picker",
    tag: "Feature-rich",
    icon: <CalendarIcon className="h-5 w-5" />,
  },
];

// Featured demos to highlight
const featuredDemos: FeaturedEntry[] = [
  {
    name: "Landing Page",
    description:
      "Full SaaS landing page with hero, features, pricing, testimonials, FAQ, and more.",
    href: "/demos/landing",
    status: "Ready",
    tag: "Full Composition",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    name: "Unified Sign In",
    description:
      "Tabbed sign-in with password and magic link methods in one page.",
    href: "/demos/unified-sign-in",
    status: "Ready",
    tag: "Auth Flow",
    icon: <Layers className="h-5 w-5" />,
  },
];

const sectionNavItems = [
  ...componentGroups.map((g) => ({ label: g.title, id: g.id })),
  { label: demoGroup.title, id: demoGroup.id },
];

const totalComponents =
  componentGroups.reduce((sum, g) => sum + g.components.length, 0) +
  demoGroup.subGroups.reduce((sum, sg) => sum + sg.demos.length, 0);

function FeaturedCard({ component }: { component: FeaturedEntry }) {
  return (
    <Card variant="interactive" asChild>
      <NextLink href={component.href} className="block p-5 sm:p-7">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary/25 border-2 border-border text-primary shrink-0">
            {component.icon}
          </div>
          <Badge variant="outline" size="sm">
            {component.tag}
          </Badge>
        </div>
        <Text variant="h4" className="mb-1">
          {component.name}
        </Text>
        <Text variant="small">{component.description}</Text>
        {component.builtOn && (
          <span className="font-mono text-xs text-muted-foreground mt-2 inline-block">
            {component.builtOn}
          </span>
        )}
      </NextLink>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Skip to content ── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:font-head focus:text-sm focus:border-2 focus:border-border focus:shadow-md"
      >
        Skip to main content
      </a>

      {/* ── Announcement Banner ── */}
      <AnnouncementBanner>
        Substrate UI is open source &mdash;{" "}
        <a
          href="https://github.com/MikeNotThePope/substrate-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-head"
        >
          Star on GitHub
        </a>
      </AnnouncementBanner>

      {/* ── Sticky Navigation Bar ── */}
      <SiteNav />

      {/* ── Global command palette ── */}
      <CommandPalette
        componentGroups={componentGroups}
        demoGroup={demoGroup}
      />

      {/* ── Back to top ── */}
      <BackToTop />

      {/* ── Main content ── */}
      <main id="main-content">

      {/* ── Hero ── */}
      <Hero
        badge={
          <Badge variant="default" className="rotate-[-1deg]">
            {totalComponents}+ Components
          </Badge>
        }
        title={
          <>
            Neobrutalist UI.{" "}
            <span className="text-primary">Unapologetically bold.</span>
          </>
        }
        subtitle="The component library built for neobrutalist design. 80+ accessible Radix primitives with hard shadows, bold borders, and zero configuration."
        actions={
          <>
            <Button size="lg" asChild>
              <a href="#quickstart">Install Now</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#primitives">Browse Components</a>
            </Button>
          </>
        }
      >
        {/* Install snippet with copy button — short alias on mobile */}
        <div className="mt-2 font-mono text-sm bg-card text-card-foreground border-2 border-border px-3 sm:px-6 py-3 shadow-md flex items-center gap-3">
          <code className="overflow-x-auto whitespace-nowrap flex-1">
            <span className="text-muted-foreground select-none">$ </span>
            <span className="hidden sm:inline">npm install @mikenotthepope/substrate-ui</span>
            <span className="sm:hidden">npm i @mikenotthepope/substrate-ui</span>
          </code>
          <CopyButton text="npm install @mikenotthepope/substrate-ui" />
        </div>
      </Hero>

      {/* ── Stats Bar — all quantitative ── */}
      <StatsBar
        stats={[
          { value: `${totalComponents}+`, label: "Components" },
          { value: "WAI-ARIA", label: "Compliant" },
          { value: "1 CSS", label: "Import to Start" },
          { value: "100%", label: "TypeScript" },
        ]}
      />

      {/* ── Quickstart ── */}
      <Section
        id="quickstart"
        title="Get started in seconds"
        subtitle="Install the package, import the styles, and use any component."
      >
        <ol role="list" className="grid gap-6 md:grid-cols-3 list-none p-0 m-0">
          <li className="border-2 p-6 bg-card shadow-md overflow-hidden">
            <div className="font-head text-2xl text-primary mb-2" aria-hidden="true">1</div>
            <h3 className="font-head text-lg mb-3">Add the dependency</h3>
            <div className="flex items-center gap-2 bg-background border-2 border-border px-3 py-2 min-w-0">
              <code className="font-mono text-sm overflow-x-auto whitespace-nowrap flex-1 min-w-0">
                <span className="text-muted-foreground">{`"`}dependencies{`"`}: {`{`}</span> {`"`}@mikenotthepope/substrate-ui{`"`}: {`"`}latest{`"`} <span className="text-muted-foreground">{`}`}</span>
              </code>
            </div>
          </li>
          <li className="border-2 p-6 bg-card shadow-md overflow-hidden">
            <div className="font-head text-2xl text-primary mb-2" aria-hidden="true">2</div>
            <h3 className="font-head text-lg mb-3">Import styles</h3>
            <div className="flex items-center gap-2 bg-background border-2 border-border px-3 py-2 min-w-0">
              <code className="font-mono text-sm overflow-x-auto whitespace-nowrap flex-1 min-w-0">
                import &quot;@mikenotthepope/substrate-ui/styles&quot;
              </code>
              <CopyButton text='import "@mikenotthepope/substrate-ui/styles"' />
            </div>
          </li>
          <li className="border-2 p-6 bg-card shadow-md overflow-hidden">
            <div className="font-head text-2xl text-primary mb-2" aria-hidden="true">3</div>
            <h3 className="font-head text-lg mb-3">Use components</h3>
            <div className="flex items-center gap-2 bg-background border-2 border-border px-3 py-2 min-w-0">
              <code className="font-mono text-sm overflow-x-auto whitespace-nowrap flex-1 min-w-0">
                {`import { Button } from "@mikenotthepope/substrate-ui"`}
              </code>
              <CopyButton text='import { Button } from "@mikenotthepope/substrate-ui"' />
            </div>
          </li>
        </ol>
      </Section>

      {/* ── Features ── */}
      <Section
        background="muted"
        title="Why Substrate UI?"
        subtitle="Built for developers who want strong visual identity without sacrificing accessibility or developer experience."
      >
        <FeatureSection
          columns={3}
          features={[
            {
              icon: <Cog className="h-5 w-5" />,
              title: "Radix Primitives",
              description:
                "Every interactive component wraps a Radix UI primitive for keyboard navigation, screen reader support, and WAI-ARIA compliance out of the box.",
            },
            {
              icon: <Paintbrush className="h-5 w-5" />,
              title: "Neobrutalist Design",
              description:
                "Hard shadows, bold borders, and sharp corners create a distinctive visual identity that stands out. Rounded corners available via opt-in.",
            },
            {
              icon: <Palette className="h-5 w-5" />,
              title: "Tailwind CSS v4",
              description:
                "Styled with CSS custom properties and Tailwind v4. No Tailwind config needed — just import one CSS file and go.",
            },
            {
              icon: <Moon className="h-5 w-5" />,
              title: "Dark Mode",
              description:
                "Full light and dark theme support via CSS custom properties. Seamless switching with no flash of unstyled content.",
            },
            {
              icon: <Code className="h-5 w-5" />,
              title: "TypeScript First",
              description:
                "Every component is fully typed with strict TypeScript. Autocomplete for all props, variants, and event handlers.",
            },
            {
              icon: <Zap className="h-5 w-5" />,
              title: "Copy & Customize",
              description:
                "Use the npm package for quick setup, or copy individual components into your project for full control.",
            },
          ]}
        />
      </Section>

      {/* ── Section Nav (early for returning users) ── */}
      <SectionNav items={sectionNavItems} offsetTop={68} />

      {/* ── Featured Components ── */}
      <Section
        title="Start Here"
        subtitle="A hand-picked selection of our most popular components and full-page demos."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredComponents.map((component) => (
            <FeaturedCard key={component.name} component={component} />
          ))}
        </div>
        <div className="mt-8">
          <h3 className="font-head text-xs tracking-widest text-muted-foreground uppercase mb-4">
            Full-page Demos
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredDemos.map((demo) => (
              <FeaturedCard key={demo.name} component={demo} />
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="#primitives">View All {totalComponents}+ Components</a>
          </Button>
        </div>
      </Section>

      {/* ── Component Catalog (client) ── */}
      <div className="bg-muted/30">
        <ComponentCatalog
          componentGroups={componentGroups}
          demoGroup={demoGroup}
        />
      </div>

      {/* ── CTA Banner ── */}
      <CTABanner
        title="Ready to build?"
        subtitle="Install Substrate UI and start shipping bold, accessible interfaces today."
        actions={
          <>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="#quickstart">Install Now</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/50 text-primary-foreground/80 hover:border-primary-foreground hover:text-primary-foreground"
              asChild
            >
              <a
                href="https://github.com/MikeNotThePope/substrate-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </Button>
          </>
        }
      />

      </main>

      {/* ── Footer ── */}
      <Footer
        brand="Substrate UI"
        tagline="A neobrutalist React component library. Open source and free to use."
        groups={[
          {
            title: "Getting Started",
            links: [
              { label: "Install", href: "#quickstart" },
              { label: "Design Tokens", href: "/tokens" },
              { label: "Design Principles", href: "/design-principles" },
              { label: "TypeScript Setup", href: "#quickstart" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Components", href: "#primitives" },
              { label: "Demos", href: "#demos" },
              { label: "Landing Page Demo", href: "/demos/landing" },
            ],
          },
          {
            title: "Community",
            links: [
              {
                label: "GitHub",
                href: "https://github.com/MikeNotThePope/substrate-ui",
              },
              {
                label: "Issues",
                href: "https://github.com/MikeNotThePope/substrate-ui/issues",
              },
              {
                label: "Contributing",
                href: "https://github.com/MikeNotThePope/substrate-ui",
              },
              {
                label: "MIT License",
                href: "https://github.com/MikeNotThePope/substrate-ui/blob/main/LICENSE",
              },
            ],
          },
        ]}
        bottom={
          <p>
            &copy; {new Date().getFullYear()} Substrate UI. Released under the MIT
            License.
          </p>
        }
      />
    </div>
  );
}
