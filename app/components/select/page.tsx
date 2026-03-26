"use client";

import Link from "next/link";
import { Select, Label } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "defaultValue", type: "string", description: "Initially selected value" },
    { name: "value", type: "string", description: "Controlled value" },
    { name: "onValueChange", type: "(value: string) => void", description: "Change handler" },
    { name: "disabled", type: "boolean", description: "Disable interaction" },
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

export default function SelectPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Select</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Dropdown picker for choosing from a list. Built on Radix Select.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label>Fruit</Label>
            <Select defaultValue="apple">
              <Select.Trigger>
                <Select.Value placeholder="Pick a fruit" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="banana">Banana</Select.Item>
                <Select.Item value="cherry">Cherry</Select.Item>
                <Select.Item value="grape">Grape</Select.Item>
              </Select.Content>
            </Select>
          </form>
        </section>

        {/* ─── With Groups ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Grouped Items</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label>Country</Label>
            <Select>
              <Select.Trigger>
                <Select.Value placeholder="Select a country" />
              </Select.Trigger>
              <Select.Content>
                <Select.Group>
                  <Select.Label className="px-2 py-1.5 font-head text-xs text-muted-foreground">North America</Select.Label>
                  <Select.Item value="us">United States</Select.Item>
                  <Select.Item value="ca">Canada</Select.Item>
                  <Select.Item value="mx">Mexico</Select.Item>
                </Select.Group>
                <Select.Separator className="border-t my-1" />
                <Select.Group>
                  <Select.Label className="px-2 py-1.5 font-head text-xs text-muted-foreground">Europe</Select.Label>
                  <Select.Item value="uk">United Kingdom</Select.Item>
                  <Select.Item value="de">Germany</Select.Item>
                  <Select.Item value="fr">France</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select>
          </form>
        </section>

        {/* ─── Disabled ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled</h2>
          <Select disabled>
            <Select.Trigger className="max-w-sm">
              <Select.Value placeholder="Disabled" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="a">A</Select.Item>
            </Select.Content>
          </Select>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
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
                  { name: "Select.Trigger", desc: "Button that opens the dropdown" },
                  { name: "Select.Value", desc: "Displays the selected value" },
                  { name: "Select.Content", desc: "Dropdown content container" },
                  { name: "Select.Item", desc: "Selectable option (requires value prop)" },
                  { name: "Select.Group", desc: "Groups related items" },
                  { name: "Select.Label", desc: "Non-interactive label within a group" },
                  { name: "Select.Separator", desc: "Visual divider between groups" },
                ].map((item) => (
                  <tr key={item.name} className="border-b last:border-b-0">
                    <td className="p-3 font-mono text-xs">{item.name}</td>
                    <td className="p-3">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Select defaultValue="apple">
  <Select.Trigger>
    <Select.Value placeholder="Pick a fruit" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="apple">Apple</Select.Item>
    <Select.Item value="banana">Banana</Select.Item>
  </Select.Content>
</Select>`}</div>
        </section>
      </main>
    </div>
  );
}
