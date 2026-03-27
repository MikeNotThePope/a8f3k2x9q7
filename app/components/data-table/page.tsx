"use client";

import Link from "next/link";
import { DataTable, type ColumnDef } from "@/components/ui/DataTable";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Payment[] = [
  { id: "m5gr84i9", amount: 316, status: "success", email: "ken99@yahoo.com" },
  { id: "3u1reuv4", amount: 242, status: "success", email: "Abe45@gmail.com" },
  { id: "derv1ws0", amount: 837, status: "processing", email: "Monserrat44@gmail.com" },
  { id: "5kma53ae", amount: 874, status: "success", email: "Silas22@gmail.com" },
  { id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@hotmail.com" },
  { id: "x9f2kp3l", amount: 150, status: "pending", email: "alex@example.com" },
  { id: "y7h4nm8q", amount: 999, status: "success", email: "sarah@company.co" },
  { id: "z1j6bw5r", amount: 432, status: "processing", email: "mike@startup.io" },
];

const fullColumns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 size-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-sans">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>Actions</DropdownMenu.Label>
            <DropdownMenu.Item onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>View customer</DropdownMenu.Item>
            <DropdownMenu.Item>View payment details</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      );
    },
  },
];

const simpleColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="text-right font-sans">{formatted}</div>;
    },
  },
];

function PropsTable() {
  const props = [
    { name: "columns", type: "ColumnDef<TData, TValue>[]", description: "@tanstack/react-table column definitions" },
    { name: "data", type: "TData[]", description: "Array of data rows" },
    { name: "filterColumn", type: "string", description: "Column ID to filter on (shows filter input when set)" },
    { name: "filterPlaceholder", type: "string", description: "Placeholder for filter input" },
    { name: "showColumnToggle", type: "boolean", description: "Show column visibility toggle dropdown" },
    { name: "showPagination", type: "boolean", description: "Show pagination controls" },
    { name: "showSelectedCount", type: "boolean", description: "Show selected row count" },
    { name: "className", type: "string", description: "Additional classes" },
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

export default function DataTablePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link href="/" className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block">
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">DataTable</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Feature-rich data table with sorting, filtering, pagination, row selection, and column visibility. Built on @tanstack/react-table.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* Full Featured */}
        <section>
          <h2 className="font-head text-2xl mb-4">Full Featured</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Includes row selection, sortable columns, email filtering, column visibility toggle, pagination, and row actions.
          </p>
          <DataTable
            columns={fullColumns}
            data={data}
            filterColumn="email"
            filterPlaceholder="Filter emails..."
          />
        </section>

        {/* Simple Table */}
        <section>
          <h2 className="font-head text-2xl mb-4">Simple Table</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Minimal configuration with just columns and data.
          </p>
          <DataTable
            columns={simpleColumns}
            data={data}
            showColumnToggle={false}
            showSelectedCount={false}
          />
        </section>

        {/* With Filter Only */}
        <section>
          <h2 className="font-head text-2xl mb-4">With Filter Only</h2>
          <DataTable
            columns={simpleColumns}
            data={data}
            filterColumn="email"
            filterPlaceholder="Search by email..."
            showColumnToggle={false}
            showSelectedCount={false}
          />
        </section>

        {/* No Pagination */}
        <section>
          <h2 className="font-head text-2xl mb-4">No Pagination</h2>
          <DataTable
            columns={simpleColumns}
            data={data.slice(0, 4)}
            showPagination={false}
            showColumnToggle={false}
          />
        </section>

        {/* Props */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* Usage */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { DataTable, type ColumnDef } from "@/components/ui/DataTable";

type User = { id: string; name: string; email: string };

const columns: ColumnDef<User>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
];

<DataTable
  columns={columns}
  data={users}
  filterColumn="email"
  filterPlaceholder="Filter emails..."
/>`}</div>
        </section>
      </main>
    </div>
  );
}
