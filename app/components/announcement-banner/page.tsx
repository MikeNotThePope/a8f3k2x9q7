import Link from "next/link";
import { AnnouncementBanner } from "@/components/landing";

function PropsTable() {
  const props = [
    { name: "children", type: "ReactNode", description: "Banner content" },
    { name: "dismissible", type: "boolean", description: "Show close button (default true)" },
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

export default function AnnouncementBannerPage() {
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
          <h1 className="font-head text-4xl mb-2">AnnouncementBanner</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Dismissible top-of-page banner for announcements and promotions.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Default ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <AnnouncementBanner>
            Now in Public Beta — Try it free for 14 days
          </AnnouncementBanner>
        </section>

        {/* ─── Non-dismissible ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Non-dismissible</h2>
          <AnnouncementBanner dismissible={false}>
            Scheduled maintenance on March 30, 2026 from 2:00–4:00 AM UTC
          </AnnouncementBanner>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<AnnouncementBanner>
  Now in Public Beta — Try it free
</AnnouncementBanner>

<AnnouncementBanner dismissible={false}>
  Maintenance scheduled for tonight
</AnnouncementBanner>`}</div>
        </section>
      </main>
    </div>
  );
}
