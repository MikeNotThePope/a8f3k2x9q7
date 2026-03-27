"use client";

import Link from "next/link";
import { Sheet } from "@/components/ui/Sheet";
import { Button } from "@/components/ui/Button";

function PropsTable() {
  const props = [
    { name: "side", type: '"top" | "right" | "bottom" | "left"', description: "Side the sheet slides in from (default: right)" },
    { name: "className", type: "string", description: "Additional classes on the sheet content" },
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

export default function SheetPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Sheet</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Side panel overlay that slides in from any edge. Built on Radix Dialog.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default (Right) ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default (Right)</h2>
          <Sheet>
            <Sheet.Trigger asChild>
              <Button>Open Sheet</Button>
            </Sheet.Trigger>
            <Sheet.Content>
              <Sheet.Header>
                <Sheet.Title>Edit Profile</Sheet.Title>
                <Sheet.Description>
                  Make changes to your profile here. Click save when done.
                </Sheet.Description>
              </Sheet.Header>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <label className="font-head text-sm block mb-1">Name</label>
                  <input className="w-full border-2 border-border px-3 py-2 font-sans text-sm bg-background" defaultValue="John Doe" />
                </div>
                <div>
                  <label className="font-head text-sm block mb-1">Email</label>
                  <input className="w-full border-2 border-border px-3 py-2 font-sans text-sm bg-background" defaultValue="john@example.com" />
                </div>
              </div>
              <Sheet.Footer>
                <Button>Save Changes</Button>
              </Sheet.Footer>
            </Sheet.Content>
          </Sheet>
        </section>

        {/* ─── Sides ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sides</h2>
          <div className="flex flex-wrap gap-3">
            {(["top", "right", "bottom", "left"] as const).map((side) => (
              <Sheet key={side}>
                <Sheet.Trigger asChild>
                  <Button variant="outline">{side}</Button>
                </Sheet.Trigger>
                <Sheet.Content side={side}>
                  <Sheet.Header>
                    <Sheet.Title>Sheet: {side}</Sheet.Title>
                    <Sheet.Description>
                      This sheet slides in from the {side}.
                    </Sheet.Description>
                  </Sheet.Header>
                </Sheet.Content>
              </Sheet>
            ))}
          </div>
        </section>

        {/* ─── Navigation Example ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Use Case: Mobile Navigation</h2>
          <Sheet>
            <Sheet.Trigger asChild>
              <Button variant="outline">Open Menu</Button>
            </Sheet.Trigger>
            <Sheet.Content side="left">
              <Sheet.Header>
                <Sheet.Title>Navigation</Sheet.Title>
              </Sheet.Header>
              <nav className="flex flex-col gap-1 p-4">
                {["Home", "Dashboard", "Projects", "Settings", "Help"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="font-sans text-sm px-3 py-2 hover:bg-muted border-2 border-transparent hover:border-border transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </Sheet.Content>
          </Sheet>
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
                  { name: "Sheet", desc: "Root provider (controls open/close state)" },
                  { name: "Sheet.Trigger", desc: "Element that opens the sheet" },
                  { name: "Sheet.Content", desc: "The slide-in panel (accepts side prop)" },
                  { name: "Sheet.Header", desc: "Header area for title and description" },
                  { name: "Sheet.Title", desc: "Accessible title text" },
                  { name: "Sheet.Description", desc: "Accessible description text" },
                  { name: "Sheet.Footer", desc: "Bottom area for actions" },
                  { name: "Sheet.Close", desc: "Element that closes the sheet" },
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
          <h2 className="font-head text-2xl mb-4">Content Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Sheet>
  <Sheet.Trigger asChild>
    <Button>Open</Button>
  </Sheet.Trigger>
  <Sheet.Content side="right">
    <Sheet.Header>
      <Sheet.Title>Title</Sheet.Title>
      <Sheet.Description>Description here.</Sheet.Description>
    </Sheet.Header>
    <div className="p-4">Content</div>
    <Sheet.Footer>
      <Button>Save</Button>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet>`}</div>
        </section>
      </main>
    </div>
  );
}
