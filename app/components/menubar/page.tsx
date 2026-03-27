"use client";

import Link from "next/link";
import { useState } from "react";
import { Menubar } from "@/components/ui/Menubar";

function PropsTable() {
  const subComponents = [
    { name: "Menubar", type: "Root", description: "Horizontal bar that contains menu triggers" },
    { name: "Menubar.Menu", type: "Component", description: "Wraps a single top-level menu" },
    { name: "Menubar.Trigger", type: "Component", description: "Button that opens a menu" },
    { name: "Menubar.Content", type: "Component", description: "Popover container for items" },
    { name: "Menubar.Item", type: "Component", description: "A single menu item" },
    { name: "Menubar.CheckboxItem", type: "Component", description: "Item with a checkbox indicator" },
    { name: "Menubar.RadioGroup", type: "Component", description: "Groups radio items together" },
    { name: "Menubar.RadioItem", type: "Component", description: "Item with a radio indicator" },
    { name: "Menubar.Label", type: "Component", description: "Non-interactive label for grouping" },
    { name: "Menubar.Separator", type: "Component", description: "Visual separator between items" },
    { name: "Menubar.Shortcut", type: "Component", description: "Displays a keyboard shortcut hint" },
    { name: "Menubar.Sub", type: "Component", description: "Wraps a sub-menu trigger and content" },
    { name: "Menubar.SubTrigger", type: "Component", description: "Item that opens a sub-menu" },
    { name: "Menubar.SubContent", type: "Component", description: "Content for the sub-menu" },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Sub-component</th>
            <th className="text-left p-3 font-head">Type</th>
            <th className="text-left p-3 font-head">Description</th>
          </tr>
        </thead>
        <tbody>
          {subComponents.map((item) => (
            <tr key={item.name} className="border-b last:border-b-0">
              <td className="p-3 font-mono text-xs">{item.name}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{item.type}</td>
              <td className="p-3">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MenubarPage() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [font, setFont] = useState("inter");

  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Menubar</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Horizontal menu bar with File, Edit, and View style menus. Built on Radix Menubar.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Default --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <Menubar>
            <Menubar.Menu>
              <Menubar.Trigger>File</Menubar.Trigger>
              <Menubar.Content>
                <Menubar.Item>
                  New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Item>
                  New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Item disabled>New Incognito Window</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Sub>
                  <Menubar.SubTrigger>Share</Menubar.SubTrigger>
                  <Menubar.SubContent>
                    <Menubar.Item>Email Link</Menubar.Item>
                    <Menubar.Item>Messages</Menubar.Item>
                    <Menubar.Item>Airdrop</Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Sub>
                <Menubar.Separator />
                <Menubar.Item>
                  Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
                </Menubar.Item>
              </Menubar.Content>
            </Menubar.Menu>

            <Menubar.Menu>
              <Menubar.Trigger>Edit</Menubar.Trigger>
              <Menubar.Content>
                <Menubar.Item>
                  Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Item>
                  Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>
                  Cut <Menubar.Shortcut>⌘X</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Item>
                  Copy <Menubar.Shortcut>⌘C</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Item>
                  Paste <Menubar.Shortcut>⌘V</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>
                  Select All <Menubar.Shortcut>⌘A</Menubar.Shortcut>
                </Menubar.Item>
              </Menubar.Content>
            </Menubar.Menu>

            <Menubar.Menu>
              <Menubar.Trigger>View</Menubar.Trigger>
              <Menubar.Content>
                <Menubar.CheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
                  Show Bookmarks
                </Menubar.CheckboxItem>
                <Menubar.CheckboxItem checked={showFullUrls} onCheckedChange={setShowFullUrls}>
                  Show Full URLs
                </Menubar.CheckboxItem>
                <Menubar.CheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
                  Show Status Bar
                </Menubar.CheckboxItem>
                <Menubar.Separator />
                <Menubar.Label inset>Font</Menubar.Label>
                <Menubar.Separator />
                <Menubar.RadioGroup value={font} onValueChange={setFont}>
                  <Menubar.RadioItem value="inter">Inter</Menubar.RadioItem>
                  <Menubar.RadioItem value="mono">JetBrains Mono</Menubar.RadioItem>
                  <Menubar.RadioItem value="serif">Merriweather</Menubar.RadioItem>
                </Menubar.RadioGroup>
              </Menubar.Content>
            </Menubar.Menu>
          </Menubar>
        </section>

        {/* --- Minimal --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Minimal</h2>
          <Menubar>
            <Menubar.Menu>
              <Menubar.Trigger>File</Menubar.Trigger>
              <Menubar.Content>
                <Menubar.Item>New <Menubar.Shortcut>⌘N</Menubar.Shortcut></Menubar.Item>
                <Menubar.Item>Open <Menubar.Shortcut>⌘O</Menubar.Shortcut></Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>Save <Menubar.Shortcut>⌘S</Menubar.Shortcut></Menubar.Item>
              </Menubar.Content>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>Edit</Menubar.Trigger>
              <Menubar.Content>
                <Menubar.Item>Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut></Menubar.Item>
                <Menubar.Item>Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut></Menubar.Item>
              </Menubar.Content>
            </Menubar.Menu>
          </Menubar>
        </section>

        {/* --- Props --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <PropsTable />
        </section>

        {/* --- Usage --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Menubar>
  <Menubar.Menu>
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item>
        New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Separator />
      <Menubar.Sub>
        <Menubar.SubTrigger>Share</Menubar.SubTrigger>
        <Menubar.SubContent>
          <Menubar.Item>Email Link</Menubar.Item>
        </Menubar.SubContent>
      </Menubar.Sub>
    </Menubar.Content>
  </Menubar.Menu>

  <Menubar.Menu>
    <Menubar.Trigger>View</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.CheckboxItem checked={checked} onCheckedChange={setChecked}>
        Show Bookmarks
      </Menubar.CheckboxItem>
      <Menubar.RadioGroup value={font} onValueChange={setFont}>
        <Menubar.RadioItem value="inter">Inter</Menubar.RadioItem>
      </Menubar.RadioGroup>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar>`}</div>
        </section>
      </main>
    </div>
  );
}
