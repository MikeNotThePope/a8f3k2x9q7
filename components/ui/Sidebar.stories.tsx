import type { Meta, StoryObj } from "@storybook/react-vite";
import { Sidebar } from "./Sidebar";
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  ChevronDown,
  User2,
  LogOut,
} from "lucide-react";

const meta: Meta = {
  title: "Compound/Sidebar",
  decorators: [
    (Story) => (
      <div style={{ height: "600px", width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj;

const menuItems = [
  { title: "Home", icon: Home },
  { title: "Inbox", icon: Inbox },
  { title: "Calendar", icon: Calendar },
  { title: "Search", icon: Search },
  { title: "Settings", icon: Settings },
];

export const Default: Story = {
  render: () => (
    <Sidebar.Provider>
      <Sidebar side="left" collapsible="icon">
        <Sidebar.Header>
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="flex size-6 items-center justify-center border-2 border-border bg-primary text-primary-foreground font-head text-xs">
              S
            </div>
            <span className="font-head text-sm">Substrate</span>
          </div>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                {menuItems.map((item) => (
                  <Sidebar.MenuItem key={item.title}>
                    <Sidebar.MenuButton tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <User2 />
                <span>John Doe</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Footer>
      </Sidebar>
      <Sidebar.Inset>
        <header className="flex h-12 items-center gap-2 border-b-2 border-border px-4">
          <Sidebar.Trigger />
          <span className="font-head text-sm">Dashboard</span>
        </header>
        <div className="p-4 font-sans text-sm text-muted-foreground">
          Main content area. Use Cmd+B to toggle sidebar.
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <Sidebar.Provider>
      <Sidebar side="left">
        <Sidebar.Header>
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="flex size-6 items-center justify-center border-2 border-border bg-primary text-primary-foreground font-head text-xs">
              S
            </div>
            <span className="font-head text-sm">Substrate</span>
          </div>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton isActive>
                    <Home />
                    <span>Dashboard</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>
                    <Inbox />
                    <span>Projects</span>
                    <ChevronDown className="ml-auto size-4" />
                  </Sidebar.MenuButton>
                  <Sidebar.MenuSub>
                    <Sidebar.MenuSubItem>
                      <Sidebar.MenuSubButton isActive>
                        <span>Active</span>
                      </Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                    <Sidebar.MenuSubItem>
                      <Sidebar.MenuSubButton>
                        <span>Archived</span>
                      </Sidebar.MenuSubButton>
                    </Sidebar.MenuSubItem>
                  </Sidebar.MenuSub>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>
                    <Settings />
                    <span>Settings</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar>
      <Sidebar.Inset>
        <header className="flex h-12 items-center gap-2 border-b-2 border-border px-4">
          <Sidebar.Trigger />
          <span className="font-head text-sm">With Sub Menu</span>
        </header>
        <div className="p-4 font-sans text-sm text-muted-foreground">
          Sidebar with nested sub-menu items.
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  ),
};

export const RightSide: Story = {
  render: () => (
    <Sidebar.Provider>
      <Sidebar.Inset>
        <header className="flex h-12 items-center gap-2 border-b-2 border-border px-4">
          <span className="font-head text-sm">Right Sidebar</span>
          <Sidebar.Trigger className="ml-auto" />
        </header>
        <div className="p-4 font-sans text-sm text-muted-foreground">
          Sidebar on the right side.
        </div>
      </Sidebar.Inset>
      <Sidebar side="right">
        <Sidebar.Header>
          <span className="font-head text-sm px-2 py-1">Details</span>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Properties</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                {menuItems.slice(0, 3).map((item) => (
                  <Sidebar.MenuItem key={item.title}>
                    <Sidebar.MenuButton>
                      <item.icon />
                      <span>{item.title}</span>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar>
    </Sidebar.Provider>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Sidebar.Provider>
      <Sidebar side="left">
        <Sidebar.Header>
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="flex size-6 items-center justify-center border-2 border-border bg-primary text-primary-foreground font-head text-xs">
              S
            </div>
            <span className="font-head text-sm">Substrate</span>
          </div>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Navigation</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>
                    <Home />
                    <span>Home</span>
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>
                    <Inbox />
                    <span>Inbox</span>
                  </Sidebar.MenuButton>
                  <Sidebar.MenuBadge>12</Sidebar.MenuBadge>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>
                    <Calendar />
                    <span>Calendar</span>
                  </Sidebar.MenuButton>
                  <Sidebar.MenuBadge>3</Sidebar.MenuBadge>
                </Sidebar.MenuItem>
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
        <Sidebar.Footer>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                <LogOut />
                <span>Logout</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Footer>
      </Sidebar>
      <Sidebar.Inset>
        <header className="flex h-12 items-center gap-2 border-b-2 border-border px-4">
          <Sidebar.Trigger />
          <span className="font-head text-sm">With Badges</span>
        </header>
        <div className="p-4 font-sans text-sm text-muted-foreground">
          Sidebar with menu badge indicators.
        </div>
      </Sidebar.Inset>
    </Sidebar.Provider>
  ),
};
