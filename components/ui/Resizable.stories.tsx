import type { Meta, StoryObj } from "@storybook/react-vite";
import { Resizable } from "./Resizable";

const meta = {
  title: "Primitives/Resizable",
  component: Resizable,
} satisfies Meta<typeof Resizable>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Resizable direction="horizontal" className="max-w-md border-2 border-border">
      <Resizable.Panel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-head text-sm">Panel A</span>
        </div>
      </Resizable.Panel>
      <Resizable.Handle />
      <Resizable.Panel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-head text-sm">Panel B</span>
        </div>
      </Resizable.Panel>
    </Resizable>
  ),
};

export const WithHandle: Story = {
  render: () => (
    <Resizable direction="horizontal" className="max-w-md border-2 border-border">
      <Resizable.Panel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-head text-sm">Left</span>
        </div>
      </Resizable.Panel>
      <Resizable.Handle withHandle />
      <Resizable.Panel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-head text-sm">Right</span>
        </div>
      </Resizable.Panel>
    </Resizable>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Resizable direction="vertical" className="max-w-md border-2 border-border">
      <Resizable.Panel defaultSize={50}>
        <div className="flex h-[150px] items-center justify-center p-6">
          <span className="font-head text-sm">Top</span>
        </div>
      </Resizable.Panel>
      <Resizable.Handle withHandle />
      <Resizable.Panel defaultSize={50}>
        <div className="flex h-[150px] items-center justify-center p-6">
          <span className="font-head text-sm">Bottom</span>
        </div>
      </Resizable.Panel>
    </Resizable>
  ),
};

export const ThreePanels: Story = {
  render: () => (
    <Resizable direction="horizontal" className="max-w-lg border-2 border-border">
      <Resizable.Panel defaultSize={25} minSize={15}>
        <div className="flex h-[200px] items-center justify-center p-4">
          <span className="font-head text-sm">Sidebar</span>
        </div>
      </Resizable.Panel>
      <Resizable.Handle withHandle />
      <Resizable.Panel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-4">
          <span className="font-head text-sm">Content</span>
        </div>
      </Resizable.Panel>
      <Resizable.Handle withHandle />
      <Resizable.Panel defaultSize={25} minSize={15}>
        <div className="flex h-[200px] items-center justify-center p-4">
          <span className="font-head text-sm">Inspector</span>
        </div>
      </Resizable.Panel>
    </Resizable>
  ),
};
