"use client";

import Link from "next/link";
import { Dialog, Button } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "size", type: '"sm" | "md" | "lg" | "xl" | "full"', description: "Maximum width of the dialog" },
    { name: "overlay", type: "{ variant?: 'default' | 'none' }", description: "Configure or hide the backdrop overlay" },
    { name: "className", type: "string", description: "Additional classes on the dialog content" },
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

export default function DialogPage() {
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
          <h1 className="font-head text-4xl mb-2">Dialog</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Modal dialog with header, body, footer, and overlay. Built on Radix Dialog.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Basic ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic</h2>
          <Dialog>
            <Dialog.Trigger asChild>
              <Button>Open Dialog</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>
                <span className="font-head">Basic Dialog</span>
              </Dialog.Header>
              <Dialog.Body>
                <Dialog.Description>
                  This is a basic dialog with header, body, and footer.
                </Dialog.Description>
                <p className="font-sans text-sm mt-2">
                  Click the X or press Escape to close.
                </p>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.Trigger asChild>
                  <Button variant="outline" size="sm">Cancel</Button>
                </Dialog.Trigger>
                <Dialog.Trigger asChild>
                  <Button size="sm">Confirm</Button>
                </Dialog.Trigger>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog>
        </section>

        {/* ─── Sizes ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sizes</h2>
          <div className="flex flex-wrap gap-3">
            {(["sm", "md", "lg", "xl"] as const).map((size) => (
              <Dialog key={size}>
                <Dialog.Trigger asChild>
                  <Button variant="outline">{size}</Button>
                </Dialog.Trigger>
                <Dialog.Content size={size}>
                  <Dialog.Header>
                    <span className="font-head">Size: {size}</span>
                  </Dialog.Header>
                  <Dialog.Body>
                    <p className="font-sans text-sm">
                      This dialog uses <code className="font-mono bg-muted px-1">size=&quot;{size}&quot;</code>.
                    </p>
                  </Dialog.Body>
                </Dialog.Content>
              </Dialog>
            ))}
          </div>
        </section>

        {/* ─── Use case: Password reset ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Use Case: Password Reset</h2>
          <Dialog>
            <Dialog.Trigger asChild>
              <Button variant="outline">Forgot Password</Button>
            </Dialog.Trigger>
            <Dialog.Content size="sm">
              <Dialog.Header>
                <span className="font-head">Reset Password</span>
              </Dialog.Header>
              <Dialog.Body>
                <Dialog.Description>
                  Enter your email and we&apos;ll send you a reset link.
                </Dialog.Description>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-2 border-border px-3 py-2 mt-3 font-sans text-sm bg-background"
                />
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.Trigger asChild>
                  <Button variant="outline" size="sm">Cancel</Button>
                </Dialog.Trigger>
                <Button size="sm">Send Reset Link</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog>
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
                  { name: "Dialog", desc: "Root provider (controls open/close state)" },
                  { name: "Dialog.Trigger", desc: "Element that opens the dialog" },
                  { name: "Dialog.Content", desc: "The modal panel (accepts size, overlay props)" },
                  { name: "Dialog.Header", desc: "Top bar with close button" },
                  { name: "Dialog.Body", desc: "Scrollable content area" },
                  { name: "Dialog.Description", desc: "Accessible description text" },
                  { name: "Dialog.Footer", desc: "Bottom bar for actions" },
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
          <h2 className="font-head text-2xl mb-4">Content Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Dialog>
  <Dialog.Trigger asChild>
    <Button>Open</Button>
  </Dialog.Trigger>
  <Dialog.Content size="sm">
    <Dialog.Header>
      <span className="font-head">Title</span>
    </Dialog.Header>
    <Dialog.Body>
      <Dialog.Description>Body text here.</Dialog.Description>
    </Dialog.Body>
    <Dialog.Footer>
      <Button size="sm">Confirm</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>`}</div>
        </section>
      </main>
    </div>
  );
}
