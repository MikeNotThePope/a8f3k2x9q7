"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/Progress";

function ProgressPropsTable() {
  const props = [
    { name: "value", type: "number", description: "Current progress value (0-100)." },
    { name: "max", type: "number", description: "Maximum value. Defaults to 100." },
    { name: "className", type: "string", description: "Additional classes on the root track element." },
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

function AnimatedProgress() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md">
      <p className="font-sans text-sm mb-2">Uploading... {value}%</p>
      <Progress value={value} />
    </div>
  );
}

export default function ProgressPage() {
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
          <h1 className="font-head text-4xl mb-2">Progress</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A horizontal bar indicating completion or loading progress. Built on Radix Progress.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Basic ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            A static progress bar at 45%.
          </p>
          <div className="border-2 p-6 max-w-md">
            <Progress value={45} />
          </div>
        </section>

        {/* ─── Stages ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Multiple Stages</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Show different completion levels with labels.
          </p>
          <div className="border-2 p-6 max-w-md flex flex-col gap-4">
            <div>
              <p className="font-sans text-sm mb-1">Upload: 25%</p>
              <Progress value={25} />
            </div>
            <div>
              <p className="font-sans text-sm mb-1">Processing: 60%</p>
              <Progress value={60} />
            </div>
            <div>
              <p className="font-sans text-sm mb-1">Complete: 100%</p>
              <Progress value={100} />
            </div>
          </div>
        </section>

        {/* ─── Animated ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Animated</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Drive the value with state to create a live progress indicator.
          </p>
          <div className="border-2 p-6">
            <AnimatedProgress />
          </div>
        </section>

        {/* ─── Empty and Full ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Edge Cases</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Empty (0%) and full (100%) states.
          </p>
          <div className="border-2 p-6 max-w-md flex flex-col gap-4">
            <div>
              <p className="font-sans text-sm mb-1">Empty</p>
              <Progress value={0} />
            </div>
            <div>
              <p className="font-sans text-sm mb-1">Full</p>
              <Progress value={100} />
            </div>
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <ProgressPropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`{/* Static */}
<Progress value={45} />

{/* With label */}
<div>
  <p className="text-sm mb-1">Uploading... 60%</p>
  <Progress value={60} />
</div>

{/* Animated with state */}
const [value, setValue] = useState(0);
useEffect(() => {
  const id = setInterval(() =>
    setValue(prev => prev >= 100 ? 0 : prev + 2), 100);
  return () => clearInterval(id);
}, []);

<Progress value={value} />`}</div>
        </section>
      </main>
    </div>
  );
}
