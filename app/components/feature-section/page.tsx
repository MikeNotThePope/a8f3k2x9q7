import Link from "next/link";
import { FeatureSection } from "@/components/landing";
import { Zap, Shield, BarChart3 } from "lucide-react";

function PropsTable() {
  const props = [
    { name: "features", type: "Feature[]", description: "Array of { icon?, title, description } objects" },
    { name: "columns", type: "2 | 3 | 4", description: "Number of grid columns (default 3)" },
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

const sampleFeatures = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Built on edge infrastructure for sub-50ms response times globally.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "SOC 2 compliant with end-to-end encryption and audit logging.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Real-time Analytics",
    description: "Live dashboards with custom metrics and automated reporting.",
  },
];

export default function FeatureSectionPage() {
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
          <h1 className="font-head text-4xl mb-2">FeatureSection</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Grid of feature cards with icons and descriptions.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── 3 Columns (default) ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">3 Columns (default)</h2>
          <FeatureSection features={sampleFeatures} />
        </section>

        {/* ─── 2 Columns ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">2 Columns</h2>
          <FeatureSection features={sampleFeatures.slice(0, 2)} columns={2} />
        </section>

        {/* ─── Without Icons ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Without Icons</h2>
          <FeatureSection
            features={sampleFeatures.map(({ title, description }) => ({ title, description }))}
          />
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<FeatureSection
  columns={3}
  features={[
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Sub-50ms response times.",
    },
  ]}
/>`}</div>
        </section>
      </main>
    </div>
  );
}
