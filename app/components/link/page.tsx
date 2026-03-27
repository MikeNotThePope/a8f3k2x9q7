import NextLink from "next/link";
import { Link } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "variant", type: '"default" | "muted" | "destructive" | "plain"', description: "Visual style" },
    { name: "size", type: '"sm" | "md" | "lg"', description: "Text size" },
    { name: "asChild", type: "boolean", description: "Render as child element via Radix Slot (e.g. wrap Next.js Link)" },
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

export default function LinkPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <NextLink
            href="/"
            className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block"
          >
            &larr; All Components
          </NextLink>
          <h1 className="font-head text-4xl mb-2">Link</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Styled anchor with variant support and asChild for composing with Next.js Link.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Variants ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Variants</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <Link href="#">Default</Link>
            <Link href="#" variant="muted">Muted</Link>
            <Link href="#" variant="destructive">Destructive</Link>
            <Link href="#" variant="plain">Plain</Link>
          </div>
        </section>

        {/* ─── Sizes ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sizes</h2>
          <div className="flex flex-wrap gap-6 items-center">
            <Link href="#" size="sm">Small</Link>
            <Link href="#" size="md">Medium</Link>
            <Link href="#" size="lg">Large</Link>
          </div>
        </section>

        {/* ─── With Next.js Link ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Next.js Link (asChild)</h2>
          <Link asChild variant="default">
            <NextLink href="/">Go Home</NextLink>
          </Link>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Link href="/forgot-password" variant="muted" size="sm">
  Forgot password?
</Link>

{/* Compose with Next.js Link */}
<Link asChild variant="default">
  <NextLink href="/sign-up">Create account</NextLink>
</Link>`}</div>
        </section>
      </main>
    </div>
  );
}
