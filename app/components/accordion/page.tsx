"use client";

import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";

function AccordionPropsTable() {
  const props = [
    { name: "type", type: '"single" | "multiple"', description: "Whether one or multiple items can be open at the same time." },
    { name: "collapsible", type: "boolean", description: 'When type is "single", allows closing the open item by clicking its trigger again.' },
    { name: "defaultValue", type: "string | string[]", description: "The value(s) of items open by default (uncontrolled)." },
    { name: "value", type: "string | string[]", description: "Controlled open item value(s)." },
    { name: "onValueChange", type: "(value: string | string[]) => void", description: "Callback when the open items change." },
    { name: "disabled", type: "boolean", description: "When true on an Item, prevents it from being opened." },
    { name: "className", type: "string", description: "Additional classes on any sub-component." },
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

export default function AccordionPage() {
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
          <h1 className="font-head text-4xl mb-2">Accordion</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A vertically stacked set of interactive headings that reveal or hide associated content. Built on Radix Accordion.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Single Collapsible ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Single (Collapsible)</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Only one item open at a time. Click the open item again to collapse it.
          </p>
          <div className="border-2 p-6">
            <Accordion type="single" collapsible className="max-w-lg">
              <Accordion.Item value="item-1">
                <Accordion.Trigger>What is substrate-ui?</Accordion.Trigger>
                <Accordion.Content>
                  A neobrutalist design system built with Radix primitives, Tailwind CSS, and class-variance-authority. Sharp corners, bold borders, hard shadows.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                <Accordion.Content>
                  Yes. All interactive components are built on Radix UI primitives which provide full keyboard navigation and WAI-ARIA compliance out of the box.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="item-3">
                <Accordion.Trigger>Can I customise the styling?</Accordion.Trigger>
                <Accordion.Content>
                  Absolutely. Every component accepts className overrides and uses design tokens from the substrate CSS layer, so you can theme it to match your brand.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>

        {/* ─── Multiple ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Multiple</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Set <code className="font-mono">type=&quot;multiple&quot;</code> to allow several items to be expanded simultaneously.
          </p>
          <div className="border-2 p-6">
            <Accordion type="multiple" className="max-w-lg">
              <Accordion.Item value="a">
                <Accordion.Trigger>Getting Started</Accordion.Trigger>
                <Accordion.Content>
                  Install the package, import the CSS tokens, and start composing components.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="b">
                <Accordion.Trigger>Theming</Accordion.Trigger>
                <Accordion.Content>
                  Override CSS custom properties or use the dark class to switch palettes instantly.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="c">
                <Accordion.Trigger>Contributing</Accordion.Trigger>
                <Accordion.Content>
                  Fork the repo, create a feature branch, and submit a pull request with tests.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>

        {/* ─── With Disabled Item ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled Item</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Individual items can be disabled to prevent interaction.
          </p>
          <div className="border-2 p-6">
            <Accordion type="single" collapsible className="max-w-lg">
              <Accordion.Item value="enabled">
                <Accordion.Trigger>Available section</Accordion.Trigger>
                <Accordion.Content>
                  This section is interactive as normal.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="disabled" disabled>
                <Accordion.Trigger>Locked section</Accordion.Trigger>
                <Accordion.Content>
                  This content is not reachable.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <AccordionPropsTable />
          <p className="font-sans text-sm text-muted-foreground mt-2">
            Sub-components: <code className="font-mono">Accordion.Item</code>,{" "}
            <code className="font-mono">Accordion.Trigger</code>,{" "}
            <code className="font-mono">Accordion.Content</code>.
          </p>
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Accordion type="single" collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Question?</Accordion.Trigger>
    <Accordion.Content>Answer.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Another question?</Accordion.Trigger>
    <Accordion.Content>Another answer.</Accordion.Content>
  </Accordion.Item>
</Accordion>`}</div>
        </section>
      </main>
    </div>
  );
}
