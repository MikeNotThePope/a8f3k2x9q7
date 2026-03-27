"use client";

import Link from "next/link";
import { Popover } from "@/components/ui/Popover";
import { Button } from "@/components/ui/Button";

function PropsTable() {
  const props = [
    { name: "side", type: '"top" | "right" | "bottom" | "left"', description: "Preferred side to render against the trigger" },
    { name: "sideOffset", type: "number", description: "Distance in pixels from the trigger (default: 4)" },
    { name: "align", type: '"start" | "center" | "end"', description: "Alignment against the trigger (default: center)" },
    { name: "modal", type: "boolean", description: "Whether the popover is modal (Root prop, default: false)" },
    { name: "className", type: "string", description: "Additional classes on the popover content" },
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

export default function PopoverPage() {
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
          <h1 className="font-head text-4xl mb-2">Popover</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A floating panel anchored to a trigger element for displaying rich content. Built on Radix Popover.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Basic --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic</h2>
          <Popover>
            <Popover.Trigger asChild>
              <Button>Open Popover</Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className="flex flex-col gap-2">
                <p className="font-head text-sm">Popover Title</p>
                <p className="font-sans text-sm text-muted-foreground">
                  This is popover content. It stays open until dismissed.
                </p>
              </div>
            </Popover.Content>
          </Popover>
        </section>

        {/* --- With Form --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Form</h2>
          <Popover>
            <Popover.Trigger asChild>
              <Button variant="outline">Edit Settings</Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className="flex flex-col gap-3">
                <p className="font-head text-sm">Settings</p>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs text-muted-foreground">Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="border-2 border-border bg-background px-3 py-1.5 font-sans text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs text-muted-foreground">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="border-2 border-border bg-background px-3 py-1.5 font-sans text-sm"
                  />
                </div>
                <Button size="sm" className="self-end">Save</Button>
              </div>
            </Popover.Content>
          </Popover>
        </section>

        {/* --- Sides --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sides</h2>
          <div className="flex gap-6 items-center py-8">
            {(["top", "right", "bottom", "left"] as const).map((side) => (
              <Popover key={side}>
                <Popover.Trigger asChild>
                  <Button variant="outline">{side}</Button>
                </Popover.Trigger>
                <Popover.Content side={side}>
                  <p className="font-sans text-sm">Popover on {side}</p>
                </Popover.Content>
              </Popover>
            ))}
          </div>
        </section>

        {/* --- With Close Button --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Close Button</h2>
          <Popover>
            <Popover.Trigger asChild>
              <Button>Dismissible</Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className="flex flex-col gap-2">
                <p className="font-head text-sm">Dismissible Popover</p>
                <p className="font-sans text-sm text-muted-foreground">
                  Click the button below to close this popover programmatically.
                </p>
                <Popover.Close asChild>
                  <Button size="sm" variant="outline">Close</Button>
                </Popover.Close>
              </div>
            </Popover.Content>
          </Popover>
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
                  { name: "Popover", desc: "Root provider (controls open/close state)" },
                  { name: "Popover.Trigger", desc: "Element that opens the popover on click" },
                  { name: "Popover.Content", desc: "The floating panel with content" },
                  { name: "Popover.Close", desc: "Element that closes the popover" },
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Popover>
  <Popover.Trigger asChild>
    <Button>Open</Button>
  </Popover.Trigger>
  <Popover.Content side="bottom">
    <p>Popover content here.</p>
    <Popover.Close asChild>
      <Button size="sm">Close</Button>
    </Popover.Close>
  </Popover.Content>
</Popover>`}</div>
        </section>
      </main>
    </div>
  );
}
