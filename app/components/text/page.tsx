import Link from "next/link";
import { Text } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "variant", type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "small" | "code"', description: "Visual style (default: body)" },
    { name: "as", type: "ElementType", description: "Override the rendered HTML element" },
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

export default function TextPage() {
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
          <h1 className="font-head text-4xl mb-2">Text</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Typography primitives for headings, body, small text, and inline code.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Headings ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Headings</h2>
          <div className="flex flex-col gap-4 border-2 p-6 bg-card">
            <Text variant="h1">Heading 1</Text>
            <Text variant="h2">Heading 2</Text>
            <Text variant="h3">Heading 3</Text>
            <Text variant="h4">Heading 4</Text>
            <Text variant="h5">Heading 5</Text>
            <Text variant="h6">Heading 6</Text>
          </div>
        </section>

        {/* ─── Body ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Body</h2>
          <div className="flex flex-col gap-4 border-2 p-6 bg-card">
            <Text>
              This is default body text. It renders as a paragraph using Space Grotesk
              at the base size. Good for content, descriptions, and general prose.
            </Text>
            <Text variant="small">
              This is small text, useful for captions, labels, and secondary information.
            </Text>
          </div>
        </section>

        {/* ─── Code ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Code</h2>
          <div className="flex flex-col gap-4 border-2 p-6 bg-card">
            <Text>
              Use the <Text variant="code" as="code">code</Text> variant for inline code
              rendered in Space Mono.
            </Text>
            <Text variant="code" as="pre">
              {"const x = 42;\nconsole.log(x);"}
            </Text>
          </div>
        </section>

        {/* ─── Custom element ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Element</h2>
          <div className="flex flex-col gap-4 border-2 p-6 bg-card">
            <Text variant="h3" as="span">
              h3 styling rendered as a span
            </Text>
            <Text variant="body" as="label">
              Body text rendered as a label
            </Text>
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Text variant="h1">Page Title</Text>
<Text variant="h2">Section Heading</Text>
<Text>Body paragraph text.</Text>
<Text variant="small">Caption or secondary text.</Text>
<Text variant="code" as="code">inline code</Text>
<Text variant="h3" as="span">h3 style on a span</Text>`}</div>
        </section>
      </main>
    </div>
  );
}
