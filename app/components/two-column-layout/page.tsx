"use client";

import Link from "next/link";
import { Tabs } from "@/components/ui";
import { TwoColumnLayout } from "@/components/TwoColumnLayout/TwoColumnLayout";

export default function TwoColumnLayoutPage() {
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
          <h1 className="font-head text-4xl mb-2">TwoColumnLayout</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Responsive two-panel layout. Both columns visible on desktop; the
            right column slides in as a drawer on mobile.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Live Example ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Live Example</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Resize your browser below <code className="font-mono">768px</code> to
            see the right column collapse into a drawer.
          </p>
          <div className="border-2 min-h-[400px]">
            <TwoColumnLayout drawerTitle="Right Panel">
              <TwoColumnLayout.Left className="p-4">
                <Tabs defaultValue="overview">
                  <Tabs.List>
                    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                    <Tabs.Trigger value="details">Details</Tabs.Trigger>
                    <Tabs.More>
                      <Tabs.MoreItem value="files">Files</Tabs.MoreItem>
                    </Tabs.More>
                  </Tabs.List>
                  <Tabs.Content value="overview">
                    <div className="space-y-3">
                      <div className="p-4 border-2 bg-muted">
                        <h3 className="font-head text-base mb-1">Item Title</h3>
                        <p className="font-sans text-sm text-muted-foreground">A short summary of the selected item goes here.</p>
                      </div>
                      <div className="p-4 border-2 bg-muted">
                        <h4 className="font-head text-sm mb-1">Section A</h4>
                        <p className="font-sans text-sm text-muted-foreground">First piece of supporting content.</p>
                        <p className="font-sans text-sm text-muted-foreground">Second piece of supporting content.</p>
                      </div>
                      <div className="p-4 border-2 bg-muted">
                        <h4 className="font-head text-sm mb-1">Section B</h4>
                        <p className="font-sans text-sm text-muted-foreground">Additional context or metadata.</p>
                      </div>
                    </div>
                  </Tabs.Content>
                  <Tabs.Content value="details">
                    <div className="space-y-3">
                      <div className="p-4 border-2 bg-muted">
                        <p className="font-head text-sm mb-1">Question 1</p>
                        <p className="font-sans text-sm text-muted-foreground">Response to the first question.</p>
                      </div>
                      <div className="p-4 border-2 bg-muted">
                        <p className="font-head text-sm mb-1">Question 2</p>
                        <p className="font-sans text-sm text-muted-foreground">Response to the second question.</p>
                      </div>
                    </div>
                  </Tabs.Content>
                  <Tabs.Content value="files">
                    <div className="p-4 border-2 bg-muted">
                      <p className="font-sans text-sm text-muted-foreground">No files attached.</p>
                    </div>
                  </Tabs.Content>
                </Tabs>
              </TwoColumnLayout.Left>

              <TwoColumnLayout.Right className="p-4">
                <Tabs defaultValue="ratings">
                  <Tabs.List>
                    <Tabs.Trigger value="ratings">Ratings</Tabs.Trigger>
                    <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="ratings">
                    <div className="space-y-3">
                      <div className="p-4 border-2 bg-muted">
                        <div className="flex justify-between items-center">
                          <span className="font-head text-sm">Criteria A</span>
                          <span className="font-head text-sm bg-primary text-primary-foreground px-2 py-0.5 border-2">4 / 5</span>
                        </div>
                      </div>
                      <div className="p-4 border-2 bg-muted">
                        <div className="flex justify-between items-center">
                          <span className="font-head text-sm">Criteria B</span>
                          <span className="font-head text-sm bg-primary text-primary-foreground px-2 py-0.5 border-2">5 / 5</span>
                        </div>
                      </div>
                      <div className="p-4 border-2 bg-muted">
                        <div className="flex justify-between items-center">
                          <span className="font-head text-sm">Criteria C</span>
                          <span className="font-head text-sm bg-primary text-primary-foreground px-2 py-0.5 border-2">3 / 5</span>
                        </div>
                      </div>
                    </div>
                  </Tabs.Content>
                  <Tabs.Content value="activity">
                    <div className="space-y-2">
                      <div className="p-3 border-2 bg-muted">
                        <p className="font-sans text-xs text-muted-foreground">Mar 20 &mdash; Rating submitted by User A</p>
                      </div>
                      <div className="p-3 border-2 bg-muted">
                        <p className="font-sans text-xs text-muted-foreground">Mar 18 &mdash; Status changed to In Review</p>
                      </div>
                      <div className="p-3 border-2 bg-muted">
                        <p className="font-sans text-xs text-muted-foreground">Mar 15 &mdash; Item created</p>
                      </div>
                    </div>
                  </Tabs.Content>
                </Tabs>
              </TwoColumnLayout.Right>
            </TwoColumnLayout>
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">TwoColumnLayout Props</h2>
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
                <tr className="border-b">
                  <td className="p-3 font-mono text-xs">drawerTitle</td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                  <td className="p-3">Title shown in the mobile drawer header. Defaults to &ldquo;Details&rdquo;.</td>
                </tr>
                <tr className="border-b last:border-b-0">
                  <td className="p-3 font-mono text-xs">className</td>
                  <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                  <td className="p-3">Additional classes on the root container.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-sans text-sm text-muted-foreground mt-2">
            Sub-components: <code className="font-mono">TwoColumnLayout.Left</code>,{" "}
            <code className="font-mono">TwoColumnLayout.Right</code> &mdash; each accept{" "}
            <code className="font-mono">className</code> and children.
          </p>
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<TwoColumnLayout drawerTitle="Right Panel">
  <TwoColumnLayout.Left>
    <Tabs defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="details">Details</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">...</Tabs.Content>
      <Tabs.Content value="details">...</Tabs.Content>
    </Tabs>
  </TwoColumnLayout.Left>

  <TwoColumnLayout.Right>
    <Tabs defaultValue="ratings">
      <Tabs.List>
        <Tabs.Trigger value="ratings">Ratings</Tabs.Trigger>
        <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="ratings">...</Tabs.Content>
      <Tabs.Content value="activity">...</Tabs.Content>
    </Tabs>
  </TwoColumnLayout.Right>
</TwoColumnLayout>`}</div>
        </section>
      </main>
    </div>
  );
}
