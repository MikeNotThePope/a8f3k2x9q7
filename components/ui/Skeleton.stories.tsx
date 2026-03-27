import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "./Skeleton";

const meta = {
  title: "Primitives/Skeleton",
  component: Skeleton,
  argTypes: {},
} satisfies Meta<typeof Skeleton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: 320 }}>
      <Skeleton style={{ height: 20, width: "80%" }} />
      <Skeleton style={{ height: 20, width: "60%" }} />
      <Skeleton style={{ height: 20, width: "90%" }} />
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ width: 320 }} className="border-2 border-border p-4 flex flex-col gap-3">
      <Skeleton style={{ height: 160 }} className="w-full" />
      <Skeleton style={{ height: 20, width: "70%" }} />
      <Skeleton style={{ height: 14, width: "90%" }} />
      <Skeleton style={{ height: 14, width: "50%" }} />
    </div>
  ),
};

export const AvatarWithText: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Skeleton style={{ height: 48, width: 48 }} className="shrink-0" />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
        <Skeleton style={{ height: 16, width: "40%" }} />
        <Skeleton style={{ height: 14, width: "70%" }} />
      </div>
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div style={{ width: 480 }} className="flex flex-col gap-2">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} style={{ display: "flex", gap: "0.75rem" }}>
          <Skeleton style={{ height: 16, flex: 1 }} />
          <Skeleton style={{ height: 16, flex: 2 }} />
          <Skeleton style={{ height: 16, flex: 1 }} />
        </div>
      ))}
    </div>
  ),
};
