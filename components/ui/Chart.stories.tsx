import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";
import { Chart, type IChartConfig } from "./Chart";

const meta = {
  title: "Primitives/Chart",
  component: Chart.Container,
} satisfies Meta<typeof Chart.Container>;
export default meta;

type Story = StoryObj<typeof meta>;

const barData = [
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

export const BarChartExample: Story = {
  render: () => (
    <Chart.Container config={chartConfig} className="min-h-[300px] w-full">
      <BarChart data={barData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Chart.Tooltip content={<Chart.TooltipContent />} />
        <Chart.Legend content={<Chart.LegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
        <Bar dataKey="mobile" fill="var(--color-mobile)" />
      </BarChart>
    </Chart.Container>
  ),
};

export const LineChartExample: Story = {
  render: () => (
    <Chart.Container config={chartConfig} className="min-h-[300px] w-full">
      <LineChart data={barData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Chart.Tooltip content={<Chart.TooltipContent />} />
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
  ),
};

export const WithDashedIndicator: Story = {
  render: () => (
    <Chart.Container config={chartConfig} className="min-h-[300px] w-full">
      <BarChart data={barData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Chart.Tooltip
          content={<Chart.TooltipContent indicator="dashed" />}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
      </BarChart>
    </Chart.Container>
  ),
};
