"use client";

import Link from "next/link";
import { InputOTP } from "@/components/ui/InputOTP";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

function PropsTable() {
  const props = [
    { name: "maxLength", type: "number", description: "Total number of input slots" },
    { name: "value", type: "string", description: "Controlled value" },
    { name: "onChange", type: "(value: string) => void", description: "Called when value changes" },
    { name: "disabled", type: "boolean", description: "Disables the entire input" },
    { name: "pattern", type: "string | RegExp", description: "Regex pattern to validate each character (e.g. REGEXP_ONLY_DIGITS)" },
    { name: "containerClassName", type: "string", description: "Additional classes on the outer container" },
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

export default function InputOTPPage() {
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
          <h1 className="font-head text-4xl mb-2">InputOTP</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            One-time password input with auto-focus and keyboard navigation. Built on input-otp.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Default (6-digit with separator) --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Default</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            A standard 6-digit OTP input split into two groups of three.
          </p>
          <InputOTP maxLength={6}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
        </section>

        {/* --- 4-digit --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Four Digits</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            A compact 4-digit OTP in a single group.
          </p>
          <InputOTP maxLength={4}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
              <InputOTP.Slot index={3} />
            </InputOTP.Group>
          </InputOTP>
        </section>

        {/* --- Alphanumeric --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Alphanumeric</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Accepts both letters and digits using <code className="font-mono text-xs bg-muted px-1 py-0.5">REGEXP_ONLY_DIGITS_AND_CHARS</code>.
          </p>
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
        </section>

        {/* --- Disabled --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Disabled</h2>
          <InputOTP maxLength={6} disabled>
            <InputOTP.Group>
              <InputOTP.Slot index={0} />
              <InputOTP.Slot index={1} />
              <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              <InputOTP.Slot index={3} />
              <InputOTP.Slot index={4} />
              <InputOTP.Slot index={5} />
            </InputOTP.Group>
          </InputOTP>
        </section>

        {/* --- Props --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* --- Usage --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { InputOTP } from "@/components/ui";

<InputOTP maxLength={6}>
  <InputOTP.Group>
    <InputOTP.Slot index={0} />
    <InputOTP.Slot index={1} />
    <InputOTP.Slot index={2} />
  </InputOTP.Group>
  <InputOTP.Separator />
  <InputOTP.Group>
    <InputOTP.Slot index={3} />
    <InputOTP.Slot index={4} />
    <InputOTP.Slot index={5} />
  </InputOTP.Group>
</InputOTP>`}</div>
        </section>
      </main>
    </div>
  );
}
