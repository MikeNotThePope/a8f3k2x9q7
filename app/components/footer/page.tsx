import Link from "next/link";
import { Footer } from "@/components/landing";

function PropsTable() {
  const props = [
    { name: "brand", type: "ReactNode", description: "Brand name or logo" },
    { name: "tagline", type: "string", description: "Short description below the brand" },
    { name: "groups", type: "FooterLinkGroup[]", description: "Array of { title, links: { label, href }[] }" },
    { name: "bottom", type: "ReactNode", description: "Content for the bottom bar (e.g. copyright)" },
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

export default function FooterPage() {
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
          <h1 className="font-head text-4xl mb-2">Footer</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Site footer with link groups, branding, and optional bottom bar.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Full Footer ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Full Footer</h2>
          <Footer
            brand="Acme"
            tagline="The modern platform for building and scaling your applications."
            groups={[
              {
                title: "Product",
                links: [
                  { label: "Features", href: "#" },
                  { label: "Pricing", href: "#" },
                  { label: "Docs", href: "#" },
                ],
              },
              {
                title: "Company",
                links: [
                  { label: "About", href: "#" },
                  { label: "Blog", href: "#" },
                  { label: "Careers", href: "#" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { label: "Privacy", href: "#" },
                  { label: "Terms", href: "#" },
                ],
              },
            ]}
            bottom="&copy; 2026 Acme, Inc. All rights reserved."
          />
        </section>

        {/* ─── Minimal ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Minimal</h2>
          <Footer
            brand="Acme"
            bottom="&copy; 2026 Acme, Inc."
          />
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Footer
  brand="Acme"
  tagline="Build and scale your apps."
  groups={[
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
  ]}
  bottom="© 2026 Acme, Inc."
/>`}</div>
        </section>
      </main>
    </div>
  );
}
