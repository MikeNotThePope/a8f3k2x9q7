"use client";

import Link from "next/link";
import { Marquee } from "@/components/ui/Marquee";

function PropsTable() {
  const props = [
    { name: "items", type: "string[]", description: "Array of text items to scroll" },
    { name: "speed", type: "number", description: "Animation duration in seconds (default: 20)" },
    { name: "pauseOnHover", type: "boolean", description: "Pause scrolling when hovering (default: false)" },
    { name: "reverse", type: "boolean", description: "Reverse the scroll direction (default: false)" },
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

export default function MarqueePage() {
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
          <h1 className="font-head text-4xl mb-2">Marquee</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Continuously scrolling text banner with configurable speed and direction. Pure CSS animation.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <Marquee
            items={[
              "Substrate UI",
              "Neobrutalism",
              "Bold Design",
              "Sharp Corners",
              "Hard Shadows",
              "High Contrast",
            ]}
          />
        </section>

        {/* ─── Fast ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Fast Speed</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Set <code className="font-mono bg-muted px-1">speed=8</code> for a faster scroll.
          </p>
          <Marquee
            items={["BREAKING NEWS", "LIVE UPDATE", "JUST IN", "ALERT", "FLASH"]}
            speed={8}
          />
        </section>

        {/* ─── Reverse ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Reversed</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Set <code className="font-mono bg-muted px-1">reverse</code> to scroll right-to-left.
          </p>
          <Marquee
            items={["React", "Next.js", "Tailwind", "TypeScript", "Radix", "Storybook"]}
            reverse
          />
        </section>

        {/* ─── Pause on Hover ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Pause on Hover</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Hover over the marquee to pause the animation.
          </p>
          <Marquee
            items={[
              "Hover to pause",
              "Release to resume",
              "Smooth animation",
              "Interactive marquee",
            ]}
            pauseOnHover
            speed={15}
          />
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Marquee
  items={["Item One", "Item Two", "Item Three"]}
  speed={15}
  pauseOnHover
  reverse
/>`}</div>
        </section>
      </main>
    </div>
  );
}
