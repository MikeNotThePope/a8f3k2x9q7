import type { Meta, StoryObj } from "@storybook/react-vite";
import { Collapsible } from "./Collapsible";
import { Button } from "./Button";

const meta = {
  title: "Primitives/Collapsible",
  component: Collapsible,
} satisfies Meta<typeof Collapsible>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-80">
      <Collapsible.Trigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Toggle content
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className="border-2 border-t-0 border-border bg-background p-4 font-sans text-sm">
          This content can be expanded and collapsed.
        </div>
      </Collapsible.Content>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-80">
      <Collapsible.Trigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Toggle content
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className="border-2 border-t-0 border-border bg-background p-4 font-sans text-sm">
          This section starts open by default.
        </div>
      </Collapsible.Content>
    </Collapsible>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <Collapsible className="w-80">
      <div className="flex items-center justify-between border-2 border-border bg-primary text-primary-foreground px-4 py-2">
        <span className="font-head text-sm">3 items</span>
        <Collapsible.Trigger asChild>
          <Button size="sm">Toggle</Button>
        </Collapsible.Trigger>
      </div>
      <div className="border-2 border-t-0 border-border px-4 py-2 font-sans text-sm">
        Always visible item
      </div>
      <Collapsible.Content>
        <div className="border-2 border-t-0 border-border px-4 py-2 font-sans text-sm">
          Hidden item 1
        </div>
        <div className="border-2 border-t-0 border-border px-4 py-2 font-sans text-sm">
          Hidden item 2
        </div>
      </Collapsible.Content>
    </Collapsible>
  ),
};
