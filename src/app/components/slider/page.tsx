"use client";

import Link from "next/link";
import { useState } from "react";
import { Slider, Label } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "defaultValue", type: "number[]", description: "Initial value(s)" },
    { name: "value", type: "number[]", description: "Controlled value(s)" },
    { name: "onValueChange", type: "(value: number[]) => void", description: "Change handler" },
    { name: "min", type: "number", description: "Minimum value (default 0)" },
    { name: "max", type: "number", description: "Maximum value (default 100)" },
    { name: "step", type: "number", description: "Step increment (default 1)" },
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

export default function SliderPage() {
  const [volume, setVolume] = useState([50]);
  const [range, setRange] = useState([25, 75]);

  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Slider</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Range input for selecting numeric values. Built on Radix Slider.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label>Brightness</Label>
            <Slider defaultValue={[50]} />
          </form>
        </section>

        {/* ─── With Live Value ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Live Value</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center justify-between">
              <Label>Volume</Label>
              <span className="font-mono text-sm text-muted-foreground">{volume[0]}%</span>
            </div>
            <Slider value={volume} onValueChange={setVolume} />
          </form>
        </section>

        {/* ─── Custom Range ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Min/Max/Step</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label>Temperature (0-40, step 5)</Label>
            <Slider defaultValue={[20]} min={0} max={40} step={5} />
          </form>
        </section>

        {/* ─── Disabled ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled</h2>
          <div className="max-w-sm">
            <Slider defaultValue={[30]} disabled />
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Slider defaultValue={[50]} />
<Slider defaultValue={[20]} min={0} max={40} step={5} />
<Slider value={volume} onValueChange={setVolume} />
<Slider disabled />`}</div>
        </section>
      </main>
    </div>
  );
}
