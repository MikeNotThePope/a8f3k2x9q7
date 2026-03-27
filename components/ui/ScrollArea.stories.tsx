import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea } from "./ScrollArea";

const meta = {
  title: "Primitives/ScrollArea",
  component: ScrollArea,
  argTypes: {},
} satisfies Meta<typeof ScrollArea>;
export default meta;

type Story = StoryObj<typeof meta>;

const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`);

export const Vertical: Story = {
  render: () => (
    <ScrollArea style={{ height: 200, width: 300 }} className="border-2 border-border">
      <div className="p-4">
        {tags.map((tag) => (
          <div key={tag} className="py-2 border-b border-border text-sm font-sans">
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea style={{ width: 400 }} className="border-2 border-border">
      <div className="flex gap-4 p-4" style={{ width: 1200 }}>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="shrink-0 border-2 border-border bg-muted p-4 font-head text-sm"
            style={{ width: 150, height: 100 }}
          >
            Card {i + 1}
          </div>
        ))}
      </div>
      <ScrollArea.ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const LongContent: Story = {
  render: () => (
    <ScrollArea style={{ height: 300, width: 400 }} className="border-2 border-border">
      <div className="p-4 font-sans text-sm leading-relaxed">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="mb-4">
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};
