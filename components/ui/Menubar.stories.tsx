import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menubar } from "./Menubar";

const meta = {
  title: "Primitives/Menubar",
  component: Menubar,
} satisfies Meta<typeof Menubar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            New Tab <Menubar.Shortcut>Ctrl+T</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            New Window <Menubar.Shortcut>Ctrl+N</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>
            Print <Menubar.Shortcut>Ctrl+P</Menubar.Shortcut>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            Undo <Menubar.Shortcut>Ctrl+Z</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Redo <Menubar.Shortcut>Ctrl+Y</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>
            Cut <Menubar.Shortcut>Ctrl+X</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Copy <Menubar.Shortcut>Ctrl+C</Menubar.Shortcut>
          </Menubar.Item>
          <Menubar.Item>
            Paste <Menubar.Shortcut>Ctrl+V</Menubar.Shortcut>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Zoom In</Menubar.Item>
          <Menubar.Item>Zoom Out</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item>Full Screen</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>New</Menubar.Item>
          <Menubar.Sub>
            <Menubar.SubTrigger>Open Recent</Menubar.SubTrigger>
            <Menubar.SubContent>
              <Menubar.Item>project-alpha.ts</Menubar.Item>
              <Menubar.Item>index.html</Menubar.Item>
              <Menubar.Item>styles.css</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.Sub>
          <Menubar.Separator />
          <Menubar.Item>Save</Menubar.Item>
          <Menubar.Item>Save As...</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Find</Menubar.Item>
          <Menubar.Item>Replace</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};

export const WithCheckboxAndRadio: Story = {
  render: () => (
    <Menubar>
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Label>Panels</Menubar.Label>
          <Menubar.Separator />
          <Menubar.CheckboxItem checked>Sidebar</Menubar.CheckboxItem>
          <Menubar.CheckboxItem>Terminal</Menubar.CheckboxItem>
          <Menubar.CheckboxItem checked>Status Bar</Menubar.CheckboxItem>
          <Menubar.Separator />
          <Menubar.Label>Theme</Menubar.Label>
          <Menubar.RadioGroup value="dark">
            <Menubar.RadioItem value="light">Light</Menubar.RadioItem>
            <Menubar.RadioItem value="dark">Dark</Menubar.RadioItem>
            <Menubar.RadioItem value="system">System</Menubar.RadioItem>
          </Menubar.RadioGroup>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>Help</Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>Documentation</Menubar.Item>
          <Menubar.Item>About</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar>
  ),
};
