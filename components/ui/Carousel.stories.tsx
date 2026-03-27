import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "./Carousel";

const meta = {
  title: "Primitives/Carousel",
  component: Carousel,
} satisfies Meta<typeof Carousel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-xs">
      <Carousel>
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, i) => (
            <Carousel.Item key={i}>
              <div className="border-2 border-border bg-muted p-6">
                <span className="text-4xl font-head">{i + 1}</span>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
    </div>
  ),
};

export const MultipleSlidesVisible: Story = {
  render: () => (
    <div className="mx-auto max-w-sm">
      <Carousel opts={{ align: "start" }}>
        <Carousel.Content className="-ml-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <Carousel.Item key={i} className="basis-1/3 pl-2">
              <div className="border-2 border-border bg-muted p-4 text-center">
                <span className="text-2xl font-head">{i + 1}</span>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="mx-auto max-w-xs">
      <Carousel orientation="vertical" className="max-h-[200px]">
        <Carousel.Content className="-mt-2 h-[200px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Carousel.Item key={i} className="basis-full pt-2">
              <div className="border-2 border-border bg-muted p-6">
                <span className="text-4xl font-head">{i + 1}</span>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
    </div>
  ),
};
