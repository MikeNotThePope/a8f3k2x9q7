"use client";

import * as React from "react";
import type { DateRange } from "react-day-picker";
import Link from "next/link";
import { Calendar } from "@/components/ui/Calendar";

function PropsTable() {
  const props = [
    { name: "mode", type: "'single' | 'multiple' | 'range'", description: "Selection mode for the calendar." },
    { name: "selected", type: "Date | Date[] | DateRange", description: "Currently selected date(s)." },
    { name: "onSelect", type: "(date) => void", description: "Callback when selection changes." },
    { name: "showOutsideDays", type: "boolean", description: "Show days outside the current month. Default true." },
    { name: "disabled", type: "Matcher | Matcher[]", description: "Days that cannot be selected." },
    { name: "className", type: "string", description: "Additional classes for the root element." },
    { name: "classNames", type: "Partial<ClassNames>", description: "Override internal class names." },
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

function SingleDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col gap-2">
      <Calendar mode="single" selected={date} onSelect={setDate} />
      <p className="font-sans text-sm text-muted-foreground">
        Selected: {date ? date.toLocaleDateString() : "none"}
      </p>
    </div>
  );
}

function RangeDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 2, 20),
    to: new Date(2026, 2, 27),
  });
  return (
    <div className="flex flex-col gap-2">
      <Calendar mode="range" selected={range} onSelect={setRange} />
      <p className="font-sans text-sm text-muted-foreground">
        {range?.from
          ? `${range.from.toLocaleDateString()} - ${range.to?.toLocaleDateString() ?? "..."}`
          : "Pick a range"}
      </p>
    </div>
  );
}

export default function CalendarPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Calendar</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A date picker calendar component. Built on react-day-picker v9.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <Calendar />
        </section>

        {/* ─── Single Selection ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Single Selection</h2>
          <SingleDemo />
        </section>

        {/* ─── Range Selection ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Range Selection</h2>
          <RangeDemo />
        </section>

        {/* ─── Disabled Days ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled Weekends</h2>
          <Calendar
            mode="single"
            disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
          />
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { Calendar } from "@/components/ui/Calendar";

// Uncontrolled
<Calendar />

// Single selection
const [date, setDate] = useState<Date>();
<Calendar mode="single" selected={date} onSelect={setDate} />

// Range selection
const [range, setRange] = useState<DateRange>();
<Calendar mode="range" selected={range} onSelect={setRange} />

// Disable weekends
<Calendar disabled={(d) => d.getDay() === 0 || d.getDay() === 6} />`}</div>
        </section>
      </main>
    </div>
  );
}
