import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "./Button";

const meta = {
  title: "Primitives/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <Tooltip.Provider>
        <Story />
      </Tooltip.Provider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <p>This is a tooltip</p>
      </Tooltip.Content>
    </Tooltip>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex gap-8 items-center justify-center py-12">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side}>
          <Tooltip.Trigger asChild>
            <Button variant="outline">{side}</Button>
          </Tooltip.Trigger>
          <Tooltip.Content side={side}>
            <p>Tooltip on {side}</p>
          </Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Tooltip.Provider delayDuration={500}>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button variant="outline">500ms delay</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <p>This tooltip has a 500ms delay</p>
        </Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  ),
};
