"use client";

import Link from "next/link";
import { HoverCard } from "@/components/ui/HoverCard";
import { Button } from "@/components/ui/Button";

function PropsTable() {
  const props = [
    { name: "side", type: '"top" | "right" | "bottom" | "left"', description: "Preferred side to render against the trigger" },
    { name: "sideOffset", type: "number", description: "Distance in pixels from the trigger (default: 4)" },
    { name: "align", type: '"start" | "center" | "end"', description: "Alignment against the trigger (default: center)" },
    { name: "openDelay", type: "number", description: "Delay in ms before the hover card opens (Root prop, default: 700)" },
    { name: "closeDelay", type: "number", description: "Delay in ms before the hover card closes (Root prop, default: 300)" },
    { name: "className", type: "string", description: "Additional classes on the hover card content" },
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

export default function HoverCardPage() {
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
          <h1 className="font-head text-4xl mb-2">HoverCard</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A card that appears on hover for previewing content. Built on Radix HoverCard.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Basic --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic</h2>
          <HoverCard>
            <HoverCard.Trigger asChild>
              <a
                href="#"
                className="font-head text-sm underline decoration-primary underline-offset-4"
              >
                Hover for details
              </a>
            </HoverCard.Trigger>
            <HoverCard.Content>
              <div className="flex flex-col gap-2">
                <p className="font-head text-sm">HoverCard Title</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Additional information shown on hover. Useful for previews and contextual info.
                </p>
              </div>
            </HoverCard.Content>
          </HoverCard>
        </section>

        {/* --- User Profile --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">User Profile</h2>
          <HoverCard>
            <HoverCard.Trigger asChild>
              <a
                href="#"
                className="font-head text-sm underline decoration-primary underline-offset-4"
              >
                @username
              </a>
            </HoverCard.Trigger>
            <HoverCard.Content>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 border-2 border-border bg-muted flex items-center justify-center font-head text-sm">
                    U
                  </div>
                  <div>
                    <p className="font-head text-sm">Username</p>
                    <p className="font-sans text-xs text-muted-foreground">@username</p>
                  </div>
                </div>
                <p className="font-sans text-sm text-muted-foreground">
                  Full-stack developer building premium interfaces.
                </p>
                <div className="flex gap-4 font-sans text-xs text-muted-foreground">
                  <span><strong className="text-foreground">128</strong> following</span>
                  <span><strong className="text-foreground">1.2k</strong> followers</span>
                </div>
              </div>
            </HoverCard.Content>
          </HoverCard>
        </section>

        {/* --- Sides --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sides</h2>
          <div className="flex gap-12 items-center py-8">
            {(["top", "right", "bottom", "left"] as const).map((side) => (
              <HoverCard key={side}>
                <HoverCard.Trigger asChild>
                  <a
                    href="#"
                    className="font-head text-sm underline decoration-primary underline-offset-4"
                  >
                    {side}
                  </a>
                </HoverCard.Trigger>
                <HoverCard.Content side={side}>
                  <p className="font-sans text-sm">Card on {side}</p>
                </HoverCard.Content>
              </HoverCard>
            ))}
          </div>
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
                  { name: "HoverCard", desc: "Root provider (controls open/close state and delays)" },
                  { name: "HoverCard.Trigger", desc: "The element that triggers the hover card" },
                  { name: "HoverCard.Content", desc: "The card displayed on hover" },
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<HoverCard>
  <HoverCard.Trigger asChild>
    <a href="#">Hover me</a>
  </HoverCard.Trigger>
  <HoverCard.Content side="bottom">
    <p>Preview content here.</p>
  </HoverCard.Content>
</HoverCard>`}</div>
        </section>
      </main>
    </div>
  );
}
