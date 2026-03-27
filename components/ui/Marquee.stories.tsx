import type { Meta, StoryObj } from "@storybook/react-vite";
import { Marquee } from "./Marquee";

const meta = {
  title: "Primitives/Marquee",
  component: Marquee,
  argTypes: {
    speed: {
      control: { type: "number", min: 5, max: 60, step: 5 },
      description: "Animation duration in seconds",
    },
    pauseOnHover: {
      control: "boolean",
      description: "Pause the animation on hover",
    },
    reverse: {
      control: "boolean",
      description: "Reverse the scroll direction",
    },
  },
} satisfies Meta<typeof Marquee>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      "Substrate UI",
      "Neobrutalism",
      "Bold Design",
      "Sharp Corners",
      "Hard Shadows",
      "High Contrast",
    ],
  },
};

export const Fast: Story = {
  args: {
    items: ["BREAKING NEWS", "LIVE UPDATE", "JUST IN", "ALERT", "FLASH"],
    speed: 8,
  },
};

export const Reversed: Story = {
  args: {
    items: [
      "React",
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Radix",
      "Storybook",
    ],
    reverse: true,
  },
};

export const PauseOnHover: Story = {
  args: {
    items: [
      "Hover to pause",
      "Release to resume",
      "Smooth animation",
      "Interactive marquee",
    ],
    pauseOnHover: true,
    speed: 15,
  },
};
