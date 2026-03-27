import Link from "next/link";
import { Divider } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "orientation", type: '"horizontal" | "vertical"', description: "Direction of the divider line" },
    { name: "label", type: "ReactNode", description: "Optional centered label (horizontal only)" },
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

export default function DividerPage() {
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
          <h1 className="font-head text-4xl mb-2">Divider</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Horizontal or vertical separator with optional centered label.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Horizontal ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Horizontal</h2>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-sm">Content above</p>
            <Divider />
            <p className="font-sans text-sm">Content below</p>
          </div>
        </section>

        {/* ─── With Label ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Label</h2>
          <div className="flex flex-col gap-4 max-w-sm">
            <button className="border-2 border-border px-4 py-2 font-head bg-primary text-primary-foreground shadow-md w-full">
              Sign in with Email
            </button>
            <Divider label="or continue with" />
            <div className="flex gap-3">
              <button className="flex-1 border-2 border-border px-4 py-2 font-head bg-background shadow-md">
                Google
              </button>
              <button className="flex-1 border-2 border-border px-4 py-2 font-head bg-background shadow-md">
                GitHub
              </button>
            </div>
          </div>
        </section>

        {/* ─── Vertical ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Vertical</h2>
          <div className="flex items-center gap-4 h-12">
            <span className="font-sans text-sm">Left</span>
            <Divider orientation="vertical" />
            <span className="font-sans text-sm">Right</span>
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Divider />
<Divider label="or continue with" />
<Divider orientation="vertical" />`}</div>
        </section>
      </main>
    </div>
  );
}
