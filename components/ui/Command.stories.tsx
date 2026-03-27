import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Command } from "./Command";
import { Button } from "./Button";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

const meta = {
  title: "Primitives/Command",
  component: Command,
} satisfies Meta<typeof Command>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="max-w-md border-2 border-border">
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
          <Command.Item>
            <Calendar className="mr-2 size-4" />
            <span>Calendar</span>
          </Command.Item>
          <Command.Item>
            <Smile className="mr-2 size-4" />
            <span>Search Emoji</span>
          </Command.Item>
          <Command.Item>
            <Calculator className="mr-2 size-4" />
            <span>Calculator</span>
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Settings">
          <Command.Item>
            <User className="mr-2 size-4" />
            <span>Profile</span>
            <Command.Shortcut>&#8984;P</Command.Shortcut>
          </Command.Item>
          <Command.Item>
            <CreditCard className="mr-2 size-4" />
            <span>Billing</span>
            <Command.Shortcut>&#8984;B</Command.Shortcut>
          </Command.Item>
          <Command.Item>
            <Settings className="mr-2 size-4" />
            <span>Settings</span>
            <Command.Shortcut>&#8984;S</Command.Shortcut>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
  ),
};

function CommandDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
      <Command.Dialog open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Actions">
            <Command.Item>
              <Calendar className="mr-2 size-4" />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <Settings className="mr-2 size-4" />
              <span>Settings</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}

export const DialogVariant: Story = {
  render: () => <CommandDialogExample />,
};
