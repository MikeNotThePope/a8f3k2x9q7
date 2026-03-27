import type { Meta, StoryObj } from "@storybook/react-vite";
import type { DateRange } from "react-day-picker";
import { Calendar } from "./Calendar";
import * as React from "react";

const meta = {
  title: "Primitives/Calendar",
  component: Calendar,
} satisfies Meta<typeof Calendar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Calendar />,
};

export const WithSelected: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    );
  },
};

export const Range: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(2026, 2, 20),
      to: new Date(2026, 2, 27),
    });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
      />
    );
  },
};
