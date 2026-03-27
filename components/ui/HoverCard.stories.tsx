import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCard } from "./HoverCard";

const meta = {
  title: "Primitives/HoverCard",
  component: HoverCard,
} satisfies Meta<typeof HoverCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCard.Trigger asChild>
        <a
          href="#"
          className="font-head text-sm underline decoration-primary underline-offset-4"
        >
          Hover for details
        </a>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div className="flex flex-col gap-2">
          <p className="font-head text-sm">HoverCard Title</p>
          <p className="font-sans text-sm text-muted-foreground">
            Additional information shown on hover. Useful for previews and
            contextual info.
          </p>
        </div>
      </HoverCard.Content>
    </HoverCard>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCard.Trigger asChild>
        <a
          href="#"
          className="font-head text-sm underline decoration-primary underline-offset-4"
        >
          @username
        </a>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="size-10 border-2 border-border bg-muted flex items-center justify-center font-head text-sm">
              U
            </div>
            <div>
              <p className="font-head text-sm">Username</p>
              <p className="font-sans text-xs text-muted-foreground">
                @username
              </p>
            </div>
          </div>
          <p className="font-sans text-sm text-muted-foreground">
            Full-stack developer building premium interfaces.
          </p>
          <div className="flex gap-4 font-sans text-xs text-muted-foreground">
            <span><strong className="text-foreground">128</strong> following</span>
            <span><strong className="text-foreground">1.2k</strong> followers</span>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex gap-12 items-center justify-center py-16">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <HoverCard key={side}>
          <HoverCard.Trigger asChild>
            <a
              href="#"
              className="font-head text-sm underline decoration-primary underline-offset-4"
            >
              {side}
            </a>
          </HoverCard.Trigger>
          <HoverCard.Content side={side}>
            <p className="font-sans text-sm">Card on {side}</p>
          </HoverCard.Content>
        </HoverCard>
      ))}
    </div>
  ),
};
