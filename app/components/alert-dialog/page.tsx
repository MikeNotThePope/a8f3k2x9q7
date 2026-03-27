"use client";

import Link from "next/link";
import { AlertDialog } from "@/components/ui/AlertDialog";
import { Button } from "@/components/ui/Button";

function PropsTable() {
  const props = [
    { name: "AlertDialog", type: "Root", description: "Wraps the alert dialog. Controls open state." },
    { name: "AlertDialog.Trigger", type: "Radix Trigger", description: "Element that opens the dialog." },
    { name: "AlertDialog.Content", type: "Component", description: "The dialog panel with overlay and animations." },
    { name: "AlertDialog.Header", type: "div", description: "Container for title and description." },
    { name: "AlertDialog.Title", type: "Radix Title", description: "Accessible title for the dialog." },
    { name: "AlertDialog.Description", type: "Radix Description", description: "Accessible description text." },
    { name: "AlertDialog.Footer", type: "div", description: "Container for action and cancel buttons." },
    { name: "AlertDialog.Action", type: "Radix Action", description: "Confirms the action. Styled as primary button." },
    { name: "AlertDialog.Cancel", type: "Radix Cancel", description: "Dismisses the dialog. Styled as secondary button." },
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

export default function AlertDialogPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">AlertDialog</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            A modal dialog that interrupts the user with important content and expects a response. Built on Radix AlertDialog.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <AlertDialog>
            <AlertDialog.Trigger asChild>
              <Button>Delete Account</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Header>
                <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
                <AlertDialog.Description>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialog.Description>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                <AlertDialog.Action>Yes, delete account</AlertDialog.Action>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </section>

        {/* ─── Soft Confirmation ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Soft Confirmation</h2>
          <AlertDialog>
            <AlertDialog.Trigger asChild>
              <Button variant="secondary">Archive Project</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Header>
                <AlertDialog.Title>Archive this project?</AlertDialog.Title>
                <AlertDialog.Description>
                  The project will be moved to the archive. You can restore it at
                  any time from your settings.
                </AlertDialog.Description>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <AlertDialog.Cancel>Keep Active</AlertDialog.Cancel>
                <AlertDialog.Action>Archive</AlertDialog.Action>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<AlertDialog>
  <AlertDialog.Trigger asChild>
    <Button>Delete</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Header>
      <AlertDialog.Title>Are you sure?</AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone.
      </AlertDialog.Description>
    </AlertDialog.Header>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Continue</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog>`}</div>
        </section>
      </main>
    </div>
  );
}
