"use client";

import Link from "next/link";
import { Menu } from "@/components/ui";
import { Button } from "@/components/ui";

function PropsTable() {
  const subComponents = [
    { name: "Menu", props: "open, onOpenChange", description: "Root container (wraps Radix DropdownMenu)" },
    { name: "Menu.Trigger", props: "asChild, children", description: "Element that toggles the menu" },
    { name: "Menu.Content", props: "className, side, align", description: "The dropdown panel" },
    { name: "Menu.Item", props: "className, onSelect, disabled", description: "A selectable menu item" },
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

export default function MenuPage() {
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
          <h1 className="font-head text-4xl mb-2">Menu</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Dropdown menu for contextual actions. Built on Radix DropdownMenu.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Basic ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic</h2>
          <Menu>
            <Menu.Trigger asChild>
              <Button>Open Menu</Button>
            </Menu.Trigger>
            <Menu.Content>
              <Menu.Item>Edit</Menu.Item>
              <Menu.Item>Duplicate</Menu.Item>
              <Menu.Item>Archive</Menu.Item>
            </Menu.Content>
          </Menu>
        </section>

        {/* ─── With Disabled Items ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Disabled Items</h2>
          <Menu>
            <Menu.Trigger asChild>
              <Button variant="secondary">Actions</Button>
            </Menu.Trigger>
            <Menu.Content>
              <Menu.Item>View Details</Menu.Item>
              <Menu.Item>Export</Menu.Item>
              <Menu.Item disabled>Delete (disabled)</Menu.Item>
            </Menu.Content>
          </Menu>
        </section>

        {/* ─── Sub-components ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Menu>
  <Menu.Trigger asChild>
    <Button>Open Menu</Button>
  </Menu.Trigger>
  <Menu.Content>
    <Menu.Item>Edit</Menu.Item>
    <Menu.Item>Duplicate</Menu.Item>
    <Menu.Item disabled>Delete</Menu.Item>
  </Menu.Content>
</Menu>`}</div>
        </section>
      </main>
    </div>
  );
}
