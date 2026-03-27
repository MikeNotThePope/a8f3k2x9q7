"use client";

import Link from "next/link";
import { Collapsible } from "@/components/ui/Collapsible";
import { Button } from "@/components/ui/Button";

function PropsTable() {
  const props = [
    { name: "defaultOpen", type: "boolean", description: "Whether the collapsible is open by default" },
    { name: "open", type: "boolean", description: "Controlled open state" },
    { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes" },
    { name: "disabled", type: "boolean", description: "Prevents the user from interacting with the collapsible" },
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

export default function CollapsiblePage() {
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
          <h1 className="font-head text-4xl mb-2">Collapsible</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            An interactive component that expands and collapses content. Built on Radix Collapsible.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Basic --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic</h2>
          <Collapsible className="w-80">
            <Collapsible.Trigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Toggle content
              </Button>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <div className="border-2 border-t-0 border-border bg-background p-4 font-sans text-sm">
                This content can be expanded and collapsed.
              </div>
            </Collapsible.Content>
          </Collapsible>
        </section>

        {/* --- Default Open --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default Open</h2>
          <Collapsible defaultOpen className="w-80">
            <Collapsible.Trigger asChild>
              <Button variant="outline" className="w-full justify-between">
                Toggle content
              </Button>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <div className="border-2 border-t-0 border-border bg-background p-4 font-sans text-sm">
                This section starts open by default.
              </div>
            </Collapsible.Content>
          </Collapsible>
        </section>

        {/* --- Multiple Items --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Multiple Items</h2>
          <Collapsible className="w-80">
            <div className="flex items-center justify-between border-2 border-border bg-primary text-primary-foreground px-4 py-2">
              <span className="font-head text-sm">3 items</span>
              <Collapsible.Trigger asChild>
                <Button size="sm">Toggle</Button>
              </Collapsible.Trigger>
            </div>
            <div className="border-2 border-t-0 border-border px-4 py-2 font-sans text-sm">
              Always visible item
            </div>
            <Collapsible.Content>
              <div className="border-2 border-t-0 border-border px-4 py-2 font-sans text-sm">
                Hidden item 1
              </div>
              <div className="border-2 border-t-0 border-border px-4 py-2 font-sans text-sm">
                Hidden item 2
              </div>
            </Collapsible.Content>
          </Collapsible>
        </section>

        {/* --- Sub-components --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Component</th>
                  <th className="text-left p-3 font-head">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Collapsible", desc: "Root provider (controls open/close state)" },
                  { name: "Collapsible.Trigger", desc: "Element that toggles the collapsible" },
                  { name: "Collapsible.Content", desc: "The content area that expands and collapses" },
                ].map((row) => (
                  <tr key={row.name} className="border-b last:border-b-0">
                    <td className="p-3 font-mono text-xs">{row.name}</td>
                    <td className="p-3">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- Props --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Root Props</h2>
          <PropsTable />
        </section>

        {/* --- Usage --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Collapsible>
  <Collapsible.Trigger asChild>
    <Button>Toggle</Button>
  </Collapsible.Trigger>
  <Collapsible.Content>
    <p>Collapsible content here.</p>
  </Collapsible.Content>
</Collapsible>`}</div>
        </section>
      </main>
    </div>
  );
}
