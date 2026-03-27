"use client";

import Link from "next/link";
import { Table } from "@/components/ui/Table";

function PropsTable() {
  const subComponents = [
    { name: "Table", type: "Root", description: "Wrapper with overflow handling and border" },
    { name: "Table.Header", type: "Component", description: "Table header section (thead)" },
    { name: "Table.Body", type: "Component", description: "Table body section (tbody)" },
    { name: "Table.Footer", type: "Component", description: "Table footer section (tfoot)" },
    { name: "Table.Row", type: "Component", description: "Table row with border and hover styles" },
    { name: "Table.Head", type: "Component", description: "Header cell with bold font" },
    { name: "Table.Cell", type: "Component", description: "Standard data cell" },
    { name: "Table.Caption", type: "Component", description: "Accessible caption below the table" },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Sub-component</th>
            <th className="text-left p-3 font-head">Type</th>
            <th className="text-left p-3 font-head">Description</th>
          </tr>
        </thead>
        <tbody>
          {subComponents.map((item) => (
            <tr key={item.name} className="border-b last:border-b-0">
              <td className="p-3 font-mono text-xs">{item.name}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{item.type}</td>
              <td className="p-3">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { invoice: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
  { invoice: "INV006", status: "Pending", method: "Bank Transfer", amount: "$200.00" },
  { invoice: "INV007", status: "Unpaid", method: "Credit Card", amount: "$300.00" },
];

export default function TablePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Table</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Semantic HTML table with header, body, footer, and caption. Styled with consistent borders and typography.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* --- Invoice Example --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Invoice Example</h2>
          <Table>
            <Table.Caption>A list of your recent invoices.</Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.Head className="w-[100px]">Invoice</Table.Head>
                <Table.Head>Status</Table.Head>
                <Table.Head>Method</Table.Head>
                <Table.Head className="text-right">Amount</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {invoices.map((invoice) => (
                <Table.Row key={invoice.invoice}>
                  <Table.Cell className="font-mono">{invoice.invoice}</Table.Cell>
                  <Table.Cell>{invoice.status}</Table.Cell>
                  <Table.Cell>{invoice.method}</Table.Cell>
                  <Table.Cell className="text-right">{invoice.amount}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Cell colSpan={3}>Total</Table.Cell>
                <Table.Cell className="text-right">$2,250.00</Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </section>

        {/* --- Simple Table --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Simple Table</h2>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Role</Table.Head>
                <Table.Head className="text-right">Department</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="font-head">Alice Johnson</Table.Cell>
                <Table.Cell>Engineer</Table.Cell>
                <Table.Cell className="text-right">Platform</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-head">Bob Smith</Table.Cell>
                <Table.Cell>Designer</Table.Cell>
                <Table.Cell className="text-right">Product</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-head">Carol Williams</Table.Cell>
                <Table.Cell>Manager</Table.Cell>
                <Table.Cell className="text-right">Engineering</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </section>

        {/* --- Empty State --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Empty State</h2>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>Invoice</Table.Head>
                <Table.Head>Status</Table.Head>
                <Table.Head className="text-right">Amount</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell colSpan={3} className="h-24 text-center text-muted-foreground">
                  No results.
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </section>

        {/* --- Props --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sub-components</h2>
          <PropsTable />
        </section>

        {/* --- Usage --- */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Table>
  <Table.Caption>A list of your recent invoices.</Table.Caption>
  <Table.Header>
    <Table.Row>
      <Table.Head>Invoice</Table.Head>
      <Table.Head>Status</Table.Head>
      <Table.Head className="text-right">Amount</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>INV001</Table.Cell>
      <Table.Cell>Paid</Table.Cell>
      <Table.Cell className="text-right">$250.00</Table.Cell>
    </Table.Row>
  </Table.Body>
  <Table.Footer>
    <Table.Row>
      <Table.Cell colSpan={2}>Total</Table.Cell>
      <Table.Cell className="text-right">$250.00</Table.Cell>
    </Table.Row>
  </Table.Footer>
</Table>`}</div>
        </section>
      </main>
    </div>
  );
}
