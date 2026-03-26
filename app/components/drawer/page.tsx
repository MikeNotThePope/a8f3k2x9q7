"use client";

import Link from "next/link";
import { Drawer } from "@/components/ui";
import { Button } from "@/components/ui";

function PropsTable() {
  const subComponents = [
    { name: "Drawer", props: "direction, open, onOpenChange", description: "Root container (wraps vaul)" },
    { name: "Drawer.Trigger", props: "asChild, children", description: "Element that opens the drawer" },
    { name: "Drawer.Content", props: "className, children", description: "The slide-in panel" },
    { name: "Drawer.Header", props: "className, children", description: "Top section inside the panel" },
    { name: "Drawer.Footer", props: "className, children", description: "Bottom section inside the panel" },
    { name: "Drawer.Title", props: "className, children", description: "Accessible title for the drawer" },
    { name: "Drawer.Description", props: "className, children", description: "Accessible description" },
    { name: "Drawer.Close", props: "asChild, children", description: "Element that closes the drawer" },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Component</th>
            <th className="text-left p-3 font-head">Props</th>
            <th className="text-left p-3 font-head">Description</th>
          </tr>
        </thead>
        <tbody>
          {subComponents.map((sub) => (
            <tr key={sub.name} className="border-b last:border-b-0">
              <td className="p-3 font-mono text-xs">{sub.name}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{sub.props}</td>
              <td className="p-3">{sub.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DrawerPage() {
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
          <h1 className="font-head text-4xl mb-2">Drawer</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Slide-in panel from the left or right edge. Built on Vaul.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Right Drawer ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Right (default)</h2>
          <Drawer direction="right">
            <Drawer.Trigger asChild>
              <Button>Open Right Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Right Drawer</Drawer.Title>
                <Drawer.Description>This panel slides in from the right edge.</Drawer.Description>
              </Drawer.Header>
              <div className="p-4 font-sans text-sm">
                <p>Put any content here — forms, navigation, detail views.</p>
              </div>
              <Drawer.Footer>
                <Drawer.Close asChild>
                  <Button variant="outline">Close</Button>
                </Drawer.Close>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer>
        </section>

        {/* ─── Left Drawer ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Left</h2>
          <Drawer direction="left">
            <Drawer.Trigger asChild>
              <Button variant="secondary">Open Left Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Left Drawer</Drawer.Title>
                <Drawer.Description>This panel slides in from the left edge.</Drawer.Description>
              </Drawer.Header>
              <div className="p-4 font-sans text-sm">
                <p>Great for side navigation or filter panels.</p>
              </div>
              <Drawer.Footer>
                <Drawer.Close asChild>
                  <Button variant="outline">Close</Button>
                </Drawer.Close>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer>
        </section>

        {/* ─── Sub-components ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Drawer direction="right">
  <Drawer.Trigger asChild>
    <Button>Open</Button>
  </Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Title</Drawer.Title>
    </Drawer.Header>
    <div className="p-4">Content here</div>
    <Drawer.Footer>
      <Drawer.Close asChild>
        <Button variant="outline">Close</Button>
      </Drawer.Close>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer>`}</div>
        </section>
      </main>
    </div>
  );
}
