import Link from "next/link";
import { Avatar } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "className", type: "string", description: "Additional classes on the root element" },
    { name: "children", type: "ReactNode", description: "Avatar.Image and Avatar.Fallback sub-components" },
  ];

  const subComponents = [
    { name: "Avatar.Image", props: "src, alt, className", description: "Renders the user photo" },
    { name: "Avatar.Fallback", props: "children, className", description: "Shown while image loads or when no src is set" },
  ];

  return (
    <div className="flex flex-col gap-6">
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

      <h3 className="font-head text-lg">Sub-components</h3>
      <div className="border-2 overflow-x-auto">
        <table className="w-full font-sans text-sm">
          <thead>
            <tr className="border-b-2 bg-muted">
              <th className="text-left p-3 font-head">Component</th>
              <th className="text-left p-3 font-head">Props</th>
              <th className="text-left p-3 font-head">Description</th>
            </tr>
          </thead>
          <tbody>
            {subComponents.map((sub) => (
              <tr key={sub.name} className="border-b last:border-b-0">
                <td className="p-3 font-mono text-xs">{sub.name}</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">{sub.props}</td>
                <td className="p-3">{sub.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AvatarPage() {
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
          <h1 className="font-head text-4xl mb-2">Avatar</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            User photo with fallback initials. Built on Radix Avatar.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── With Image ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Image</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar>
              <Avatar.Image src="https://i.pravatar.cc/80?u=alice" alt="Alice" />
              <Avatar.Fallback>AL</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image src="https://i.pravatar.cc/80?u=bob" alt="Bob" />
              <Avatar.Fallback>BO</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image src="https://i.pravatar.cc/80?u=carol" alt="Carol" />
              <Avatar.Fallback>CA</Avatar.Fallback>
            </Avatar>
          </div>
        </section>

        {/* ─── Fallback Only ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Fallback Only</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar>
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Fallback>MK</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Fallback>ZR</Avatar.Fallback>
            </Avatar>
          </div>
        </section>

        {/* ─── Custom Sizes ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Sizes</h2>
          <div className="flex flex-wrap gap-4 items-end">
            <Avatar className="h-8 w-8">
              <Avatar.Fallback className="text-xs">SM</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Fallback>MD</Avatar.Fallback>
            </Avatar>
            <Avatar className="h-14 w-14">
              <Avatar.Fallback className="text-lg">LG</Avatar.Fallback>
            </Avatar>
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Avatar>
  <Avatar.Image src="/photo.jpg" alt="Jane Doe" />
  <Avatar.Fallback>JD</Avatar.Fallback>
</Avatar>`}</div>
        </section>
      </main>
    </div>
  );
}
