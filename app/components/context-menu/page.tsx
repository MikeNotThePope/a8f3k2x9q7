"use client";

import Link from "next/link";
import { useState } from "react";
import { ContextMenu } from "@/components/ui/ContextMenu";

function PropsTable() {
  const subComponents = [
    { name: "ContextMenu", type: "Root", description: "Wraps the trigger and content" },
    { name: "ContextMenu.Trigger", type: "Component", description: "Area that listens for right-click" },
    { name: "ContextMenu.Content", type: "Component", description: "Popover container for items" },
    { name: "ContextMenu.Item", type: "Component", description: "A single menu item" },
    { name: "ContextMenu.CheckboxItem", type: "Component", description: "Item with a checkbox indicator" },
    { name: "ContextMenu.RadioGroup", type: "Component", description: "Groups radio items together" },
    { name: "ContextMenu.RadioItem", type: "Component", description: "Item with a radio indicator" },
    { name: "ContextMenu.Label", type: "Component", description: "Non-interactive label for grouping" },
    { name: "ContextMenu.Separator", type: "Component", description: "Visual separator between items" },
    { name: "ContextMenu.Shortcut", type: "Component", description: "Displays a keyboard shortcut hint" },
    { name: "ContextMenu.Sub", type: "Component", description: "Wraps a sub-menu trigger and content" },
    { name: "ContextMenu.SubTrigger", type: "Component", description: "Item that opens a sub-menu" },
    { name: "ContextMenu.SubContent", type: "Component", description: "Content for the sub-menu" },
    { name: "ContextMenu.Group", type: "Component", description: "Groups related items" },
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

export default function ContextMenuPage() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Context Menu</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Right-click menu with items, sub-menus, checkboxes, and radio selections. Built on Radix Context Menu.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Default --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <ContextMenu>
            <ContextMenu.Trigger>
              <div className="flex h-40 w-80 items-center justify-center border-2 border-dashed text-sm font-sans text-muted-foreground">
                Right-click here
              </div>
            </ContextMenu.Trigger>
            <ContextMenu.Content className="w-64">
              <ContextMenu.Item>
                Back <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
              </ContextMenu.Item>
              <ContextMenu.Item disabled>
                Forward <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
              </ContextMenu.Item>
              <ContextMenu.Item>
                Reload <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
              </ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item>
                Save As... <ContextMenu.Shortcut>⌘S</ContextMenu.Shortcut>
              </ContextMenu.Item>
              <ContextMenu.Item>Print... <ContextMenu.Shortcut>⌘P</ContextMenu.Shortcut></ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu>
        </section>

        {/* --- With Sub-menu --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Sub-menu</h2>
          <ContextMenu>
            <ContextMenu.Trigger>
              <div className="flex h-40 w-80 items-center justify-center border-2 border-dashed text-sm font-sans text-muted-foreground">
                Right-click for sub-menus
              </div>
            </ContextMenu.Trigger>
            <ContextMenu.Content className="w-64">
              <ContextMenu.Item>
                New Tab <ContextMenu.Shortcut>⌘T</ContextMenu.Shortcut>
              </ContextMenu.Item>
              <ContextMenu.Item>
                New Window <ContextMenu.Shortcut>⌘N</ContextMenu.Shortcut>
              </ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>More Tools</ContextMenu.SubTrigger>
                <ContextMenu.SubContent className="w-48">
                  <ContextMenu.Item>Developer Tools</ContextMenu.Item>
                  <ContextMenu.Item>Task Manager</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Extensions</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>
              <ContextMenu.Separator />
              <ContextMenu.Item>
                Quit <ContextMenu.Shortcut>⌘Q</ContextMenu.Shortcut>
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu>
        </section>

        {/* --- Checkbox & Radio Items --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Checkbox & Radio Items</h2>
          <ContextMenu>
            <ContextMenu.Trigger>
              <div className="flex h-40 w-80 items-center justify-center border-2 border-dashed text-sm font-sans text-muted-foreground">
                Right-click for checkboxes & radios
              </div>
            </ContextMenu.Trigger>
            <ContextMenu.Content className="w-64">
              <ContextMenu.Label inset>Appearance</ContextMenu.Label>
              <ContextMenu.Separator />
              <ContextMenu.CheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
                Show Bookmarks Bar
              </ContextMenu.CheckboxItem>
              <ContextMenu.CheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
                Show Full URLs
              </ContextMenu.CheckboxItem>
              <ContextMenu.Separator />
              <ContextMenu.Label inset>People</ContextMenu.Label>
              <ContextMenu.Separator />
              <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
                <ContextMenu.RadioItem value="pedro">Pedro Duarte</ContextMenu.RadioItem>
                <ContextMenu.RadioItem value="colm">Colm Tuite</ContextMenu.RadioItem>
              </ContextMenu.RadioGroup>
            </ContextMenu.Content>
          </ContextMenu>
        </section>

        {/* --- Props --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <PropsTable />
        </section>

        {/* --- Usage --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<ContextMenu>
  <ContextMenu.Trigger>
    <div>Right-click here</div>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item>
      Back <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.CheckboxItem checked={checked} onCheckedChange={setChecked}>
      Show Bookmarks
    </ContextMenu.CheckboxItem>
    <ContextMenu.Sub>
      <ContextMenu.SubTrigger>More Tools</ContextMenu.SubTrigger>
      <ContextMenu.SubContent>
        <ContextMenu.Item>Extensions</ContextMenu.Item>
      </ContextMenu.SubContent>
    </ContextMenu.Sub>
  </ContextMenu.Content>
</ContextMenu>`}</div>
        </section>
      </main>
    </div>
  );
}
