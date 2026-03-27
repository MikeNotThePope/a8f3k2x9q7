"use client";

import Link from "next/link";
import { useState } from "react";
import { DropdownMenu } from "@/components/ui/DropdownMenu";

function PropsTable() {
  const subComponents = [
    { name: "DropdownMenu", type: "Root", description: "Wraps the trigger and content" },
    { name: "DropdownMenu.Trigger", type: "Component", description: "Element that toggles the menu" },
    { name: "DropdownMenu.Content", type: "Component", description: "Popover container for items" },
    { name: "DropdownMenu.Item", type: "Component", description: "A single menu item" },
    { name: "DropdownMenu.CheckboxItem", type: "Component", description: "Item with a checkbox indicator" },
    { name: "DropdownMenu.RadioGroup", type: "Component", description: "Groups radio items together" },
    { name: "DropdownMenu.RadioItem", type: "Component", description: "Item with a radio indicator" },
    { name: "DropdownMenu.Label", type: "Component", description: "Non-interactive label for grouping" },
    { name: "DropdownMenu.Separator", type: "Component", description: "Visual separator between items" },
    { name: "DropdownMenu.Shortcut", type: "Component", description: "Displays a keyboard shortcut hint" },
    { name: "DropdownMenu.Sub", type: "Component", description: "Wraps a sub-menu trigger and content" },
    { name: "DropdownMenu.SubTrigger", type: "Component", description: "Item that opens a sub-menu" },
    { name: "DropdownMenu.SubContent", type: "Component", description: "Content for the sub-menu" },
    { name: "DropdownMenu.Group", type: "Component", description: "Groups related items" },
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

export default function DropdownMenuPage() {
  const [statusBarChecked, setStatusBarChecked] = useState(true);
  const [activityBarChecked, setActivityBarChecked] = useState(false);
  const [panelChecked, setPanelChecked] = useState(false);
  const [theme, setTheme] = useState("system");

  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Dropdown Menu</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Triggered menu with items, checkboxes, radios, and sub-menus. Built on Radix Dropdown Menu.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Default --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <button className="border-2 px-4 py-2 text-sm font-sans hover:bg-muted transition-colors">
                Open Menu
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Label>My Account</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  Profile <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  Billing <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  Settings <DropdownMenu.Shortcut>⌘,</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                Log out <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </section>

        {/* --- With Sub-menu --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Sub-menu</h2>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <button className="border-2 px-4 py-2 text-sm font-sans hover:bg-muted transition-colors">
                Options
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Item>New File <DropdownMenu.Shortcut>⌘N</DropdownMenu.Shortcut></DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Email</DropdownMenu.Item>
                  <DropdownMenu.Item>Message</DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Copy Link</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Delete <DropdownMenu.Shortcut>⌘⌫</DropdownMenu.Shortcut></DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </section>

        {/* --- Checkbox & Radio Items --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Checkbox & Radio Items</h2>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <button className="border-2 px-4 py-2 text-sm font-sans hover:bg-muted transition-colors">
                View
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Label>Panels</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.CheckboxItem checked={statusBarChecked} onCheckedChange={setStatusBarChecked}>
                Status Bar
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem checked={activityBarChecked} onCheckedChange={setActivityBarChecked}>
                Activity Bar
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem checked={panelChecked} onCheckedChange={setPanelChecked}>
                Panel
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.Separator />
              <DropdownMenu.Label>Theme</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
                <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>
            </DropdownMenu.Content>
          </DropdownMenu>
        </section>

        {/* --- Props --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <PropsTable />
        </section>

        {/* --- Usage --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<DropdownMenu>
  <DropdownMenu.Trigger asChild>
    <button>Open Menu</button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Label>My Account</DropdownMenu.Label>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>
      Profile <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
    </DropdownMenu.Item>
    <DropdownMenu.CheckboxItem checked={checked} onCheckedChange={setChecked}>
      Status Bar
    </DropdownMenu.CheckboxItem>
    <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
      <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
    </DropdownMenu.RadioGroup>
  </DropdownMenu.Content>
</DropdownMenu>`}</div>
        </section>
      </main>
    </div>
  );
}
