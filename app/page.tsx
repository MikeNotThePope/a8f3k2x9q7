import NextLink from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { SectionNav } from "@/components/SectionNav/SectionNav";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/landing/Hero";
import { StatsBar } from "@/components/landing/StatsBar";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { Section } from "@/components/landing/Section";
import { CTABanner } from "@/components/landing/CTABanner";
import { Footer } from "@/components/landing/Footer";
import { AnnouncementBanner } from "@/components/landing/AnnouncementBanner";

interface ComponentEntry {
  name: string;
  description: string;
  href: string;
  status: "Ready" | "In Progress" | "Planned";
  builtOn?: string;
}

interface DemoSubGroup {
  label: string;
  demos: ComponentEntry[];
}

interface ComponentGroup {
  title: string;
  id: string;
  description: string;
  components: ComponentEntry[];
}

interface DemoGroup {
  title: string;
  id: string;
  description: string;
  subGroups: DemoSubGroup[];
}

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
        {
          name: "Landing Page",
          description:
            "Full SaaS landing page with hero, features, pricing, testimonials, FAQ, and more.",
          href: "/demos/landing",
          status: "Ready",
        },
      ],
    },
  ],
};

const sectionNavItems = [
  ...componentGroups.map((g) => ({ label: g.title, id: g.id })),
  { label: demoGroup.title, id: demoGroup.id },
];

function ComponentCard({ component }: { component: ComponentEntry }) {
  return (
    <Card variant="interactive" asChild>
      <NextLink href={component.href} className="block p-4 sm:p-6">
        <Text variant="h4" className="mb-2">
          {component.name}
        </Text>
        <Text variant="small">{component.description}</Text>
        {component.builtOn && (
          <span className="font-mono text-xs text-muted-foreground mt-2 inline-block">
            {component.builtOn}
          </span>
        )}
        {component.status !== "Ready" && (
          <Badge
            variant={
              component.status === "In Progress" ? "warning" : "outline"
            }
            size="sm"
            className="mt-2"
          >
            {component.status}
          </Badge>
        )}
      </NextLink>
    </Card>
  );
}

export default function Home() {
  const totalComponents =
    componentGroups.reduce((sum, g) => sum + g.components.length, 0) +
    demoGroup.subGroups.reduce((sum, sg) => sum + sg.demos.length, 0);

  return (
    <div className="min-h-screen flex flex-col">
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

      {/* ── Navigation Bar ── */}
      <nav
        aria-label="Main navigation"
        className="bg-background text-foreground border-b-[4px] border-black"
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <NextLink href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center border-2 border-black">
              <span className="font-head text-primary-foreground text-sm">S</span>
            </div>
            <span className="font-head text-lg">Substrate UI</span>
          </NextLink>
          <div className="flex items-center gap-3">
            <NextLink
              href="#primitives"
              className="hidden sm:inline-block font-head text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Components
            </NextLink>
            <NextLink
              href="#demos"
              className="hidden sm:inline-block font-head text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Demos
            </NextLink>
            <NextLink
              href="/tokens"
              className="hidden sm:inline-block font-head text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Tokens
            </NextLink>
            <a
              href="https://github.com/MikeNotThePope/substrate-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-background text-foreground border-2 border-black px-3 py-1 font-head text-sm shadow-sm hover:shadow-none transition-shadow"
              aria-label="View on GitHub"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <ThemeToggle variant="outline" />
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <Hero
        badge={
          <Badge variant="outline" className="rotate-[-1deg]">
            Open Source
          </Badge>
        }
        title={
          <>
            Bold components.{" "}
            <span className="text-primary">Zero compromises.</span>
          </>
        }
        subtitle={`A neobrutalist React component library with ${totalComponents} components built on Radix UI primitives and styled with Tailwind CSS v4. Accessible, themeable, and ready to ship.`}
        actions={
          <>
            <Button size="lg" asChild>
              <a href="#quickstart">Get Started</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#primitives">Browse Components</a>
            </Button>
          </>
        }
      >
        {/* Install snippet */}
        <div className="mt-2 font-mono text-sm bg-card text-card-foreground border-2 border-border px-6 py-3 shadow-md overflow-x-auto whitespace-nowrap">
          <span className="text-muted-foreground select-none">$ </span>
          npm install @mikenotthepope/substrate-ui
        </div>
      </Hero>

      {/* ── Stats Bar ── */}
      <StatsBar
        stats={[
          { value: `${totalComponents}+`, label: "Components" },
          { value: "Radix", label: "Accessible Primitives" },
          { value: "Tailwind v4", label: "Styling Engine" },
          { value: "TypeScript", label: "Full Type Safety" },
        ]}
      />

      {/* ── Quickstart ── */}
      <Section
        id="quickstart"
        title="Get started in seconds"
        subtitle="Install the package, import the styles, and use any component."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="border-2 p-6 bg-card shadow-md">
            <div className="font-head text-2xl text-primary mb-2">1</div>
            <h3 className="font-head text-lg mb-3">Install</h3>
            <code className="font-mono text-sm bg-background border-2 border-border px-3 py-2 block overflow-x-auto whitespace-nowrap">
              npm i @mikenotthepope/substrate-ui
            </code>
          </div>
          <div className="border-2 p-6 bg-card shadow-md">
            <div className="font-head text-2xl text-primary mb-2">2</div>
            <h3 className="font-head text-lg mb-3">Import styles</h3>
            <code className="font-mono text-sm bg-background border-2 border-border px-3 py-2 block overflow-x-auto whitespace-nowrap">
              import &quot;substrate-ui/styles&quot;
            </code>
          </div>
          <div className="border-2 p-6 bg-card shadow-md">
            <div className="font-head text-2xl text-primary mb-2">3</div>
            <h3 className="font-head text-lg mb-3">Use components</h3>
            <code className="font-mono text-sm bg-background border-2 border-border px-3 py-2 block overflow-x-auto whitespace-nowrap">
              {`import { Button } from "substrate-ui"`}
            </code>
          </div>
        </div>
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
              icon: <span className="text-lg">&#9881;</span>,
              title: "Radix Primitives",
              description:
                "Every interactive component wraps a Radix UI primitive for keyboard navigation, screen reader support, and WAI-ARIA compliance out of the box.",
            },
            {
              icon: <span className="text-lg">&#9998;</span>,
              title: "Neobrutalist Design",
              description:
                "Hard shadows, bold borders, and sharp corners create a distinctive visual identity that stands out. Rounded corners available via opt-in.",
            },
            {
              icon: <span className="text-lg">&#9883;</span>,
              title: "Tailwind CSS v4",
              description:
                "Styled with CSS custom properties and Tailwind v4. No Tailwind config needed — just import one CSS file and go.",
            },
            {
              icon: <span className="text-lg">&#9733;</span>,
              title: "Dark Mode",
              description:
                "Full light and dark theme support via CSS custom properties. Seamless switching with no flash of unstyled content.",
            },
            {
              icon: <span className="text-lg">&#128736;</span>,
              title: "TypeScript First",
              description:
                "Every component is fully typed with strict TypeScript. Autocomplete for all props, variants, and event handlers.",
            },
            {
              icon: <span className="text-lg">&#9889;</span>,
              title: "Copy & Customize",
              description:
                "Use the npm package for quick setup, or copy individual components into your project for full control.",
            },
          ]}
        />
      </Section>

      {/* ── Component Catalog ── */}
      <SectionNav items={sectionNavItems} />

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-16 w-full">
        {componentGroups.map((group) => (
          <section key={group.id} id={group.id}>
            <Text variant="h3" className="mb-1">
              {group.title}{" "}
              <span className="text-muted-foreground font-sans text-lg">
                ({group.components.length})
              </span>
            </Text>
            <Text variant="small" className="mb-6">
              {group.description}
            </Text>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.components.map((component) => (
                <ComponentCard key={component.name} component={component} />
              ))}
            </div>
          </section>
        ))}

        <section id={demoGroup.id}>
          <Text variant="h3" className="mb-1">
            {demoGroup.title}{" "}
            <span className="text-muted-foreground font-sans text-lg">
              ({demoGroup.subGroups.reduce((s, sg) => s + sg.demos.length, 0)})
            </span>
          </Text>
          <Text variant="small" className="mb-6">
            {demoGroup.description}
          </Text>

          <div className="flex flex-col gap-10">
            {demoGroup.subGroups.map((subGroup) => (
              <div key={subGroup.label}>
                <Text
                  variant="body"
                  className="font-head text-xs tracking-widest text-muted-foreground uppercase mb-4"
                >
                  {subGroup.label}
                </Text>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {subGroup.demos.map((demo) => (
                    <ComponentCard key={demo.name} component={demo} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── CTA Banner ── */}
      <CTABanner
        title="Ready to build?"
        subtitle="Install Substrate UI and start shipping bold, accessible interfaces today."
        actions={
          <>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="#quickstart">Get Started</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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

      {/* ── Footer ── */}
      <Footer
        brand="Substrate UI"
        tagline="A neobrutalist React component library. Open source and free to use."
        groups={[
          {
            title: "Resources",
            links: [
              { label: "Components", href: "#primitives" },
              { label: "Demos", href: "#demos" },
              { label: "Design Tokens", href: "/tokens" },
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
