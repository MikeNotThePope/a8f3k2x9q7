import Link from "next/link";
import { PricingTable } from "@/components/landing";

function PropsTable() {
  const props = [
    { name: "tiers", type: "PricingTier[]", description: "Array of pricing tier objects" },
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

const sampleTiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Free forever for small teams",
    features: [
      { text: "Up to 3 team members", included: true },
      { text: "5GB storage", included: true },
      { text: "Basic analytics", included: true },
      { text: "Custom domains", included: false },
      { text: "API access", included: false },
    ],
    cta: (
      <button className="w-full font-head px-4 h-10 border-2 bg-background text-foreground shadow-md hover:shadow transition-all text-sm">
        Get Started
      </button>
    ),
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "Everything you need to grow",
    highlighted: true,
    badge: (
      <span className="font-head text-xs px-2 py-0.5 border-2 bg-accent text-accent-foreground">
        Popular
      </span>
    ),
    features: [
      { text: "Up to 20 team members", included: true },
      { text: "100GB storage", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom domains", included: true },
      { text: "API access", included: true },
    ],
    cta: (
      <button className="w-full font-head px-4 h-10 border-2 bg-primary text-primary-foreground shadow-md hover:shadow transition-all text-sm">
        Start Free Trial
      </button>
    ),
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments",
    features: [
      { text: "Unlimited team members", included: true },
      { text: "Unlimited storage", included: true },
      { text: "Custom analytics", included: true },
      { text: "Custom domains", included: true },
      { text: "Full API access + webhooks", included: true },
    ],
    cta: (
      <button className="w-full font-head px-4 h-10 border-2 bg-background text-foreground shadow-md hover:shadow transition-all text-sm">
        Contact Sales
      </button>
    ),
  },
];

export default function PricingTablePage() {
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
          <h1 className="font-head text-4xl mb-2">PricingTable</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Pricing plan cards with feature lists and tier highlights.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <PricingTable tiers={sampleTiers} />
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<PricingTable
  tiers={[
    {
      name: "Starter",
      price: "$0",
      description: "Free forever",
      highlighted: false,
      features: [
        { text: "3 team members", included: true },
        { text: "API access", included: false },
      ],
      cta: <Button>Get Started</Button>,
    },
  ]}
/>`}</div>
        </section>
      </main>
    </div>
  );
}
