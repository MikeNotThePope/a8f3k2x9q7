import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationMenu } from "./NavigationMenu";

const meta = {
  title: "Primitives/NavigationMenu",
  component: NavigationMenu,
} satisfies Meta<typeof NavigationMenu>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Getting Started</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <div className="grid gap-3 p-4 w-[400px]">
              <NavigationMenu.Link href="#">
                <div className="font-head text-sm mb-1">Introduction</div>
                <p className="text-muted-foreground text-xs">
                  Learn the basics of the component library.
                </p>
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#">
                <div className="font-head text-sm mb-1">Installation</div>
                <p className="text-muted-foreground text-xs">
                  How to install and set up the library.
                </p>
              </NavigationMenu.Link>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <div className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
              <NavigationMenu.Link href="#">
                <div className="font-head text-sm mb-1">Button</div>
                <p className="text-muted-foreground text-xs">
                  Trigger actions with style.
                </p>
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#">
                <div className="font-head text-sm mb-1">Card</div>
                <p className="text-muted-foreground text-xs">
                  Contained content sections.
                </p>
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#">
                <div className="font-head text-sm mb-1">Dialog</div>
                <p className="text-muted-foreground text-xs">
                  Modal overlays for focused tasks.
                </p>
              </NavigationMenu.Link>
              <NavigationMenu.Link href="#">
                <div className="font-head text-sm mb-1">Input</div>
                <p className="text-muted-foreground text-xs">
                  Text entry fields with validation.
                </p>
              </NavigationMenu.Link>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#" className="inline-flex h-10 items-center px-4 text-sm font-head">
            Documentation
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  ),
};

export const WithoutViewport: Story = {
  render: () => (
    <NavigationMenu viewport={false}>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Menu</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <div className="grid gap-2 p-4 w-[200px]">
              <NavigationMenu.Link href="#">Option A</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Option B</NavigationMenu.Link>
              <NavigationMenu.Link href="#">Option C</NavigationMenu.Link>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  ),
};

export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#" className="inline-flex h-10 items-center px-4 text-sm font-head">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#" className="inline-flex h-10 items-center px-4 text-sm font-head">
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#" className="inline-flex h-10 items-center px-4 text-sm font-head">
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  ),
};
