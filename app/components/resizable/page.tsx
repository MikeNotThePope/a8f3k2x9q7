"use client";

import Link from "next/link";
import { Resizable } from "@/components/ui/Resizable";

function PropsTable() {
  const props = [
    { name: "direction", type: '"horizontal" | "vertical"', description: "Layout direction of the panel group" },
    { name: "defaultSize", type: "number", description: "Default size of a panel as a percentage (0-100)" },
    { name: "minSize", type: "number", description: "Minimum size of a panel as a percentage" },
    { name: "maxSize", type: "number", description: "Maximum size of a panel as a percentage" },
    { name: "withHandle", type: "boolean", description: "Show a visible grip handle on the resize bar" },
    { name: "className", type: "string", description: "Additional classes on the element" },
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

export default function ResizablePage() {
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
          <h1 className="font-head text-4xl mb-2">Resizable</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Resizable panel groups with draggable dividers. Built on react-resizable-panels.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Horizontal ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Horizontal</h2>
          <Resizable direction="horizontal" className="max-w-lg border-2 border-border">
            <Resizable.Panel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6 bg-background">
                <span className="font-head text-sm">Panel A</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle withHandle />
            <Resizable.Panel defaultSize={50}>
              <div className="flex h-[200px] items-center justify-center p-6 bg-background">
                <span className="font-head text-sm">Panel B</span>
              </div>
            </Resizable.Panel>
          </Resizable>
        </section>

        {/* ─── Vertical ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Vertical</h2>
          <Resizable direction="vertical" className="max-w-lg border-2 border-border">
            <Resizable.Panel defaultSize={50}>
              <div className="flex h-[150px] items-center justify-center p-6 bg-background">
                <span className="font-head text-sm">Top</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle withHandle />
            <Resizable.Panel defaultSize={50}>
              <div className="flex h-[150px] items-center justify-center p-6 bg-background">
                <span className="font-head text-sm">Bottom</span>
              </div>
            </Resizable.Panel>
          </Resizable>
        </section>

        {/* ─── Three Panels ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Three-Panel Layout</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            A sidebar-content-inspector layout with minimum size constraints.
          </p>
          <Resizable direction="horizontal" className="border-2 border-border">
            <Resizable.Panel defaultSize={20} minSize={15}>
              <div className="flex h-[300px] items-center justify-center p-4 bg-muted">
                <span className="font-head text-sm">Sidebar</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle withHandle />
            <Resizable.Panel defaultSize={55}>
              <div className="flex h-[300px] items-center justify-center p-4 bg-background">
                <span className="font-head text-sm">Content</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle withHandle />
            <Resizable.Panel defaultSize={25} minSize={15}>
              <div className="flex h-[300px] items-center justify-center p-4 bg-muted">
                <span className="font-head text-sm">Inspector</span>
              </div>
            </Resizable.Panel>
          </Resizable>
        </section>

        {/* ─── Without Handle ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Without Handle</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            The divider is still draggable but has no visible grip icon.
          </p>
          <Resizable direction="horizontal" className="max-w-lg border-2 border-border">
            <Resizable.Panel defaultSize={60}>
              <div className="flex h-[200px] items-center justify-center p-6 bg-background">
                <span className="font-head text-sm">Main</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle />
            <Resizable.Panel defaultSize={40}>
              <div className="flex h-[200px] items-center justify-center p-6 bg-background">
                <span className="font-head text-sm">Side</span>
              </div>
            </Resizable.Panel>
          </Resizable>
        </section>

        {/* ─── Sub-components ─── */}
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
                  { name: "Resizable", desc: "Root panel group (pass direction prop here)" },
                  { name: "Resizable.Panel", desc: "A single resizable panel" },
                  { name: "Resizable.Handle", desc: "Draggable divider between panels" },
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

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Resizable direction="horizontal">
  <Resizable.Panel defaultSize={50}>
    <div>Left panel</div>
  </Resizable.Panel>
  <Resizable.Handle withHandle />
  <Resizable.Panel defaultSize={50}>
    <div>Right panel</div>
  </Resizable.Panel>
</Resizable>`}</div>
        </section>
      </main>
    </div>
  );
}
