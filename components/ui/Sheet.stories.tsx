import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sheet } from "./Sheet";
import { Button } from "./Button";

const meta = {
  title: "Primitives/Sheet",
  component: Sheet,
} satisfies Meta<typeof Sheet>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button>Open Sheet</Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Sheet Title</Sheet.Title>
          <Sheet.Description>
            This is a sheet description with some content.
          </Sheet.Description>
        </Sheet.Header>
        <div className="p-4 font-sans text-sm">
          Sheet body content goes here.
        </div>
        <Sheet.Footer>
          <Button>Save</Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open Left</Button>
      </Sheet.Trigger>
      <Sheet.Content side="left">
        <Sheet.Header>
          <Sheet.Title>Left Sheet</Sheet.Title>
          <Sheet.Description>Slides in from the left side.</Sheet.Description>
        </Sheet.Header>
        <div className="p-4 font-sans text-sm">Navigation or sidebar content.</div>
      </Sheet.Content>
    </Sheet>
  ),
};

export const Top: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open Top</Button>
      </Sheet.Trigger>
      <Sheet.Content side="top">
        <Sheet.Header>
          <Sheet.Title>Top Sheet</Sheet.Title>
          <Sheet.Description>Slides down from the top.</Sheet.Description>
        </Sheet.Header>
      </Sheet.Content>
    </Sheet>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open Bottom</Button>
      </Sheet.Trigger>
      <Sheet.Content side="bottom">
        <Sheet.Header>
          <Sheet.Title>Bottom Sheet</Sheet.Title>
          <Sheet.Description>Slides up from the bottom.</Sheet.Description>
        </Sheet.Header>
      </Sheet.Content>
    </Sheet>
  ),
};
