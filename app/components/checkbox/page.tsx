"use client";

import Link from "next/link";
import { Checkbox, Label } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "variant", type: '"default" | "outline" | "solid"', description: "Visual style" },
    { name: "size", type: '"sm" | "md" | "lg"', description: "Checkbox size" },
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

export default function CheckboxPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Checkbox</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Toggle a single option on or off. Built on Radix Checkbox.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Variants ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Variants</h2>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-2">
              <Checkbox id="cb-default" defaultChecked />
              <Label htmlFor="cb-default">Default</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb-outline" variant="outline" defaultChecked />
              <Label htmlFor="cb-outline">Outline</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb-solid" variant="solid" defaultChecked />
              <Label htmlFor="cb-solid">Solid</Label>
            </div>
          </form>
        </section>

        {/* ─── Sizes ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sizes</h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox id="cb-sm" size="sm" defaultChecked />
              <Label htmlFor="cb-sm">Small</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb-md" size="md" defaultChecked />
              <Label htmlFor="cb-md">Medium</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="cb-lg" size="lg" defaultChecked />
              <Label htmlFor="cb-lg">Large</Label>
            </div>
          </div>
        </section>

        {/* ─── Form Example ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Form Example</h2>
          <form className="flex flex-col gap-4 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">I agree to the terms and conditions</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" defaultChecked />
              <Label htmlFor="remember">Remember me</Label>
            </div>
          </form>
        </section>

        {/* ─── Disabled ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled</h2>
          <div className="flex items-center gap-2">
            <Checkbox id="cb-disabled" disabled />
            <Label htmlFor="cb-disabled">Disabled</Label>
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Checkbox id="terms" />
<Label htmlFor="terms">I agree</Label>

<Checkbox variant="solid" size="lg" defaultChecked />
<Checkbox disabled />`}</div>
        </section>
      </main>
    </div>
  );
}
