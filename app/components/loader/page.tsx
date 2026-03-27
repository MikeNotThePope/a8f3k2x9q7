import Link from "next/link";
import { Loader } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "variant", type: '"default" | "secondary" | "outline"', description: "Dot color scheme" },
    { name: "size", type: '"sm" | "md" | "lg"', description: "Dot size" },
    { name: "count", type: "number", description: "Number of bouncing dots (default: 3)" },
    { name: "duration", type: "number", description: "Animation duration in seconds (default: 0.5)" },
    { name: "delayStep", type: "number", description: "Delay between dots in ms (default: 100)" },
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

export default function LoaderPage() {
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
          <h1 className="font-head text-4xl mb-2">Loader</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Bouncing dots loader with configurable count, speed, and color variants.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Variants ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Variants</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <Loader />
              <span className="font-sans text-xs text-muted-foreground">default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader variant="secondary" />
              <span className="font-sans text-xs text-muted-foreground">secondary</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader variant="outline" />
              <span className="font-sans text-xs text-muted-foreground">outline</span>
            </div>
          </div>
        </section>

        {/* ─── Sizes ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sizes</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <Loader size="sm" />
              <span className="font-sans text-xs text-muted-foreground">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader size="md" />
              <span className="font-sans text-xs text-muted-foreground">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader size="lg" />
              <span className="font-sans text-xs text-muted-foreground">lg</span>
            </div>
          </div>
        </section>

        {/* ─── Custom Count ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Count</h2>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <Loader count={2} />
              <span className="font-sans text-xs text-muted-foreground">2 dots</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Loader count={5} />
              <span className="font-sans text-xs text-muted-foreground">5 dots</span>
            </div>
          </div>
        </section>

        {/* ─── Use case: Button loading ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Use Case: Button Loading</h2>
          <button className="font-head px-4 py-1.5 border-2 border-border bg-primary text-primary-foreground shadow-md flex items-center gap-2 cursor-not-allowed opacity-60">
            <Loader size="sm" variant="secondary" />
            Signing in...
          </button>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Loader />
<Loader variant="secondary" size="lg" />
<Loader count={5} duration={0.8} delayStep={150} />`}</div>
        </section>
      </main>
    </div>
  );
}
