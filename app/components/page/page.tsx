import Link from "next/link";
import { Card, Badge, Button } from "@/components/ui";
import { CardGrid } from "@/components/CardGrid";
import { SimplePage } from "@/components/Page";

const items = [
  { title: "Item Alpha", status: "Active" as const, detail: "Category A" },
  { title: "Item Beta", status: "Active" as const, detail: "Category B" },
  { title: "Item Gamma", status: "Archived" as const, detail: "Category A" },
];

const statusVariant = {
  Active: "success",
  Archived: "outline",
} as const;

function PropsTable() {
  const props = [
    { name: "title", type: "string", description: "Page heading displayed in the header. Required." },
    { name: "subtitle", type: "string", description: "Secondary text below the title." },
    { name: "actions", type: "ReactNode", description: "Slot rendered to the right of the title (e.g. buttons)." },
    { name: "children", type: "ReactNode", description: "Main content rendered below the header." },
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

export default function SimplePageDemoPage() {
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
          <h1 className="font-head text-4xl mb-2">SimplePage</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Layout wrapper with consistent header, title, actions slot, and content area.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Basic ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic</h2>
          <div className="border-2 overflow-hidden">
            <SimplePage title="Dashboard">
              <p className="font-sans text-muted-foreground">Page content goes here.</p>
            </SimplePage>
          </div>
        </section>

        {/* ─── With Subtitle ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Subtitle</h2>
          <div className="border-2 overflow-hidden">
            <SimplePage title="Items" subtitle="Browse and manage all items">
              <p className="font-sans text-muted-foreground">Page content goes here.</p>
            </SimplePage>
          </div>
        </section>

        {/* ─── With Actions ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Actions</h2>
          <div className="border-2 overflow-hidden">
            <SimplePage
              title="Items"
              subtitle="Browse and manage all items"
              actions={<Button size="sm">+ New Item</Button>}
            >
              <CardGrid>
                {items.map((item) => (
                  <Card key={item.title} variant="interactive">
                    <Card.Header>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-head text-base">{item.title}</h3>
                        <Badge variant={statusVariant[item.status]} size="sm">
                          {item.status}
                        </Badge>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <p className="font-sans text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </Card.Body>
                  </Card>
                ))}
              </CardGrid>
            </SimplePage>
          </div>
        </section>

        {/* ─── Empty State ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Empty State</h2>
          <div className="border-2 overflow-hidden">
            <SimplePage title="Items" subtitle="Browse and manage all items">
              <CardGrid />
            </SimplePage>
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<SimplePage
  title="Items"
  subtitle="Browse and manage all items"
  actions={<Button>+ New Item</Button>}
>
  <CardGrid columns={3}>
    {items.map(item => (
      <Card key={item.id} variant="interactive">
        <Card.Header>
          <h3>{item.title}</h3>
          <Badge variant="success">Active</Badge>
        </Card.Header>
        <Card.Body>
          <p>{item.detail}</p>
        </Card.Body>
      </Card>
    ))}
  </CardGrid>
</SimplePage>`}</div>
        </section>
      </main>
    </div>
  );
}
