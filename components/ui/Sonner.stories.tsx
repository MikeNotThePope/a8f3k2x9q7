import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";
import { Toaster } from "./Sonner";

const meta = {
  title: "Primitives/Sonner",
  component: Toaster,
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toaster>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Toaster />
      <button
        className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        onClick={() => toast("Event has been created.")}
      >
        Show Toast
      </button>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Toaster />
      <button
        className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        onClick={() =>
          toast("Event has been created", {
            description: "Monday, January 3rd at 6:00pm",
          })
        }
      >
        With Description
      </button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Toaster />
      <button
        className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        onClick={() =>
          toast("Event has been created", {
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        With Action
      </button>
    </div>
  ),
};

export const ErrorToast: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Toaster />
      <button
        className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        onClick={() => toast.error("Something went wrong.")}
      >
        Error Toast
      </button>
    </div>
  ),
};
