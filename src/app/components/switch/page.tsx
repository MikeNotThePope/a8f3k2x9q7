"use client";

import Link from "next/link";
import { Switch, Label } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "checked", type: "boolean", description: "Controlled checked state" },
    { name: "defaultChecked", type: "boolean", description: "Initial checked state" },
    { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Change handler" },
    { name: "disabled", type: "boolean", description: "Disable interaction" },
    { name: "className", type: "string", description: "Additional classes" },
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

export default function SwitchPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Switch</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Binary toggle for on/off settings. Built on Radix Switch.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-3">
              <Switch id="sw-default" />
              <Label htmlFor="sw-default">Airplane Mode</Label>
            </div>
          </form>
        </section>

        {/* ─── Checked ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Initially Checked</h2>
          <div className="flex items-center gap-3">
            <Switch id="sw-checked" defaultChecked />
            <Label htmlFor="sw-checked">Notifications</Label>
          </div>
        </section>

        {/* ─── Form Example ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Form Example</h2>
          <form className="flex flex-col gap-4 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-between border-2 p-4">
              <div>
                <Label htmlFor="sw-dark">Dark Mode</Label>
                <p className="font-sans text-xs text-muted-foreground">Use dark theme across the app</p>
              </div>
              <Switch id="sw-dark" />
            </div>
            <div className="flex items-center justify-between border-2 p-4">
              <div>
                <Label htmlFor="sw-email">Email Alerts</Label>
                <p className="font-sans text-xs text-muted-foreground">Receive email notifications</p>
              </div>
              <Switch id="sw-email" defaultChecked />
            </div>
            <div className="flex items-center justify-between border-2 p-4">
              <div>
                <Label htmlFor="sw-sms">SMS Alerts</Label>
                <p className="font-sans text-xs text-muted-foreground">Receive text messages</p>
              </div>
              <Switch id="sw-sms" />
            </div>
          </form>
        </section>

        {/* ─── Disabled ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled</h2>
          <div className="flex items-center gap-3">
            <Switch id="sw-disabled" disabled />
            <Label htmlFor="sw-disabled">Disabled</Label>
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Switch id="airplane" />
<Label htmlFor="airplane">Airplane Mode</Label>

<Switch defaultChecked />
<Switch disabled />`}</div>
        </section>
      </main>
    </div>
  );
}
