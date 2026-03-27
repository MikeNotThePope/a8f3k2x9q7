import Link from "next/link";
import { NewsletterSignup } from "@/components/landing";

function PropsTable() {
  const props = [
    { name: "title", type: "ReactNode", description: 'Heading text (default "Stay in the loop")' },
    { name: "subtitle", type: "ReactNode", description: "Supporting text below the title" },
    { name: "inputPlaceholder", type: "string", description: 'Placeholder for the email input (default "you@example.com")' },
    { name: "buttonLabel", type: "ReactNode", description: 'Submit button text (default "Subscribe")' },
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

export default function NewsletterSignupPage() {
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
          <h1 className="font-head text-4xl mb-2">NewsletterSignup</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Email signup form with input and submit button.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <NewsletterSignup />
        </section>

        {/* ─── With Subtitle ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Subtitle</h2>
          <NewsletterSignup
            title="Stay up to date"
            subtitle="Get product updates and engineering insights delivered to your inbox."
          />
        </section>

        {/* ─── Custom Labels ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Labels</h2>
          <NewsletterSignup
            title="Join the waitlist"
            inputPlaceholder="your@email.com"
            buttonLabel="Join"
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<NewsletterSignup
  title="Stay up to date"
  subtitle="Get updates in your inbox."
  inputPlaceholder="you@example.com"
  buttonLabel="Subscribe"
/>`}</div>
        </section>
      </main>
    </div>
  );
}
