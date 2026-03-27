"use client";

import Link from "next/link";
import { Sidebar } from "@/components/ui/Sidebar";
import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  User2,
  LogOut,
  ChevronDown,
  Bell,
  FileText,
  BarChart3,
} from "lucide-react";

const mainMenuItems = [
  { title: "Home", icon: Home },
  { title: "Inbox", icon: Inbox },
  { title: "Calendar", icon: Calendar },
  { title: "Search", icon: Search },
  { title: "Settings", icon: Settings },
];

function PropsTable() {
  const props = [
    { name: "side", type: '"left" | "right"', description: "Which side the sidebar appears on" },
    { name: "variant", type: '"sidebar" | "floating" | "inset"', description: "Visual style variant" },
    { name: "collapsible", type: '"offcanvas" | "icon" | "none"', description: "Collapse behavior" },
    { name: "defaultOpen", type: "boolean", description: "Initial open state (Provider prop)" },
    { name: "open", type: "boolean", description: "Controlled open state (Provider prop)" },
    { name: "onOpenChange", type: "(open: boolean) => void", description: "Open state change handler (Provider prop)" },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Prop</th>
            <th className="text-left p-3 font-head">Type</th>
            <th className="text-left p-3 font-head">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b last:border-b-0">
              <td className="p-3 font-mono text-xs">{prop.name}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{prop.type}</td>
              <td className="p-3">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SubComponentsTable() {
  const subComponents = [
    { name: "Sidebar.Provider", description: "Context provider with keyboard shortcut (Cmd+B)" },
    { name: "Sidebar.Trigger", description: "Toggle button for the sidebar" },
    { name: "Sidebar.Rail", description: "Thin draggable rail to toggle sidebar" },
    { name: "Sidebar.Inset", description: "Main content area next to the sidebar" },
    { name: "Sidebar.Header", description: "Top section with branding" },
    { name: "Sidebar.Content", description: "Scrollable content area" },
    { name: "Sidebar.Footer", description: "Bottom section" },
    { name: "Sidebar.Group", description: "Groups menu items together" },
    { name: "Sidebar.GroupLabel", description: "Label for a group" },
    { name: "Sidebar.GroupContent", description: "Content wrapper for a group" },
    { name: "Sidebar.Menu", description: "Menu list container" },
    { name: "Sidebar.MenuItem", description: "Individual menu item wrapper" },
    { name: "Sidebar.MenuButton", description: "Clickable button within a menu item" },
    { name: "Sidebar.MenuBadge", description: "Badge/count indicator on a menu item" },
    { name: "Sidebar.MenuSub", description: "Sub-menu container" },
    { name: "Sidebar.MenuSubItem", description: "Sub-menu item wrapper" },
    { name: "Sidebar.MenuSubButton", description: "Clickable button within a sub-menu" },
    { name: "Sidebar.Input", description: "Search input for the sidebar" },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Sub-Component</th>
            <th className="text-left p-3 font-head">Description</th>
          </tr>
        </thead>
        <tbody>
          {subComponents.map((comp) => (
            <tr key={comp.name} className="border-b last:border-b-0">
              <td className="p-3 font-mono text-xs">{comp.name}</td>
              <td className="p-3">{comp.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SidebarPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Sidebar</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Full-featured sidebar with collapsible states, keyboard shortcuts, sub-menus, badges, and mobile Sheet support. The most complex compound component.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* Default */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default (Icon Collapsible)</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Press Cmd+B to toggle. Collapses to icon-only mode.
          </p>
          <div className="border-2 border-border h-[500px] overflow-hidden">
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
                        {mainMenuItems.map((item) => (
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
                      <Sidebar.MenuButton tooltip="John Doe">
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
          </div>
        </section>

        {/* With Sub-Menus and Badges */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Sub-Menus and Badges</h2>
          <div className="border-2 border-border h-[500px] overflow-hidden">
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
                            <span>Inbox</span>
                          </Sidebar.MenuButton>
                          <Sidebar.MenuBadge>12</Sidebar.MenuBadge>
                        </Sidebar.MenuItem>
                        <Sidebar.MenuItem>
                          <Sidebar.MenuButton>
                            <FileText />
                            <span>Documents</span>
                            <ChevronDown className="ml-auto size-4" />
                          </Sidebar.MenuButton>
                          <Sidebar.MenuSub>
                            <Sidebar.MenuSubItem>
                              <Sidebar.MenuSubButton isActive>
                                <span>Recent</span>
                              </Sidebar.MenuSubButton>
                            </Sidebar.MenuSubItem>
                            <Sidebar.MenuSubItem>
                              <Sidebar.MenuSubButton>
                                <span>Shared</span>
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
                            <BarChart3 />
                            <span>Analytics</span>
                          </Sidebar.MenuButton>
                        </Sidebar.MenuItem>
                        <Sidebar.MenuItem>
                          <Sidebar.MenuButton>
                            <Bell />
                            <span>Notifications</span>
                          </Sidebar.MenuButton>
                          <Sidebar.MenuBadge>3</Sidebar.MenuBadge>
                        </Sidebar.MenuItem>
                      </Sidebar.Menu>
                    </Sidebar.GroupContent>
                  </Sidebar.Group>
                  <Sidebar.Group>
                    <Sidebar.GroupLabel>Settings</Sidebar.GroupLabel>
                    <Sidebar.GroupContent>
                      <Sidebar.Menu>
                        <Sidebar.MenuItem>
                          <Sidebar.MenuButton>
                            <Settings />
                            <span>Preferences</span>
                          </Sidebar.MenuButton>
                        </Sidebar.MenuItem>
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
                  <span className="font-head text-sm">Full Featured</span>
                </header>
                <div className="p-4 font-sans text-sm text-muted-foreground">
                  Sidebar with sub-menus, badges, multiple groups, and footer actions.
                </div>
              </Sidebar.Inset>
            </Sidebar.Provider>
          </div>
        </section>

        {/* Sub-Components */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-Components</h2>
          <SubComponentsTable />
        </section>

        {/* Props */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* Usage */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { Sidebar } from "@/components/ui/Sidebar";
import { Home, Settings } from "lucide-react";

<Sidebar.Provider>
  <Sidebar side="left" collapsible="icon">
    <Sidebar.Header>
      <span className="font-head">My App</span>
    </Sidebar.Header>
    <Sidebar.Content>
      <Sidebar.Group>
        <Sidebar.GroupLabel>Nav</Sidebar.GroupLabel>
        <Sidebar.GroupContent>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton tooltip="Home">
                <Home />
                <span>Home</span>
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.GroupContent>
      </Sidebar.Group>
    </Sidebar.Content>
  </Sidebar>
  <Sidebar.Inset>
    <Sidebar.Trigger />
    <main>Content here</main>
  </Sidebar.Inset>
</Sidebar.Provider>`}</div>
        </section>
      </main>
    </div>
  );
}
