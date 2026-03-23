import Link from "next/link";

const components = [
  {
    name: "NavBar",
    description: "Responsive navigation bar with signed-in/signed-out states, mobile drawer, and configurable links.",
    href: "/components/navbar",
    status: "Ready" as const,
  },
  {
    name: "Card",
    description: "Generic container with header, body, footer. Multiple visual treatments including interactive.",
    href: "/components/card",
    status: "Ready" as const,
  },
  {
    name: "Badge",
    description: "Small status label with color variants and retro styling.",
    href: "/components/badge",
    status: "Ready" as const,
  },
  {
    name: "CardGrid",
    description: "Responsive grid layout for cards with empty state. Configurable columns.",
    href: "/components/card-grid",
    status: "Ready" as const,
  },
  {
    name: "Page",
    description: "Layout wrapper with consistent header, title, actions slot, and content area.",
    href: "/components/page",
    status: "Ready" as const,
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

      <main className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-head text-2xl mb-8">Components</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
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
      </main>
    </div>
  );
}
