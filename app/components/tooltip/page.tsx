"use client";

import Link from "next/link";
import { Tooltip } from "@/components/ui/Tooltip";
import { Button } from "@/components/ui/Button";

function PropsTable() {
  const props = [
    { name: "side", type: '"top" | "right" | "bottom" | "left"', description: "Preferred side of the trigger to render against" },
    { name: "sideOffset", type: "number", description: "Distance in pixels from the trigger (default: 4)" },
    { name: "align", type: '"start" | "center" | "end"', description: "Alignment against the trigger" },
    { name: "delayDuration", type: "number", description: "Duration from hover to open in ms (Provider prop, default: 0)" },
    { name: "className", type: "string", description: "Additional classes on the tooltip content" },
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

export default function TooltipPage() {
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
          <h1 className="font-head text-4xl mb-2">Tooltip</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A popup that displays information related to an element on hover. Built on Radix Tooltip.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Basic --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic</h2>
          <Tooltip.Provider>
            <Tooltip>
              <Tooltip.Trigger asChild>
                <Button>Hover me</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>This is a tooltip</p>
              </Tooltip.Content>
            </Tooltip>
          </Tooltip.Provider>
        </section>

        {/* --- Sides --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sides</h2>
          <Tooltip.Provider>
            <div className="flex gap-6 items-center">
              {(["top", "right", "bottom", "left"] as const).map((side) => (
                <Tooltip key={side}>
                  <Tooltip.Trigger asChild>
                    <Button variant="outline">{side}</Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content side={side}>
                    <p>Tooltip on {side}</p>
                  </Tooltip.Content>
                </Tooltip>
              ))}
            </div>
          </Tooltip.Provider>
        </section>

        {/* --- With delay --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Delay</h2>
          <Tooltip.Provider delayDuration={500}>
            <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="outline">500ms delay</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>This tooltip appears after 500ms</p>
              </Tooltip.Content>
            </Tooltip>
          </Tooltip.Provider>
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
                  { name: "Tooltip.Provider", desc: "Wraps your app or section to share delay configuration" },
                  { name: "Tooltip", desc: "Root provider for a single tooltip instance" },
                  { name: "Tooltip.Trigger", desc: "The element that triggers the tooltip on hover" },
                  { name: "Tooltip.Content", desc: "The popup content displayed on hover" },
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
          <h2 className="font-head text-2xl mb-4">Content Props</h2>
          <PropsTable />
        </section>

        {/* --- Usage --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Tooltip.Provider>
  <Tooltip>
    <Tooltip.Trigger asChild>
      <Button>Hover me</Button>
    </Tooltip.Trigger>
    <Tooltip.Content side="top">
      <p>Tooltip text</p>
    </Tooltip.Content>
  </Tooltip>
</Tooltip.Provider>`}</div>
        </section>
      </main>
    </div>
  );
}
