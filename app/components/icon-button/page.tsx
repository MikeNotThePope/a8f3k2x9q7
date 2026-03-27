import Link from "next/link";
import { IconButton } from "@/components/ui";

function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function PropsTable() {
  const props = [
    { name: "variant", type: '"default" | "secondary" | "outline" | "ghost"', description: "Visual style" },
    { name: "size", type: '"sm" | "md" | "lg"', description: "Button and icon size" },
    { name: "asChild", type: "boolean", description: "Render as child element via Radix Slot" },
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

export default function IconButtonPage() {
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
          <h1 className="font-head text-4xl mb-2">IconButton</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Icon-only button with retro shadow, sized to fit SVG icons.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Variants ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Variants</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <IconButton aria-label="Like"><HeartIcon /></IconButton>
            <IconButton variant="secondary" aria-label="Like"><HeartIcon /></IconButton>
            <IconButton variant="outline" aria-label="Like"><HeartIcon /></IconButton>
            <IconButton variant="ghost" aria-label="Like"><HeartIcon /></IconButton>
          </div>
        </section>

        {/* ─── Sizes ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sizes</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <IconButton size="sm" aria-label="Close"><XIcon /></IconButton>
            <IconButton size="md" aria-label="Close"><XIcon /></IconButton>
            <IconButton size="lg" aria-label="Close"><XIcon /></IconButton>
          </div>
        </section>

        {/* ─── Use case: Password toggle ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Use Case: Password Toggle</h2>
          <div className="flex items-center gap-2">
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-border px-3 py-2 font-sans text-sm bg-background"
            />
            <IconButton variant="outline" size="sm" aria-label="Show password">
              <EyeIcon />
            </IconButton>
          </div>
        </section>

        {/* ─── Disabled ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <IconButton disabled aria-label="Like"><HeartIcon /></IconButton>
            <IconButton disabled variant="outline" aria-label="Like"><HeartIcon /></IconButton>
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<IconButton variant="outline" size="sm" aria-label="Toggle password">
  <EyeIcon />
</IconButton>

<IconButton variant="ghost" aria-label="Close">
  <XIcon />
</IconButton>`}</div>
        </section>
      </main>
    </div>
  );
}
