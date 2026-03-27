"use client";

import Link from "next/link";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/Sonner";

function PropsTable() {
  const props = [
    { name: "theme", type: '"light" | "dark" | "system"', description: "Color scheme (auto-detected from next-themes)" },
    { name: "position", type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | ...', description: "Where toasts appear on screen" },
    { name: "richColors", type: "boolean", description: "Enable rich semantic colors for success/error/etc." },
    { name: "expand", type: "boolean", description: "Expand all toasts by default" },
    { name: "duration", type: "number", description: "Default duration in milliseconds" },
    { name: "closeButton", type: "boolean", description: "Show close button on toasts" },
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

export default function SonnerPage() {
  return (
    <div className="min-h-screen">
      <Toaster />

      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/"
            className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block"
          >
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Sonner</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Toast notifications with neobrutalism styling. Built on sonner.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Basic Toast --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic Toast</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            A simple text notification.
          </p>
          <button
            className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            onClick={() => toast("Event has been created.")}
          >
            Show Toast
          </button>
        </section>

        {/* --- With Description --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Description</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Add a secondary description line below the main message.
          </p>
          <button
            className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            onClick={() =>
              toast("Event has been created", {
                description: "Monday, January 3rd at 6:00pm",
              })
            }
          >
            With Description
          </button>
        </section>

        {/* --- With Action --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Action</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Include an action button for undo or other quick actions.
          </p>
          <button
            className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            onClick={() =>
              toast("Event has been created", {
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            With Action
          </button>
        </section>

        {/* --- Semantic Variants --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Semantic Variants</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Use <code className="font-mono text-xs bg-muted px-1 py-0.5">toast.success()</code>,{" "}
            <code className="font-mono text-xs bg-muted px-1 py-0.5">toast.error()</code>, and other methods for semantic feedback.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              onClick={() => toast.success("Changes saved successfully.")}
            >
              Success
            </button>
            <button
              className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              onClick={() => toast.error("Something went wrong.")}
            >
              Error
            </button>
            <button
              className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              onClick={() => toast.warning("Careful with that action.")}
            >
              Warning
            </button>
            <button
              className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              onClick={() => toast.info("A new version is available.")}
            >
              Info
            </button>
          </div>
        </section>

        {/* --- Promise --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Promise</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Wrap an async operation with loading, success, and error states.
          </p>
          <button
            className="border-2 border-border bg-background px-4 py-2 font-sans text-sm shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2000)),
                {
                  loading: "Loading...",
                  success: "Data loaded.",
                  error: "Failed to load.",
                },
              )
            }
          >
            Promise Toast
          </button>
        </section>

        {/* --- Props --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* --- Usage --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { Toaster } from "@/components/ui";
import { toast } from "sonner";

// Add <Toaster /> to your layout
<Toaster />

// Trigger toasts anywhere
toast("Event has been created.");
toast.success("Saved!");
toast.error("Something went wrong.");
toast("With action", {
  action: { label: "Undo", onClick: () => {} },
});`}</div>
        </section>
      </main>
    </div>
  );
}
