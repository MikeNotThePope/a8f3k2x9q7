"use client";

import Link from "next/link";
import {
  FormLayout,
  Input,
  Textarea,
  Checkbox,
  RadioGroup,
  Select,
  Switch,
  Slider,
  Button,
} from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "FormLayout", type: "<form>", description: "Root form element. Accepts all standard form attributes." },
    { name: "FormLayout.Section", type: "title?, description?", description: "Groups related fields under a heading with a bottom border." },
    { name: "FormLayout.Field", type: "label?, htmlFor?, description?, error?, required?", description: "Wraps a single control with label, helper text, and error message." },
    { name: "FormLayout.Row", type: "<div>", description: "Inline grid — 1 column on mobile, 2 on sm+. Override via className." },
    { name: "FormLayout.Actions", type: 'align?: "left" | "right" | "center" | "between"', description: "Button bar at the bottom with a top border." },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Sub-component</th>
            <th className="text-left p-3 font-head">Key Props</th>
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

export default function FormLayoutPage() {
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
          <h1 className="font-head text-4xl mb-2">FormLayout</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Structural shell for forms — handles sections, field spacing, labels,
            validation messages, inline rows, and action bars.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Full Example ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Full Example</h2>

          <div className="max-w-2xl border-2 p-6 bg-card shadow-md">
            <FormLayout onSubmit={(e) => e.preventDefault()}>
              <FormLayout.Section
                title="Account"
                description="Your login credentials and display name."
              >
                <FormLayout.Row>
                  <FormLayout.Field label="First Name" htmlFor="first" required>
                    <Input id="first" placeholder="Jane" />
                  </FormLayout.Field>
                  <FormLayout.Field label="Last Name" htmlFor="last" required>
                    <Input id="last" placeholder="Doe" />
                  </FormLayout.Field>
                </FormLayout.Row>

                <FormLayout.Field
                  label="Email"
                  htmlFor="email"
                  description="We'll never share your email."
                  required
                >
                  <Input id="email" type="email" placeholder="jane@example.com" />
                </FormLayout.Field>

                <FormLayout.Field
                  label="Password"
                  htmlFor="password"
                  error="Password must be at least 8 characters."
                  required
                >
                  <Input id="password" type="password" aria-invalid />
                </FormLayout.Field>
              </FormLayout.Section>

              <FormLayout.Section
                title="Profile"
                description="Tell us a bit about yourself."
              >
                <FormLayout.Field label="Bio" htmlFor="bio">
                  <Textarea id="bio" placeholder="A few words about you..." />
                </FormLayout.Field>

                <FormLayout.Row>
                  <FormLayout.Field label="Role" htmlFor="role">
                    <Select>
                      <Select.Trigger id="role">
                        <Select.Value placeholder="Select a role" />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Item value="dev">Developer</Select.Item>
                        <Select.Item value="design">Designer</Select.Item>
                        <Select.Item value="pm">Product Manager</Select.Item>
                      </Select.Content>
                    </Select>
                  </FormLayout.Field>
                  <FormLayout.Field label="Experience" htmlFor="exp">
                    <RadioGroup defaultValue="mid">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <RadioGroup.Item value="junior" id="junior" />
                          <label htmlFor="junior" className="font-sans text-sm">Junior</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroup.Item value="mid" id="mid" />
                          <label htmlFor="mid" className="font-sans text-sm">Mid</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroup.Item value="senior" id="senior" />
                          <label htmlFor="senior" className="font-sans text-sm">Senior</label>
                        </div>
                      </div>
                    </RadioGroup>
                  </FormLayout.Field>
                </FormLayout.Row>

                <FormLayout.Field
                  label="Comfort with TypeScript"
                  description="1 = beginner, 10 = expert"
                >
                  <Slider defaultValue={[5]} max={10} min={1} step={1} />
                </FormLayout.Field>
              </FormLayout.Section>

              <FormLayout.Section title="Notifications">
                <FormLayout.Field>
                  <div className="flex items-center gap-3">
                    <Switch id="marketing" />
                    <label htmlFor="marketing" className="font-sans text-sm">
                      Receive marketing emails
                    </label>
                  </div>
                </FormLayout.Field>

                <FormLayout.Field>
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="font-sans text-sm">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </FormLayout.Field>
              </FormLayout.Section>

              <FormLayout.Actions align="between">
                <Button variant="link" type="button">
                  Cancel
                </Button>
                <Button type="submit">Create Account</Button>
              </FormLayout.Actions>
            </FormLayout>
          </div>
        </section>

        {/* ─── Minimal ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Minimal (No Sections)</h2>

          <div className="max-w-sm border-2 p-6 bg-card shadow-md">
            <FormLayout onSubmit={(e) => e.preventDefault()}>
              <FormLayout.Field label="Email" htmlFor="min-email" required>
                <Input id="min-email" type="email" placeholder="you@example.com" />
              </FormLayout.Field>
              <FormLayout.Field label="Message" htmlFor="min-msg" required>
                <Textarea id="min-msg" placeholder="Your message..." rows={3} />
              </FormLayout.Field>
              <FormLayout.Actions>
                <Button type="submit">Send</Button>
              </FormLayout.Actions>
            </FormLayout>
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<FormLayout onSubmit={handleSubmit}>
  <FormLayout.Section title="Details" description="...">
    <FormLayout.Row>
      <FormLayout.Field label="First" htmlFor="f" required>
        <Input id="f" />
      </FormLayout.Field>
      <FormLayout.Field label="Last" htmlFor="l">
        <Input id="l" />
      </FormLayout.Field>
    </FormLayout.Row>

    <FormLayout.Field label="Email" error="Required">
      <Input type="email" aria-invalid />
    </FormLayout.Field>
  </FormLayout.Section>

  <FormLayout.Actions align="right">
    <Button variant="link">Cancel</Button>
    <Button type="submit">Save</Button>
  </FormLayout.Actions>
</FormLayout>`}</div>
        </section>
      </main>
    </div>
  );
}
