import type { Meta, StoryObj } from "@storybook/react-vite";
import { useForm } from "react-hook-form";
import { Form } from "./Form";
import { Input } from "./Input";
import { Button } from "./Button";

const meta = {
  title: "Primitives/Form",
  component: Form,
} satisfies Meta<typeof Form>;
export default meta;

type Story = StoryObj<typeof meta>;

function BasicFormExample() {
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
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export const Default: Story = {
  render: () => <BasicFormExample />,
};

function ValidationExample() {
  const form = useForm({
    defaultValues: { name: "" },
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
        <Button type="submit">Validate</Button>
      </form>
    </Form>
  );
}

export const WithValidation: Story = {
  render: () => <ValidationExample />,
};
