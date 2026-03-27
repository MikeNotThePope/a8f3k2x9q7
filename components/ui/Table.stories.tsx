import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "./Table";

const meta = {
  title: "Primitives/Table",
  component: Table,
} satisfies Meta<typeof Table>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Name</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Role</Table.Head>
          <Table.Head className="text-right">Actions</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alice Johnson</Table.Cell>
          <Table.Cell>Active</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
          <Table.Cell className="text-right">Edit</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob Smith</Table.Cell>
          <Table.Cell>Inactive</Table.Cell>
          <Table.Cell>Editor</Table.Cell>
          <Table.Cell className="text-right">Edit</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Charlie Brown</Table.Cell>
          <Table.Cell>Active</Table.Cell>
          <Table.Cell>Viewer</Table.Cell>
          <Table.Cell className="text-right">Edit</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <Table>
      <Table.Caption>A list of recent invoices.</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head>Invoice</Table.Head>
          <Table.Head>Status</Table.Head>
          <Table.Head>Method</Table.Head>
          <Table.Head className="text-right">Amount</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell className="font-head">INV-001</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
          <Table.Cell>Credit Card</Table.Cell>
          <Table.Cell className="text-right">$250.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="font-head">INV-002</Table.Cell>
          <Table.Cell>Pending</Table.Cell>
          <Table.Cell>Bank Transfer</Table.Cell>
          <Table.Cell className="text-right">$150.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="font-head">INV-003</Table.Cell>
          <Table.Cell>Unpaid</Table.Cell>
          <Table.Cell>PayPal</Table.Cell>
          <Table.Cell className="text-right">$350.00</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>Total</Table.Cell>
          <Table.Cell className="text-right font-head">$750.00</Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Head>Product</Table.Head>
          <Table.Head>Category</Table.Head>
          <Table.Head className="text-right">Price</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {[
          { product: "Widget A", category: "Hardware", price: "$29.99" },
          { product: "Widget B", category: "Software", price: "$49.99" },
          { product: "Widget C", category: "Hardware", price: "$19.99" },
          { product: "Widget D", category: "Services", price: "$99.99" },
          { product: "Widget E", category: "Software", price: "$39.99" },
        ].map((row, i) => (
          <Table.Row key={row.product} className={i % 2 === 1 ? "bg-muted" : ""}>
            <Table.Cell className="font-head">{row.product}</Table.Cell>
            <Table.Cell>{row.category}</Table.Cell>
            <Table.Cell className="text-right">{row.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  ),
};
