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
        name: "Drawer",
        description: "Slide-in panel from the left or right edge.",
        href: "/components/drawer",
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
