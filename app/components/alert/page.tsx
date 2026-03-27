import Link from "next/link";
import { Alert } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "variant", type: '"default" | "solid"', description: "Background treatment" },
    { name: "status", type: '"error" | "success" | "warning" | "info"', description: "Semantic color (overrides variant background)" },
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

export default function AlertPage() {
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
          <h1 className="font-head text-4xl mb-2">Alert</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Contextual feedback messages with semantic status colors and composable title/description.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Variants ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Variants</h2>
          <div className="flex flex-col gap-4">
            <Alert>
              <Alert.Title>Default</Alert.Title>
              <Alert.Description>This is a default alert with no status.</Alert.Description>
            </Alert>
            <Alert variant="solid">
              <Alert.Title>Solid</Alert.Title>
              <Alert.Description>This is a solid alert with inverted colors.</Alert.Description>
            </Alert>
          </div>
        </section>

        {/* ─── Status ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Status</h2>
          <div className="flex flex-col gap-4">
            <Alert status="error">
              <Alert.Title>Error</Alert.Title>
              <Alert.Description>Invalid email or password. Please try again.</Alert.Description>
            </Alert>
            <Alert status="success">
              <Alert.Title>Success</Alert.Title>
              <Alert.Description>Your account has been created successfully.</Alert.Description>
            </Alert>
            <Alert status="warning">
              <Alert.Title>Warning</Alert.Title>
              <Alert.Description>Your session will expire in 5 minutes.</Alert.Description>
            </Alert>
            <Alert status="info">
              <Alert.Title>Info</Alert.Title>
              <Alert.Description>A verification email has been sent to your inbox.</Alert.Description>
            </Alert>
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Alert status="error">
  <Alert.Title>Error</Alert.Title>
  <Alert.Description>Invalid credentials.</Alert.Description>
</Alert>

<Alert status="success">
  <Alert.Title>Account created</Alert.Title>
  <Alert.Description>Check your email to verify.</Alert.Description>
</Alert>`}</div>
        </section>
      </main>
    </div>
  );
}
