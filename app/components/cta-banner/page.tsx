import Link from "next/link";
import { CTABanner } from "@/components/landing";

function PropsTable() {
  const props = [
    { name: "title", type: "ReactNode", description: "Main headline" },
    { name: "subtitle", type: "ReactNode", description: "Supporting text below the title" },
    { name: "actions", type: "ReactNode", description: "Action buttons" },
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

export default function CTABannerPage() {
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
          <h1 className="font-head text-4xl mb-2">CTABanner</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Call-to-action section with headline and action buttons.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── With actions ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Actions</h2>
          <CTABanner
            title="Ready to get started?"
            subtitle="Join 10,000+ teams already building with us. Free 14-day trial, no credit card required."
            actions={
              <>
                <button className="font-head px-6 h-10 border-2 bg-background text-foreground shadow-md hover:shadow transition-all text-sm">
                  Start Free Trial
                </button>
                <button className="font-head px-6 h-10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all text-sm">
                  Talk to Sales
                </button>
              </>
            }
          />
        </section>

        {/* ─── Minimal ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Minimal</h2>
          <CTABanner title="Start building today" />
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<CTABanner
  title="Ready to get started?"
  subtitle="Free 14-day trial."
  actions={
    <>
      <Button>Start Free Trial</Button>
      <Button variant="outline">Talk to Sales</Button>
    </>
  }
/>`}</div>
        </section>
      </main>
    </div>
  );
}
