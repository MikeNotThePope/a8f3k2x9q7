"use client";

import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

function PropsTable() {
  const props = [
    { name: "Breadcrumb", type: "nav", description: "Root navigation element with aria-label." },
    { name: "Breadcrumb.List", type: "ol", description: "Ordered list wrapping breadcrumb items." },
    { name: "Breadcrumb.Item", type: "li", description: "Individual breadcrumb entry." },
    { name: "Breadcrumb.Link", type: "a | Slot", description: "Clickable link. Supports asChild for custom components." },
    { name: "Breadcrumb.Page", type: "span", description: "Current page indicator (aria-current='page')." },
    { name: "Breadcrumb.Separator", type: "li", description: "Visual separator. Defaults to ChevronRight icon." },
    { name: "Breadcrumb.Ellipsis", type: "span", description: "Ellipsis indicator for collapsed breadcrumbs." },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Sub-component</th>
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

export default function BreadcrumbPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Breadcrumb</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Displays the path to the current page using a hierarchy of links. Built with Radix Slot.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <Breadcrumb>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        </section>

        {/* ─── With Ellipsis ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Ellipsis</h2>
          <Breadcrumb>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Ellipsis />
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        </section>

        {/* ─── Custom Separator ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Separator</h2>
          <Breadcrumb>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator>/</Breadcrumb.Separator>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator>/</Breadcrumb.Separator>
              <Breadcrumb.Item>
                <Breadcrumb.Page>Getting Started</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        </section>

        {/* ─── With Next.js Link ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Next.js Link</h2>
          <Breadcrumb>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link asChild>
                  <Link href="/">Home</Link>
                </Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link asChild>
                  <Link href="/components">Components</Link>
                </Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Breadcrumb>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>Current Page</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb>

{/* With Next.js Link */}
<Breadcrumb.Link asChild>
  <Link href="/path">Label</Link>
</Breadcrumb.Link>

{/* Custom separator */}
<Breadcrumb.Separator>/</Breadcrumb.Separator>`}</div>
        </section>
      </main>
    </div>
  );
}
