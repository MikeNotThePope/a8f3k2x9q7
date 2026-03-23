"use client";

import Link from "next/link";
import { Tabs } from "@/components/ui";

function TabsPropsTable() {
  const props = [
    { name: "defaultValue", type: "string", description: "The value of the tab that should be active by default." },
    { name: "value", type: "string", description: "Controlled active tab value." },
    { name: "onValueChange", type: "(value: string) => void", description: "Callback when the active tab changes." },
    { name: "className", type: "string", description: "Additional classes on the root element." },
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

export default function TabsPage() {
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
          <h1 className="font-head text-4xl mb-2">Tabs</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Accessible tabbed interface built on Radix Tabs. Supports overflow
            via a &ldquo;More&rdquo; dropdown menu.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Basic Tabs ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic Tabs</h2>
          <div className="border-2 p-6">
            <Tabs defaultValue="overview">
              <Tabs.List>
                <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                <Tabs.Trigger value="details">Details</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="overview">
                <div className="p-4 border-2 bg-muted">
                  <p className="font-sans text-sm">Overview content goes here. Summarize the key information at a glance.</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="details">
                <div className="p-4 border-2 bg-muted">
                  <p className="font-sans text-sm">Detailed breakdown of all related data and attributes.</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="settings">
                <div className="p-4 border-2 bg-muted">
                  <p className="font-sans text-sm">Configuration and preferences for this item.</p>
                </div>
              </Tabs.Content>
            </Tabs>
          </div>
        </section>

        {/* ─── With Overflow ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Overflow Menu</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Use <code className="font-mono">Tabs.More</code> to group overflow
            tabs into a dropdown.
          </p>
          <div className="border-2 p-6">
            <Tabs defaultValue="overview">
              <Tabs.List>
                <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                <Tabs.Trigger value="details">Details</Tabs.Trigger>
                <Tabs.More>
                  <Tabs.MoreItem value="notes">Notes</Tabs.MoreItem>
                  <Tabs.MoreItem value="history">History</Tabs.MoreItem>
                  <Tabs.MoreItem value="files">Files</Tabs.MoreItem>
                </Tabs.More>
              </Tabs.List>
              <Tabs.Content value="overview">
                <div className="p-4 border-2 bg-muted">
                  <p className="font-sans text-sm">Overview content here.</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="details">
                <div className="p-4 border-2 bg-muted">
                  <p className="font-sans text-sm">Detailed information here.</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="notes">
                <div className="p-4 border-2 bg-muted">
                  <p className="font-sans text-sm">Notes and comments.</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="history">
                <div className="p-4 border-2 bg-muted">
                  <p className="font-sans text-sm">Change history timeline.</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="files">
                <div className="p-4 border-2 bg-muted">
                  <p className="font-sans text-sm">Attached files and documents.</p>
                </div>
              </Tabs.Content>
            </Tabs>
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Tabs Props</h2>
          <TabsPropsTable />
          <p className="font-sans text-sm text-muted-foreground mt-2">
            Sub-components: <code className="font-mono">Tabs.List</code>,{" "}
            <code className="font-mono">Tabs.Trigger</code>,{" "}
            <code className="font-mono">Tabs.Content</code>,{" "}
            <code className="font-mono">Tabs.More</code>,{" "}
            <code className="font-mono">Tabs.MoreItem</code>.
          </p>
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Tabs defaultValue="overview">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="details">Details</Tabs.Trigger>
    <Tabs.More>
      <Tabs.MoreItem value="notes">Notes</Tabs.MoreItem>
      <Tabs.MoreItem value="history">History</Tabs.MoreItem>
    </Tabs.More>
  </Tabs.List>
  <Tabs.Content value="overview">...</Tabs.Content>
  <Tabs.Content value="details">...</Tabs.Content>
  <Tabs.Content value="notes">...</Tabs.Content>
  <Tabs.Content value="history">...</Tabs.Content>
</Tabs>`}</div>
        </section>
      </main>
    </div>
  );
}
