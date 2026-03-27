import Link from "next/link";
import { Testimonial } from "@/components/landing";

function PropsTable() {
  const props = [
    { name: "testimonials", type: "TestimonialItem[]", description: "Array of { quote, name, role?, company?, avatar? }" },
    { name: "columns", type: "1 | 2 | 3", description: "Number of grid columns (default 3)" },
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

const sampleTestimonials = [
  {
    quote: "We switched from our legacy system and saw a 40% increase in team productivity within the first month.",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
  },
  {
    quote: "The API-first approach made integration a breeze. Our developers had it running in production within a day.",
    name: "Marcus Johnson",
    role: "Lead Engineer",
    company: "DataPipe",
  },
  {
    quote: "Finally, enterprise-grade tooling that doesn't feel like it was built in 2005. The UX is phenomenal.",
    name: "Lisa Park",
    role: "VP of Product",
    company: "ScaleUp",
  },
];

export default function TestimonialPage() {
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
          <h1 className="font-head text-4xl mb-2">Testimonial</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Customer quote cards with author details.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── 3 Columns (default) ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">3 Columns (default)</h2>
          <Testimonial testimonials={sampleTestimonials} />
        </section>

        {/* ─── 2 Columns ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">2 Columns</h2>
          <Testimonial testimonials={sampleTestimonials.slice(0, 2)} columns={2} />
        </section>

        {/* ─── Single Column ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Single Column</h2>
          <Testimonial testimonials={sampleTestimonials.slice(0, 1)} columns={1} />
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Testimonial
  columns={3}
  testimonials={[
    {
      quote: "Amazing product!",
      name: "Jane Doe",
      role: "CTO",
      company: "Acme",
    },
  ]}
/>`}</div>
        </section>
      </main>
    </div>
  );
}
