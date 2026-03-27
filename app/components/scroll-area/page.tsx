"use client";

import Link from "next/link";
import { ScrollArea } from "@/components/ui/ScrollArea";

function ScrollAreaPropsTable() {
  const props = [
    { name: "className", type: "string", description: "Additional classes on the root container." },
    { name: "children", type: "ReactNode", description: "Scrollable content." },
    { name: "orientation", type: '"vertical" | "horizontal"', description: "ScrollBar orientation (on the ScrollBar sub-component)." },
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

const tags = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

export default function ScrollAreaPage() {
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
          <h1 className="font-head text-4xl mb-2">ScrollArea</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Custom scrollable container with styled scrollbars. Built on Radix ScrollArea.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Vertical Scroll ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Vertical Scroll</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            A fixed-height container with a vertical scrollbar for long lists.
          </p>
          <div className="border-2 p-6">
            <ScrollArea className="h-[200px] w-[300px] border-2 border-border">
              <div className="p-4">
                {tags.map((tag) => (
                  <div key={tag} className="py-2 border-b border-border text-sm font-sans">
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>

        {/* ─── Horizontal Scroll ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Horizontal Scroll</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Add a horizontal scrollbar for wide content that overflows its container.
          </p>
          <div className="border-2 p-6">
            <ScrollArea className="w-[500px] border-2 border-border">
              <div className="flex gap-4 p-4" style={{ width: 1400 }}>
                {Array.from({ length: 14 }, (_, i) => (
                  <div
                    key={i}
                    className="shrink-0 border-2 border-border bg-muted p-4 font-head text-sm"
                    style={{ width: 150, height: 100 }}
                  >
                    Card {i + 1}
                  </div>
                ))}
              </div>
              <ScrollArea.ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </section>

        {/* ─── Long-form Content ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Long-form Content</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Works well for paragraphs, code blocks, or any tall content.
          </p>
          <div className="border-2 p-6">
            <ScrollArea className="h-[250px] w-full max-w-lg border-2 border-border">
              <div className="p-4 font-sans text-sm leading-relaxed">
                {Array.from({ length: 15 }, (_, i) => (
                  <p key={i} className="mb-4">
                    Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                ))}
              </div>
            </ScrollArea>
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <ScrollAreaPropsTable />
          <p className="font-sans text-sm text-muted-foreground mt-2">
            Sub-component: <code className="font-mono">ScrollArea.ScrollBar</code>.
          </p>
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<ScrollArea className="h-[200px] w-[300px] border-2">
  <div className="p-4">
    {items.map(item => (
      <div key={item}>{item}</div>
    ))}
  </div>
</ScrollArea>

{/* Horizontal */}
<ScrollArea className="w-[500px]">
  <div className="flex gap-4" style={{ width: 1400 }}>
    {cards.map(card => <Card key={card} />)}
  </div>
  <ScrollArea.ScrollBar orientation="horizontal" />
</ScrollArea>`}</div>
        </section>
      </main>
    </div>
  );
}
