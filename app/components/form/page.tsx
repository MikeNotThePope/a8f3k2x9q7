"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

function BasicExample() {
  const form = useForm({
    defaultValues: { username: "", email: "" },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {})}
        className="flex flex-col gap-4 max-w-sm"
      >
        <Form.Field
          control={form.control}
          name="username"
          rules={{ required: "Username is required" }}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Username</Form.Label>
              <Form.Control>
                <Input placeholder="Enter username" {...field} />
              </Form.Control>
              <Form.Description>Your public display name.</Form.Description>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Email</Form.Label>
              <Form.Control>
                <Input type="email" placeholder="you@example.com" {...field} />
              </Form.Control>
              <Form.Description>We will never share your email.</Form.Description>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function ValidationExample() {
  const form = useForm({
    defaultValues: { name: "", password: "" },
    mode: "onBlur",
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(() => {})}
        className="flex flex-col gap-4 max-w-sm"
      >
        <Form.Field
          control={form.control}
          name="name"
          rules={{
            required: "Name is required",
            minLength: { value: 3, message: "Name must be at least 3 characters" },
          }}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Name</Form.Label>
              <Form.Control>
                <Input placeholder="Enter your name" {...field} />
              </Form.Control>
              <Form.Description>Must be at least 3 characters.</Form.Description>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Form.Field
          control={form.control}
          name="password"
          rules={{
            required: "Password is required",
            minLength: { value: 8, message: "Password must be at least 8 characters" },
          }}
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Password</Form.Label>
              <Form.Control>
                <Input type="password" placeholder="Enter password" {...field} />
              </Form.Control>
              <Form.Description>Must be at least 8 characters.</Form.Description>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button type="submit">Create Account</Button>
      </form>
    </Form>
  );
}

function PropsTable() {
  const props = [
    { name: "control", type: "Control", description: "react-hook-form control object" },
    { name: "name", type: "string", description: "Field name path" },
    { name: "rules", type: "RegisterOptions", description: "Validation rules" },
    { name: "render", type: "({ field, fieldState }) => ReactNode", description: "Render function for the field" },
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

export default function FormPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Form</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Form component built on react-hook-form. Provides field context, validation, and accessible error messages.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Basic ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Basic</h2>
          <BasicExample />
        </section>

        {/* ─── Validation ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Validation</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Tab out of a field to trigger validation. Submit to see all errors.
          </p>
          <ValidationExample />
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
                  { name: "Form", desc: "Root provider wrapping react-hook-form FormProvider" },
                  { name: "Form.Field", desc: "Connects a field to form state via Controller" },
                  { name: "Form.Item", desc: "Wrapper that provides field ID context" },
                  { name: "Form.Label", desc: "Label connected to its field via htmlFor" },
                  { name: "Form.Control", desc: "Slot that passes aria attributes to the input" },
                  { name: "Form.Description", desc: "Help text below the input" },
                  { name: "Form.Message", desc: "Validation error message" },
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

        {/* ─── Field Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Field Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`const form = useForm({ defaultValues: { name: "" } });

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <Form.Field
      control={form.control}
      name="name"
      rules={{ required: "Name is required" }}
      render={({ field }) => (
        <Form.Item>
          <Form.Label>Name</Form.Label>
          <Form.Control>
            <Input {...field} />
          </Form.Control>
          <Form.Description>Help text.</Form.Description>
          <Form.Message />
        </Form.Item>
      )}
    />
    <Button type="submit">Submit</Button>
  </form>
</Form>`}</div>
        </section>
      </main>
    </div>
  );
}
