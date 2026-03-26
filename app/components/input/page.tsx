"use client";

import Link from "next/link";
import { Input, Label } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "type", type: '"text" | "email" | "password" | "number" | "date" | "time" | "url" | "tel" | "search" | "color" | "file" | ...', description: "HTML input type" },
    { name: "placeholder", type: "string", description: "Placeholder text" },
    { name: "disabled", type: "boolean", description: "Disable interaction" },
    { name: "aria-invalid", type: "boolean", description: "Show error styling" },
    { name: "className", type: "string", description: "Additional classes" },
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

export default function InputPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Input</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Text input field supporting all standard HTML input types.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Text ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Text</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-text">Full Name</Label>
            <Input id="demo-text" placeholder="Jane Doe" />
          </form>
        </section>

        {/* ─── Email ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Email</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-email">Email Address</Label>
            <Input id="demo-email" type="email" placeholder="jane@example.com" />
          </form>
        </section>

        {/* ─── Password ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Password</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-password">Password</Label>
            <Input id="demo-password" type="password" placeholder="Enter password" />
          </form>
        </section>

        {/* ─── Number ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Number</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-number">Quantity</Label>
            <Input id="demo-number" type="number" placeholder="0" min={0} max={100} />
          </form>
        </section>

        {/* ─── Date ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Date</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-date">Birth Date</Label>
            <Input id="demo-date" type="date" />
          </form>
        </section>

        {/* ─── Time ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Time</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-time">Appointment Time</Label>
            <Input id="demo-time" type="time" />
          </form>
        </section>

        {/* ─── URL ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">URL</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-url">Website</Label>
            <Input id="demo-url" type="url" placeholder="https://example.com" />
          </form>
        </section>

        {/* ─── Tel ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Telephone</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-tel">Phone Number</Label>
            <Input id="demo-tel" type="tel" placeholder="+1 (555) 000-0000" />
          </form>
        </section>

        {/* ─── Search ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Search</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-search">Search</Label>
            <Input id="demo-search" type="search" placeholder="Search..." />
          </form>
        </section>

        {/* ─── Color ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Color</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-color">Favorite Color</Label>
            <Input id="demo-color" type="color" defaultValue="#ffdb33" className="h-12 p-1" />
          </form>
        </section>

        {/* ─── File ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">File</h2>
          <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="demo-file">Upload</Label>
            <Input id="demo-file" type="file" className="file:border-r-2 file:bg-primary file:text-primary-foreground file:px-4 file:py-2 file:font-head file:text-sm file:cursor-pointer p-0" />
          </form>
        </section>

        {/* ─── Disabled ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled</h2>
          <div className="flex flex-col gap-3 max-w-sm">
            <Input placeholder="Disabled input" disabled />
          </div>
        </section>

        {/* ─── Error ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Error State</h2>
          <div className="flex flex-col gap-3 max-w-sm">
            <Label htmlFor="demo-error">Email</Label>
            <Input id="demo-error" type="email" aria-invalid defaultValue="not-an-email" />
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Input type="text" placeholder="Name" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" min={0} max={100} />
<Input type="date" />
<Input type="file" />
<Input disabled placeholder="Disabled" />
<Input aria-invalid defaultValue="bad" />`}</div>
        </section>
      </main>
    </div>
  );
}
