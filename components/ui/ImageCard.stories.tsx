import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageCard } from "./ImageCard";

const meta = {
  title: "Primitives/ImageCard",
  component: ImageCard,
  argTypes: {
    imageUrl: { control: "text", description: "URL of the image" },
    caption: { control: "text", description: "Caption text below the image" },
    alt: { control: "text", description: "Alt text for the image" },
  },
} satisfies Meta<typeof ImageCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "https://picsum.photos/seed/substrate/400/300",
    caption: "A beautiful landscape captured at golden hour.",
  },
};

export const CustomAlt: Story = {
  args: {
    imageUrl: "https://picsum.photos/seed/brutalism/400/300",
    caption: "Brutalist architecture in concrete.",
    alt: "A brutalist building facade with exposed concrete",
  },
};

export const WideCard: Story = {
  args: {
    imageUrl: "https://picsum.photos/seed/wide/600/300",
    caption: "A wider card for panoramic images.",
    className: "w-[400px]",
  },
};

export const Gallery: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ImageCard
        imageUrl="https://picsum.photos/seed/one/400/300"
        caption="Mountain vista"
      />
      <ImageCard
        imageUrl="https://picsum.photos/seed/two/400/300"
        caption="Ocean sunset"
      />
      <ImageCard
        imageUrl="https://picsum.photos/seed/three/400/300"
        caption="Forest trail"
      />
    </div>
  ),
};
