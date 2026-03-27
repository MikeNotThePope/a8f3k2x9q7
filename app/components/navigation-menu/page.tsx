"use client";

import Link from "next/link";
import { NavigationMenu } from "@/components/ui/NavigationMenu";

function PropsTable() {
  const props = [
    { name: "viewport", type: "boolean", description: "Whether to render the viewport container for dropdown content (default: true)" },
    { name: "className", type: "string", description: "Additional classes on the root element" },
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

export default function NavigationMenuPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/"
            className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block"
          >
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">NavigationMenu</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A collection of links for navigating websites. Built on Radix NavigationMenu.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Basic ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic</h2>
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
                        How to install and configure the library in your project.
                      </p>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link href="#">
                      <div className="font-head text-sm mb-1">Typography</div>
                      <p className="text-muted-foreground text-xs">
                        Font and text styling conventions.
                      </p>
                    </NavigationMenu.Link>
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <div className="grid gap-3 p-4 w-[500px] md:grid-cols-2">
                    <NavigationMenu.Link href="#">
                      <div className="font-head text-sm mb-1">Button</div>
                      <p className="text-muted-foreground text-xs">Trigger actions with style.</p>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link href="#">
                      <div className="font-head text-sm mb-1">Card</div>
                      <p className="text-muted-foreground text-xs">Contained content sections.</p>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link href="#">
                      <div className="font-head text-sm mb-1">Dialog</div>
                      <p className="text-muted-foreground text-xs">Modal overlays for focused tasks.</p>
                    </NavigationMenu.Link>
                    <NavigationMenu.Link href="#">
                      <div className="font-head text-sm mb-1">Input</div>
                      <p className="text-muted-foreground text-xs">Text entry fields with validation.</p>
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
        </section>

        {/* ─── Simple Links ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Simple Links</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            A navigation menu with plain links, no dropdowns.
          </p>
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
                  Blog
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link href="#" className="inline-flex h-10 items-center px-4 text-sm font-head">
                  Contact
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu>
        </section>

        {/* ─── Without Viewport ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Without Viewport</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Set <code className="font-mono bg-muted px-1">viewport=false</code> to render
            content inline without the viewport wrapper.
          </p>
          <NavigationMenu viewport={false}>
            <NavigationMenu.List>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger>Options</NavigationMenu.Trigger>
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
        </section>

        {/* ─── Sub-components ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Component</th>
                  <th className="text-left p-3 font-head">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "NavigationMenu", desc: "Root container with optional viewport" },
                  { name: "NavigationMenu.List", desc: "Horizontal list of navigation items" },
                  { name: "NavigationMenu.Item", desc: "Individual navigation item wrapper" },
                  { name: "NavigationMenu.Trigger", desc: "Button that opens dropdown content" },
                  { name: "NavigationMenu.Content", desc: "Dropdown panel with links" },
                  { name: "NavigationMenu.Link", desc: "Styled navigation link" },
                  { name: "NavigationMenu.Viewport", desc: "Animated container for content (auto-rendered)" },
                  { name: "NavigationMenu.Indicator", desc: "Visual indicator for active item" },
                ].map((row) => (
                  <tr key={row.name} className="border-b last:border-b-0">
                    <td className="p-3 font-mono text-xs">{row.name}</td>
                    <td className="p-3">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<NavigationMenu>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Menu</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <div className="grid gap-3 p-4 w-[400px]">
          <NavigationMenu.Link href="/docs">
            <div className="font-head text-sm">Docs</div>
            <p className="text-muted-foreground text-xs">
              Read the documentation.
            </p>
          </NavigationMenu.Link>
        </div>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
</NavigationMenu>`}</div>
        </section>
      </main>
    </div>
  );
}
