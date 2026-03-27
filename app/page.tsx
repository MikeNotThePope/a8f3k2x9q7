import Link from "next/link";

interface ComponentEntry {
  name: string;
  description: string;
  href: string;
  status: "Ready" | "In Progress" | "Planned";
}

interface ComponentGroup {
  title: string;
  description: string;
  components: ComponentEntry[];
}

const groups: ComponentGroup[] = [
  {
    title: "Primitives",
    description: "Small, composable building blocks.",
    components: [
      {
        name: "Avatar",
        description: "User photo with fallback initials. Built on Radix Avatar.",
        href: "/components/avatar",
        status: "Ready",
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
        description: "Dropdown menu for contextual actions. Built on Radix.",
        href: "/components/menu",
        status: "Ready",
      },
      {
        name: "Tabs",
        description: "Tabbed interface with overflow dropdown. Built on Radix Tabs.",
        href: "/components/tabs",
        status: "Ready",
      },
    ],
  },
  {
    title: "Form",
    description: "Inputs, selects, and controls for collecting data.",
    components: [
      {
        name: "Alert",
        description: "Contextual feedback with semantic status colors and composable title/description.",
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
        description: "Toggle a single option on or off. Built on Radix Checkbox.",
        href: "/components/checkbox",
        status: "Ready",
      },
      {
        name: "RadioGroup",
        description: "Select one option from a set. Built on Radix Radio Group.",
        href: "/components/radio-group",
        status: "Ready",
      },
      {
        name: "Select",
        description: "Dropdown picker for choosing from a list. Built on Radix Select.",
        href: "/components/select",
        status: "Ready",
      },
      {
        name: "Switch",
        description: "Binary toggle for on/off settings. Built on Radix Switch.",
        href: "/components/switch",
        status: "Ready",
      },
      {
        name: "Slider",
        description: "Range input for selecting numeric values. Built on Radix Slider.",
        href: "/components/slider",
        status: "Ready",
      },
    ],
  },
  {
    title: "Layout",
    description: "Page structure and responsive containers.",
    components: [
      {
        name: "CardGrid",
        description: "Responsive grid for cards with configurable columns.",
        href: "/components/card-grid",
        status: "Ready",
      },
      {
        name: "Dialog",
        description: "Modal dialog with header, body, footer, and overlay. Built on Radix Dialog.",
        href: "/components/dialog",
        status: "Ready",
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
        name: "FormLayout",
        description: "Form shell with sections, field wrappers, inline rows, and action bar.",
        href: "/components/form-layout",
        status: "Ready",
      },
      {
        name: "NavBar",
        description: "Responsive navigation with auth states and mobile drawer.",
        href: "/components/navbar",
        status: "Ready",
      },
      {
        name: "SimplePage",
        description: "Page shell with header, title, actions slot, and content area.",
        href: "/components/page",
        status: "Ready",
      },
      {
        name: "TwoColumnLayout",
        description: "Side-by-side panels on desktop, drawer on mobile.",
        href: "/components/two-column-layout",
        status: "Ready",
      },
    ],
  },
  {
    title: "Landing",
    description: "Sections and blocks for marketing and landing pages.",
    components: [
      {
        name: "AnnouncementBanner",
        description: "Dismissible top-of-page banner for announcements and promotions.",
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
        description: "Generic wrapper for landing page sections with consistent spacing.",
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
  {
    title: "Demos",
    description: "Full-page compositions showing components working together.",
    components: [
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
        name: "Forgot Password",
        description:
          "Single-field form to request a password reset link.",
        href: "/demos/forgot-password",
        status: "Ready",
      },
      {
        name: "Reset Password",
        description:
          "Set a new password with confirmation and validation.",
        href: "/demos/reset-password",
        status: "Ready",
      },
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
      {
        name: "Magic Link",
        description:
          "Passwordless sign-in via email link with sent confirmation.",
        href: "/demos/magic-link",
        status: "Ready",
      },
      {
        name: "Link Expired",
        description:
          "Dead-end page for expired or invalid links with recovery path.",
        href: "/demos/link-expired",
        status: "Ready",
      },
      {
        name: "Rate Limited",
        description:
          "Too-many-attempts screen with live countdown timer.",
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
        name: "Change Password",
        description:
          "Three-field password change from account settings.",
        href: "/demos/change-password",
        status: "Ready",
      },
      {
        name: "Sessions",
        description:
          "Active device list with revoke confirmation dialogs.",
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
];

function StatusBadge({ status }: { status: "Ready" | "In Progress" | "Planned" }) {
  const styles = {
    Ready: "bg-primary text-primary-foreground",
    "In Progress": "bg-accent text-accent-foreground",
    Planned: "bg-muted text-muted-foreground",
  };

  return (
    <span className={`font-head text-xs px-2 py-0.5 border-2 ${styles[status]}`}>
      {status}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="font-head text-5xl mb-4">Substrate UI</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A neobrutalist design system. Components that look right out of
            the box — no global CSS tricks, no surprises.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-16">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 className="font-head text-2xl mb-1">{group.title}</h2>
            <p className="font-sans text-sm text-muted-foreground mb-6">
              {group.description}
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.components.map((component) => (
                <Link
                  key={component.name}
                  href={component.href}
                  className="block border-2 p-6 shadow-md hover:shadow transition-all hover:translate-y-1 bg-card"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-head text-xl">{component.name}</h3>
                    <StatusBadge status={component.status} />
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">
                    {component.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
