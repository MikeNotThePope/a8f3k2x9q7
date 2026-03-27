"use client";

import Link from "next/link";
import { Pagination } from "@/components/ui/Pagination";

function PropsTable() {
  const props = [
    { name: "isActive", type: "boolean", description: "Highlights the current page link" },
    { name: "size", type: '"sm" | "md" | "lg" | "icon"', description: "Size variant for pagination links" },
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

export default function PaginationPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Pagination</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Navigation component for paging through content. Uses button variants for consistent styling.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <Pagination>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous href="#" />
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link href="#" isActive>1</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link href="#">2</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link href="#">3</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Next href="#" />
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </section>

        {/* ─── With Ellipsis ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Ellipsis</h2>
          <Pagination>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous href="#" />
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link href="#" isActive>1</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link href="#">2</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link href="#">3</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Ellipsis />
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link href="#">10</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Next href="#" />
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </section>

        {/* ─── Middle Page ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Middle Page Active</h2>
          <Pagination>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous href="#" />
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Ellipsis />
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link href="#">4</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link href="#" isActive>5</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Link href="#">6</Pagination.Link>
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Ellipsis />
              </Pagination.Item>
              <Pagination.Item>
                <Pagination.Next href="#" />
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
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
                  { name: "Pagination", desc: "Root nav element with aria-label" },
                  { name: "Pagination.Content", desc: "Flex container for pagination items" },
                  { name: "Pagination.Item", desc: "List item wrapper" },
                  { name: "Pagination.Link", desc: "Page link with isActive state" },
                  { name: "Pagination.Previous", desc: "Previous page link with chevron" },
                  { name: "Pagination.Next", desc: "Next page link with chevron" },
                  { name: "Pagination.Ellipsis", desc: "Ellipsis indicator for skipped pages" },
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
          <h2 className="font-head text-2xl mb-4">Link Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Pagination>
  <Pagination.Content>
    <Pagination.Item>
      <Pagination.Previous href="#" />
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Link href="#" isActive>1</Pagination.Link>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Link href="#">2</Pagination.Link>
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Ellipsis />
    </Pagination.Item>
    <Pagination.Item>
      <Pagination.Next href="#" />
    </Pagination.Item>
  </Pagination.Content>
</Pagination>`}</div>
        </section>
      </main>
    </div>
  );
}
