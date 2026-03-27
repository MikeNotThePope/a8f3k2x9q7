import Link from "next/link";
import { Hero } from "@/components/landing";

function PropsTable() {
  const props = [
    { name: "badge", type: "ReactNode", description: "Small element above the title (e.g. a badge)" },
    { name: "title", type: "ReactNode", description: "Main headline" },
    { name: "subtitle", type: "ReactNode", description: "Supporting text below the title" },
    { name: "actions", type: "ReactNode", description: "Action buttons" },
    { name: "children", type: "ReactNode", description: "Additional content below actions" },
    { name: "align", type: '"left" | "center"', description: "Text alignment (default center)" },
    { name: "className", type: "string", description: "Additional classes on the root element" },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Prop</th>
            <th className="text-left p-3 font-head">Type</th>
            <th className="text-left p-3 font-head">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b last:border-b-0">
              <td className="p-3 font-mono text-xs">{prop.name}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{prop.type}</td>
              <td className="p-3">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HeroPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/"
            className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block"
          >
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Hero</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Main hero section with headline, subtitle, and CTA buttons.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Center Aligned ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Center Aligned (default)</h2>
          <Hero
            badge={
              <span className="font-head text-xs px-3 py-1 border-2 bg-accent text-accent-foreground shadow-sm">
                Now in Public Beta
              </span>
            }
            title="Ship faster with tools that just work"
            subtitle="The modern platform for building, deploying, and scaling your applications."
            actions={
              <>
                <button className="font-head px-6 h-10 border-2 bg-primary text-primary-foreground shadow-md hover:shadow transition-all text-sm">
                  Start Free Trial
                </button>
                <button className="font-head px-6 h-10 border-2 bg-background text-foreground shadow-md hover:shadow transition-all text-sm">
                  See How It Works
                </button>
              </>
            }
          />
        </section>

        {/* ─── Left Aligned ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Left Aligned</h2>
          <Hero
            align="left"
            title="Build something great"
            subtitle="Start with a solid foundation and scale as you grow."
            actions={
              <button className="font-head px-6 h-10 border-2 bg-primary text-primary-foreground shadow-md hover:shadow transition-all text-sm">
                Get Started
              </button>
            }
          />
        </section>

        {/* ─── Minimal ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Minimal</h2>
          <Hero title="Welcome" />
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Hero
  badge={<Badge>New</Badge>}
  title="Ship faster"
  subtitle="The modern platform."
  align="center"
  actions={
    <>
      <Button>Start Free Trial</Button>
      <Button variant="outline">Learn More</Button>
    </>
  }
/>`}</div>
        </section>
      </main>
    </div>
  );
}
