"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from "@tanstack/react-table"

import {Button} from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

const data: Payment[] = [
    {
        id: "m5gr84i9",
        amount: 20,
        invoiceNumber: "m5gr84i9",
        date: new Date().toISOString(),
        status: "Pending",
        invoiceLink: "https://www.google.com",
    },
    {
        id: "m5gr74i9",
        amount: 200,
        invoiceNumber: "m5gr74i9",
        date: new Date().toISOString(),
        status: "Paid",
        invoiceLink: "https://www.google.com",
    },
    {
        id: "c2gr84i9",
        amount: 50,
        invoiceNumber: "m5gr84i9",
        date: new Date().toISOString(),
        status: "Failed",
        invoiceLink: "https://www.google.com",
    },
]

export type Payment = {
    id: string
    amount: number
    invoiceNumber: string
    date: string
    status: "Pending" | "Paid" | "Failed"
    invoiceLink: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "date",
        header: "Date",
        cell: ({row}) => (
            <div className="capitalize">{row.getValue("date")}</div>
        ),
    },
    {
        accessorKey: "invoiceNumber",
        header: "Invoice number",
        cell: ({row}) => <div>{row.getValue("invoiceNumber")}</div>,
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row}) => (
            <Badge
                className={cn(row.getValue("status") === 'Pending' ? "bg-orange-100 hover:bg-orange-100 text-orange-700 dark:bg-orange-500/30 dark:text-orange-300" : row.getValue("status") === 'Paid' ? "bg-green-100 hover:bg-green-100 text-green-700 dark:bg-green-500/30 dark:text-green-300" : row.getValue("status") === 'Failed' ? "bg-red-100 hover:bg-red-100 text-red-700 dark:bg-red-500/30 dark:text-red-300" : "")}>{row.getValue("status")}</Badge>
        ),
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({row}) => {
            const amount = parseFloat(row.getValue("amount"))

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "invoiceLink",
        header: "Invoice link",
        cell: ({row}) => (
            <div className="text-right">
                <a className="text-primary hover:underline"
                   href={row.getValue("invoiceLink")}
                   target="_blank">View</a>
            </div>
        ),
    },
]

export function BillingHistoryTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

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
    })

    return (
        <div className="w-full">
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 pt-4">
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
