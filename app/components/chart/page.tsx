"use client";

import Link from "next/link";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Chart, type IChartConfig } from "@/components/ui/Chart";

const sampleData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const chartConfig: IChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-muted-foreground)",
  },
};

function PropsTable() {
  const props = [
    { name: "config", type: "ChartConfig", description: "Object mapping data keys to labels, icons, and colors/themes" },
    { name: "children", type: "ReactNode", description: "Recharts chart component (BarChart, LineChart, etc.)" },
    { name: "className", type: "string", description: "Additional classes on the container" },
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

export default function ChartPage() {
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
          <h1 className="font-head text-4xl mb-2">Chart</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Themed chart wrapper with tooltip and legend components. Built on recharts.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Bar Chart --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Bar Chart</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            A grouped bar chart with tooltip and legend.
          </p>
          <div className="border-2 border-border p-6">
            <Chart.Container config={chartConfig} className="min-h-[300px] w-full">
              <BarChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Chart.Tooltip content={<Chart.TooltipContent />} />
                <Chart.Legend content={<Chart.LegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" />
                <Bar dataKey="mobile" fill="var(--color-mobile)" />
              </BarChart>
            </Chart.Container>
          </div>
        </section>

        {/* --- Line Chart --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Line Chart</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            A line chart using the same config and data.
          </p>
          <div className="border-2 border-border p-6">
            <Chart.Container config={chartConfig} className="min-h-[300px] w-full">
              <LineChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Chart.Tooltip content={<Chart.TooltipContent indicator="line" />} />
                <Chart.Legend content={<Chart.LegendContent />} />
                <Line
                  type="monotone"
                  dataKey="desktop"
                  stroke="var(--color-desktop)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="mobile"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                />
              </LineChart>
            </Chart.Container>
          </div>
        </section>

        {/* --- Tooltip Indicators --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Tooltip Indicators</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            The tooltip supports <code className="font-mono text-xs bg-muted px-1 py-0.5">dot</code>,{" "}
            <code className="font-mono text-xs bg-muted px-1 py-0.5">line</code>, and{" "}
            <code className="font-mono text-xs bg-muted px-1 py-0.5">dashed</code> indicator styles.
          </p>
          <div className="border-2 border-border p-6">
            <Chart.Container config={chartConfig} className="min-h-[300px] w-full">
              <BarChart data={sampleData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Chart.Tooltip content={<Chart.TooltipContent indicator="dashed" />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" />
              </BarChart>
            </Chart.Container>
          </div>
        </section>

        {/* --- Props --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* --- Usage --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { Chart, type IChartConfig } from "@/components/ui";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const config: IChartConfig = {
  desktop: { label: "Desktop", color: "var(--color-primary)" },
};

<Chart.Container config={config}>
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <Chart.Tooltip content={<Chart.TooltipContent />} />
    <Chart.Legend content={<Chart.LegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" />
  </BarChart>
</Chart.Container>`}</div>
        </section>
      </main>
    </div>
  );
}
