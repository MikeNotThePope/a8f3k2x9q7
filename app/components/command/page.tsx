"use client";

import { useState } from "react";
import Link from "next/link";
import { Command } from "@/components/ui/Command";
import { Button } from "@/components/ui/Button";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

function CommandDialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
      <p className="font-sans text-xs text-muted-foreground mt-2">
        Or press <kbd className="font-mono border-2 border-border px-1.5 py-0.5 text-xs bg-muted">Ctrl+K</kbd>
      </p>
      <Command.Dialog open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>
              <Calendar className="mr-2 size-4" />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <Smile className="mr-2 size-4" />
              <span>Search Emoji</span>
            </Command.Item>
            <Command.Item>
              <Calculator className="mr-2 size-4" />
              <span>Calculator</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>
              <User className="mr-2 size-4" />
              <span>Profile</span>
              <Command.Shortcut>&#8984;P</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <Settings className="mr-2 size-4" />
              <span>Settings</span>
              <Command.Shortcut>&#8984;S</Command.Shortcut>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}

function PropsTable() {
  const props = [
    { name: "title", type: "string", description: "Dialog title for accessibility (default: Command Palette)" },
    { name: "description", type: "string", description: "Dialog description for accessibility" },
    { name: "open", type: "boolean", description: "Controlled open state" },
    { name: "onOpenChange", type: "(open: boolean) => void", description: "Open state change handler" },
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

export default function CommandPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Command</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Command palette for searching and executing actions. Built on cmdk with Dialog integration.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Inline ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Inline</h2>
          <div className="max-w-md">
            <Command>
              <Command.Input placeholder="Type a command or search..." />
              <Command.List>
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading="Suggestions">
                  <Command.Item>
                    <Calendar className="mr-2 size-4" />
                    <span>Calendar</span>
                  </Command.Item>
                  <Command.Item>
                    <Smile className="mr-2 size-4" />
                    <span>Search Emoji</span>
                  </Command.Item>
                  <Command.Item>
                    <Calculator className="mr-2 size-4" />
                    <span>Calculator</span>
                  </Command.Item>
                </Command.Group>
                <Command.Separator />
                <Command.Group heading="Settings">
                  <Command.Item>
                    <User className="mr-2 size-4" />
                    <span>Profile</span>
                    <Command.Shortcut>&#8984;P</Command.Shortcut>
                  </Command.Item>
                  <Command.Item>
                    <CreditCard className="mr-2 size-4" />
                    <span>Billing</span>
                    <Command.Shortcut>&#8984;B</Command.Shortcut>
                  </Command.Item>
                  <Command.Item>
                    <Settings className="mr-2 size-4" />
                    <span>Settings</span>
                    <Command.Shortcut>&#8984;S</Command.Shortcut>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </div>
        </section>

        {/* ─── Dialog ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Dialog Variant</h2>
          <CommandDialogDemo />
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
                  { name: "Command", desc: "Root command container" },
                  { name: "Command.Dialog", desc: "Command inside a modal dialog" },
                  { name: "Command.Input", desc: "Search input with icon" },
                  { name: "Command.List", desc: "Scrollable results list" },
                  { name: "Command.Empty", desc: "Shown when no results match" },
                  { name: "Command.Group", desc: "Labeled group of items" },
                  { name: "Command.Item", desc: "Selectable command item" },
                  { name: "Command.Separator", desc: "Visual divider between groups" },
                  { name: "Command.Shortcut", desc: "Keyboard shortcut label" },
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

        {/* ─── Dialog Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Dialog Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`{/* Inline */}
<Command>
  <Command.Input placeholder="Search..." />
  <Command.List>
    <Command.Empty>No results.</Command.Empty>
    <Command.Group heading="Actions">
      <Command.Item>Profile</Command.Item>
      <Command.Item>Settings</Command.Item>
    </Command.Group>
  </Command.List>
</Command>

{/* Dialog */}
<Command.Dialog open={open} onOpenChange={setOpen}>
  <Command.Input placeholder="Search..." />
  <Command.List>
    <Command.Group heading="Actions">
      <Command.Item>Profile</Command.Item>
    </Command.Group>
  </Command.List>
</Command.Dialog>`}</div>
        </section>
      </main>
    </div>
  );
}
