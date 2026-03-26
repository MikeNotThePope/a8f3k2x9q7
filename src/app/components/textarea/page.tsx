"use client";

import Link from "next/link";
import { Textarea, Label } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "placeholder", type: "string", description: "Placeholder text" },
    { name: "rows", type: "number", description: "Number of visible rows (default 4)" },
    { name: "disabled", type: "boolean", description: "Disable interaction" },
    { name: "className", type: "string", description: "Additional classes" },
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

export default function TextareaPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Textarea</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Multi-line text input for longer content.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <form className="flex flex-col gap-3 max-w-lg" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-bio">Bio</Label>
            <Textarea id="demo-bio" placeholder="Tell us about yourself..." />
          </form>
        </section>

        {/* ─── Custom Rows ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Rows</h2>
          <form className="flex flex-col gap-3 max-w-lg" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-short">Short Textarea (2 rows)</Label>
            <Textarea id="demo-short" rows={2} placeholder="Short note..." />
          </form>
        </section>

        {/* ─── Disabled ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled</h2>
          <div className="max-w-lg">
            <Textarea placeholder="Disabled textarea" disabled />
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Textarea placeholder="Tell us about yourself..." />
<Textarea rows={2} placeholder="Short note..." />
<Textarea disabled />`}</div>
        </section>
      </main>
    </div>
  );
}
