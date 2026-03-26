import Link from "next/link";
import { Card, Badge, Button } from "@/components/ui";
import { CardGrid } from "@/components/CardGrid";

const items = [
  { title: "Project Alpha", status: "Active" as const, detail: "Updated 2 days ago" },
  { title: "Project Beta", status: "Paused" as const, detail: "Updated 1 week ago" },
  { title: "Project Gamma", status: "Archived" as const, detail: "Updated 3 weeks ago" },
];

const statusVariant = {
  Active: "success",
  Paused: "warning",
  Archived: "outline",
} as const;

function PropsTable() {
  const props = [
    { name: "children", type: "ReactNode", description: "Card elements to render in the grid" },
    { name: "columns", type: "2 | 3 | 4", description: "Max columns at largest breakpoint. Default: 3" },
    { name: "className", type: "string", description: "Additional classes on the grid container" },
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

export default function CardGridPage() {
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
          <h1 className="font-head text-4xl mb-2">CardGrid</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Responsive grid layout for cards with built-in empty state.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── With Content ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Content</h2>
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
                <Card.Footer>
                  <Button size="sm" variant="outline">View</Button>
                </Card.Footer>
              </Card>
            ))}
          </CardGrid>
        </section>

        {/* ─── Empty State ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Empty State</h2>
          <CardGrid />
        </section>

        {/* ─── Column Variants ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Columns</h2>
          <h3 className="font-head text-lg mb-3">2 Columns</h3>
          <CardGrid columns={2}>
            {items.slice(0, 2).map((item) => (
              <Card key={item.title}>
                <Card.Header>
                  <h3 className="font-head text-base">{item.title}</h3>
                </Card.Header>
                <Card.Body>
                  <p className="font-sans text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </CardGrid>

          <h3 className="font-head text-lg mt-6 mb-3">4 Columns</h3>
          <CardGrid columns={4}>
            {[...items, { title: "Project Delta", status: "Active" as const, detail: "Updated today" }].map((item) => (
              <Card key={item.title}>
                <Card.Header>
                  <h3 className="font-head text-base">{item.title}</h3>
                </Card.Header>
                <Card.Body>
                  <p className="font-sans text-sm text-muted-foreground">
                    {item.detail}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </CardGrid>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<CardGrid columns={3}>
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
</CardGrid>`}</div>
        </section>
      </main>
    </div>
  );
}
