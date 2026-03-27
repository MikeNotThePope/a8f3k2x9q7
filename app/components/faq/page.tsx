import Link from "next/link";
import { FAQ } from "@/components/landing";

function PropsTable() {
  const props = [
    { name: "items", type: "FAQItem[]", description: "Array of { question, answer } objects" },
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

const sampleItems = [
  {
    question: "How does the free trial work?",
    answer: "You get full access to all features for 14 days. No credit card required. At the end of your trial, choose a plan or your account will be paused.",
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes! You can upgrade, downgrade, or cancel at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include community support. Pro plans get priority email support, and Enterprise gets a dedicated account manager.",
  },
];

export default function FAQPage() {
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
          <h1 className="font-head text-4xl mb-2">FAQ</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Accordion-style frequently asked questions section.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <FAQ items={sampleItems} />
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<FAQ
  items={[
    {
      question: "How does it work?",
      answer: "Sign up and start building.",
    },
  ]}
/>`}</div>
        </section>
      </main>
    </div>
  );
}
