import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "./Progress";

const meta = {
  title: "Primitives/Progress",
  component: Progress,
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
} satisfies Meta<typeof Progress>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 45,
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <Progress {...args} />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Progress value={0} />
    </div>
  ),
};

export const Full: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Progress value={100} />
    </div>
  ),
};

export const Stages: Story = {
  render: () => (
    <div style={{ width: 400, display: "flex", flexDirection: "column", gap: "1rem" }}>
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
  ),
};
