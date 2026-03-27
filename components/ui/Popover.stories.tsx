import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "./Popover";
import { Button } from "./Button";

const meta = {
  title: "Primitives/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-2">
          <p className="font-head text-sm">Popover Title</p>
          <p className="font-sans text-sm text-muted-foreground">
            This is popover content. It stays open until dismissed.
          </p>
        </div>
      </Popover.Content>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Edit Settings</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-3">
          <p className="font-head text-sm">Settings</p>
          <div className="flex flex-col gap-2">
            <label className="font-sans text-xs text-muted-foreground">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="border-2 border-border bg-background px-3 py-1.5 font-sans text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans text-xs text-muted-foreground">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="border-2 border-border bg-background px-3 py-1.5 font-sans text-sm"
            />
          </div>
          <Button size="sm" className="self-end">Save</Button>
        </div>
      </Popover.Content>
    </Popover>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex gap-8 items-center justify-center py-16">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <Popover.Trigger asChild>
            <Button variant="outline">{side}</Button>
          </Popover.Trigger>
          <Popover.Content side={side}>
            <p className="font-sans text-sm">Popover on {side}</p>
          </Popover.Content>
        </Popover>
      ))}
    </div>
  ),
};

export const WithClose: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>With Close Button</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-2">
          <p className="font-head text-sm">Dismissible</p>
          <p className="font-sans text-sm text-muted-foreground">
            Click the button below to close this popover.
          </p>
          <Popover.Close asChild>
            <Button size="sm" variant="outline">Close</Button>
          </Popover.Close>
        </div>
      </Popover.Content>
    </Popover>
  ),
};
