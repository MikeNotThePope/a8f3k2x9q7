import type { Meta, StoryObj } from "@storybook/react-vite";
import { ContextMenu } from "./ContextMenu";

const meta = {
  title: "Primitives/ContextMenu",
  component: ContextMenu,
} satisfies Meta<typeof ContextMenu>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenu.Trigger className="flex h-[150px] w-[300px] items-center justify-center border-2 border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>Back</ContextMenu.Item>
        <ContextMenu.Item>Forward</ContextMenu.Item>
        <ContextMenu.Item>Reload</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>View Page Source</ContextMenu.Item>
        <ContextMenu.Item>Inspect</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenu.Trigger className="flex h-[150px] w-[300px] items-center justify-center border-2 border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          Back <ContextMenu.Shortcut>Alt+Left</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item>
          Forward <ContextMenu.Shortcut>Alt+Right</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item>
          Reload <ContextMenu.Shortcut>Ctrl+R</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item disabled>
          Save As... <ContextMenu.Shortcut>Ctrl+S</ContextMenu.Shortcut>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenu.Trigger className="flex h-[150px] w-[300px] items-center justify-center border-2 border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>Cut</ContextMenu.Item>
        <ContextMenu.Item>Copy</ContextMenu.Item>
        <ContextMenu.Item>Paste</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>Share</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Email</ContextMenu.Item>
            <ContextMenu.Item>Slack</ContextMenu.Item>
            <ContextMenu.Item>Copy Link</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
      </ContextMenu.Content>
    </ContextMenu>
  ),
};

export const WithCheckboxAndRadio: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenu.Trigger className="flex h-[150px] w-[300px] items-center justify-center border-2 border-dashed border-border text-sm text-muted-foreground">
        Right click here
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Label>Appearance</ContextMenu.Label>
        <ContextMenu.Separator />
        <ContextMenu.CheckboxItem checked>
          Show Toolbar
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem>Show Sidebar</ContextMenu.CheckboxItem>
        <ContextMenu.Separator />
        <ContextMenu.Label>Theme</ContextMenu.Label>
        <ContextMenu.RadioGroup value="light">
          <ContextMenu.RadioItem value="light">Light</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="dark">Dark</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="system">System</ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.Content>
    </ContextMenu>
  ),
};
