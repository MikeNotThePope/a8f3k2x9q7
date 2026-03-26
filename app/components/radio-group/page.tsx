"use client";

import Link from "next/link";
import { RadioGroup, Label } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "defaultValue", type: "string", description: "Initially selected value" },
    { name: "value", type: "string", description: "Controlled selected value" },
    { name: "onValueChange", type: "(value: string) => void", description: "Change handler" },
    { name: "disabled", type: "boolean", description: "Disable all items" },
    { name: "className", type: "string", description: "Additional classes on root" },
  ];

  const itemProps = [
    { name: "value", type: "string", description: "Value for this item (required)" },
    { name: "variant", type: '"default" | "outline" | "solid"', description: "Visual style" },
    { name: "size", type: '"sm" | "md" | "lg"', description: "Radio size" },
    { name: "disabled", type: "boolean", description: "Disable this item" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="font-head text-lg mb-2">RadioGroup</h3>
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
      </div>
      <div>
        <h3 className="font-head text-lg mb-2">RadioGroup.Item</h3>
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
              {itemProps.map((prop) => (
                <tr key={prop.name} className="border-b last:border-b-0">
                  <td className="p-3 font-mono text-xs">{prop.name}</td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">{prop.type}</td>
                  <td className="p-3">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function RadioGroupPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">RadioGroup</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Select one option from a set. Built on Radix Radio Group.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <RadioGroup defaultValue="option-1">
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="option-1" id="r1" />
                <Label htmlFor="r1">Option One</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="option-2" id="r2" />
                <Label htmlFor="r2">Option Two</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="option-3" id="r3" />
                <Label htmlFor="r3">Option Three</Label>
              </div>
            </RadioGroup>
          </form>
        </section>

        {/* ─── Variants ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Variants</h2>
          <div className="flex flex-wrap gap-12">
            <div>
              <h3 className="font-head text-sm mb-3">Default</h3>
              <RadioGroup defaultValue="a">
                <div className="flex items-center gap-2">
                  <RadioGroup.Item value="a" id="rd1" />
                  <Label htmlFor="rd1">Alpha</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroup.Item value="b" id="rd2" />
                  <Label htmlFor="rd2">Beta</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h3 className="font-head text-sm mb-3">Outline</h3>
              <RadioGroup defaultValue="a">
                <div className="flex items-center gap-2">
                  <RadioGroup.Item value="a" id="ro1" variant="outline" />
                  <Label htmlFor="ro1">Alpha</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroup.Item value="b" id="ro2" variant="outline" />
                  <Label htmlFor="ro2">Beta</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h3 className="font-head text-sm mb-3">Solid</h3>
              <RadioGroup defaultValue="a">
                <div className="flex items-center gap-2">
                  <RadioGroup.Item value="a" id="rs1" variant="solid" />
                  <Label htmlFor="rs1">Alpha</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroup.Item value="b" id="rs2" variant="solid" />
                  <Label htmlFor="rs2">Beta</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* ─── Sizes ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sizes</h2>
          <div className="flex flex-wrap gap-12">
            <div>
              <h3 className="font-head text-sm mb-3">Small</h3>
              <RadioGroup defaultValue="a">
                <div className="flex items-center gap-2">
                  <RadioGroup.Item value="a" id="rss1" size="sm" />
                  <Label htmlFor="rss1">Small</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h3 className="font-head text-sm mb-3">Medium</h3>
              <RadioGroup defaultValue="a">
                <div className="flex items-center gap-2">
                  <RadioGroup.Item value="a" id="rsm1" size="md" />
                  <Label htmlFor="rsm1">Medium</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <h3 className="font-head text-sm mb-3">Large</h3>
              <RadioGroup defaultValue="a">
                <div className="flex items-center gap-2">
                  <RadioGroup.Item value="a" id="rsl1" size="lg" />
                  <Label htmlFor="rsl1">Large</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* ─── Form Example ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Form Example</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label>Preferred contact method</Label>
            <RadioGroup defaultValue="email">
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="email" id="contact-email" />
                <Label htmlFor="contact-email">Email</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="phone" id="contact-phone" />
                <Label htmlFor="contact-phone">Phone</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="mail" id="contact-mail" />
                <Label htmlFor="contact-mail">Mail</Label>
              </div>
            </RadioGroup>
          </form>
        </section>

        {/* ─── Disabled ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled</h2>
          <RadioGroup defaultValue="a" disabled>
            <div className="flex items-center gap-2">
              <RadioGroup.Item value="a" id="rdis1" />
              <Label htmlFor="rdis1">Disabled option</Label>
            </div>
          </RadioGroup>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<RadioGroup defaultValue="option-1">
  <div className="flex items-center gap-2">
    <RadioGroup.Item value="option-1" id="r1" />
    <Label htmlFor="r1">Option One</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroup.Item value="option-2" id="r2" />
    <Label htmlFor="r2">Option Two</Label>
  </div>
</RadioGroup>`}</div>
        </section>
      </main>
    </div>
  );
}
