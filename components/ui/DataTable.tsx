"use client";

import * as React from "react";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Input } from "./Input";
import { Table } from "./Table";
import { DropdownMenu } from "./DropdownMenu";

/* ─── Types ─── */

export interface IDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterColumn?: string;
  filterPlaceholder?: string;
  showColumnToggle?: boolean;
  showPagination?: boolean;
  showSelectedCount?: boolean;
  className?: string;
}

/* ─── Toolbar ─── */

interface IDataTableToolbarProps {
  filterValue: string;
  onFilterChange: (value: string) => void;
  filterPlaceholder: string;
  showColumnToggle: boolean;
  columns: { id: string; getCanHide: () => boolean; getIsVisible: () => boolean; toggleVisibility: (value: boolean) => void }[];
}

const DataTableToolbar = ({
  filterValue,
  onFilterChange,
  filterPlaceholder,
  showColumnToggle,
  columns,
}: IDataTableToolbarProps) => (
  <div className="flex items-center py-4 gap-2">
    <Input
      placeholder={filterPlaceholder}
      value={filterValue}
      onChange={(event) => onFilterChange(event.target.value)}
      className="max-w-sm"
    />
    {showColumnToggle && (
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="outline" className="ml-auto">
            Columns <ChevronDown className="ml-2 size-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          {columns
            .filter((column) => column.getCanHide())
            .map((column) => (
              <DropdownMenu.CheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id}
              </DropdownMenu.CheckboxItem>
            ))}
        </DropdownMenu.Content>
      </DropdownMenu>
    )}
  </div>
);
DataTableToolbar.displayName = "DataTable.Toolbar";

/* ─── Pagination ─── */

interface IDataTablePaginationProps {
  selectedCount: number;
  totalCount: number;
  showSelectedCount: boolean;
  canPreviousPage: boolean;
  canNextPage: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const DataTablePagination = ({
  selectedCount,
  totalCount,
  showSelectedCount,
  canPreviousPage,
  canNextPage,
  onPreviousPage,
  onNextPage,
}: IDataTablePaginationProps) => (
  <div className="flex items-center justify-end gap-2 py-4">
    {showSelectedCount && (
      <div className="text-foreground flex-1 text-sm font-sans">
        {selectedCount} of {totalCount} row(s) selected.
      </div>
    )}
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={onPreviousPage}
        disabled={!canPreviousPage}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onNextPage}
        disabled={!canNextPage}
      >
        Next
      </Button>
    </div>
  </div>
);
DataTablePagination.displayName = "DataTable.Pagination";

/* ─── SortButton ─── */

interface IDataTableSortButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const DataTableSortButton = ({
  children,
  onClick,
  className,
}: IDataTableSortButtonProps) => (
  <Button
    variant="ghost"
    size="sm"
    onClick={onClick}
    className={cn(className)}
  >
    {children}
    <ArrowUpDown className="ml-2 size-4" />
  </Button>
);
DataTableSortButton.displayName = "DataTable.SortButton";

/* ─── DataTable ─── */

function DataTableRoot<TData, TValue>({
  columns,
  data,
  filterColumn,
  filterPlaceholder = "Filter...",
  showColumnToggle = true,
  showPagination = true,
  showSelectedCount = true,
  className,
}: IDataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className={cn("w-full font-sans text-foreground", className)}>
      {filterColumn && (
        <DataTableToolbar
          filterValue={
            (table.getColumn(filterColumn)?.getFilterValue() as string) ?? ""
          }
          onFilterChange={(value) =>
            table.getColumn(filterColumn)?.setFilterValue(value)
          }
          filterPlaceholder={filterPlaceholder}
          showColumnToggle={showColumnToggle}
          columns={table.getAllColumns()}
        />
      )}
      <div>
        <Table>
          <Table.Header className="font-head">
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row
                className="bg-muted text-foreground"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <Table.Head className="text-foreground" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Table.Head>
                ))}
              </Table.Row>
            ))}
          </Table.Header>
          <Table.Body>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <Table.Row
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Table.Cell className="px-4 py-2" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
      {showPagination && (
        <DataTablePagination
          selectedCount={table.getFilteredSelectedRowModel().rows.length}
          totalCount={table.getFilteredRowModel().rows.length}
          showSelectedCount={showSelectedCount}
          canPreviousPage={table.getCanPreviousPage()}
          canNextPage={table.getCanNextPage()}
          onPreviousPage={() => table.previousPage()}
          onNextPage={() => table.nextPage()}
        />
      )}
    </div>
  );
}

/* ─── Composite export ─── */

const DataTableComponent = Object.assign(DataTableRoot, {
  SortButton: DataTableSortButton,
});

export { DataTableComponent as DataTable, type ColumnDef, flexRender };
