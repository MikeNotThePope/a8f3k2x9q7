import Link from "next/link";
import { Section } from "@/components/landing";

function PropsTable() {
  const props = [
    { name: "title", type: "ReactNode", description: "Section heading" },
    { name: "subtitle", type: "ReactNode", description: "Supporting text below the title" },
    { name: "background", type: '"default" | "muted" | "card" | "primary"', description: "Background style (default)" },
    { name: "align", type: '"left" | "center"', description: "Text alignment (default center)" },
    { name: "children", type: "ReactNode", description: "Section content" },
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

export default function SectionPage() {
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
          <h1 className="font-head text-4xl mb-2">Section</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Generic wrapper for landing page sections with consistent spacing.
          </p>
        </div>
      </header>

      <main className="flex flex-col gap-0">
        {/* ─── Default ─── */}
        <Section title="Default Background" subtitle="Standard section with centered text.">
          <div className="border-2 p-8 text-center font-sans text-sm text-muted-foreground">
            Section content goes here
          </div>
        </Section>

        {/* ─── Muted ─── */}
        <Section title="Muted Background" subtitle="Subtle contrast for alternating sections." background="muted">
          <div className="border-2 p-8 text-center font-sans text-sm text-muted-foreground">
            Section content goes here
          </div>
        </Section>

        {/* ─── Card ─── */}
        <Section title="Card Background" subtitle="Bordered section with card styling." background="card">
          <div className="border-2 p-8 text-center font-sans text-sm text-muted-foreground">
            Section content goes here
          </div>
        </Section>

        {/* ─── Primary ─── */}
        <Section title="Primary Background" subtitle="High-contrast section for CTAs." background="primary">
          <div className="border-2 p-8 text-center font-sans text-sm">
            Section content goes here
          </div>
        </Section>

        {/* ─── Left Aligned ─── */}
        <Section title="Left Aligned" subtitle="For content that reads better left-aligned." align="left">
          <div className="border-2 p-8 font-sans text-sm text-muted-foreground">
            Section content goes here
          </div>
        </Section>

        {/* ─── Props & Usage ─── */}
        <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
          <section>
            <h2 className="font-head text-2xl mb-4">Props</h2>
            <PropsTable />
          </section>

          <section>
            <h2 className="font-head text-2xl mb-4">Usage</h2>
            <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Section
  title="Features"
  subtitle="Everything you need."
  background="muted"
>
  <FeatureSection features={features} />
</Section>`}</div>
          </section>
        </div>
      </main>
    </div>
  );
}
