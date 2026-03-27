import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";

const meta = {
  title: "Primitives/Accordion",
  component: Accordion,
  argTypes: {},
} satisfies Meta<typeof Accordion>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible style={{ width: 420 }}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is substrate-ui?</Accordion.Trigger>
        <Accordion.Content>
          A neobrutalist design system built with Radix primitives and Tailwind CSS.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. Built on Radix UI primitives with full keyboard navigation and ARIA support.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Can I customise it?</Accordion.Trigger>
        <Accordion.Content>
          Absolutely. All components accept className overrides and follow design token conventions.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" style={{ width: 420 }}>
      <Accordion.Item value="a">
        <Accordion.Trigger>Section A</Accordion.Trigger>
        <Accordion.Content>
          Multiple items can be open at the same time when type is set to multiple.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="b">
        <Accordion.Trigger>Section B</Accordion.Trigger>
        <Accordion.Content>
          Open this alongside Section A to see multi-expand behaviour.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="c">
        <Accordion.Trigger>Section C</Accordion.Trigger>
        <Accordion.Content>
          All three can be expanded simultaneously.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Accordion type="single" collapsible style={{ width: 420 }}>
      <Accordion.Item value="enabled">
        <Accordion.Trigger>Enabled item</Accordion.Trigger>
        <Accordion.Content>This item works normally.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="disabled" disabled>
        <Accordion.Trigger>Disabled item</Accordion.Trigger>
        <Accordion.Content>You should not see this.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
