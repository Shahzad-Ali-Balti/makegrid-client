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

const data: Payment[] = [
    {
        id: "m5gr84i9",
        amount: 20,
        balance: 220,
        dateTime: new Date().toISOString(),
        type: "Follow the creator"
    },
    {
        id: "m5gr54i9",
        amount: 20,
        balance: 200,
        dateTime: new Date().toISOString(),
        type: "Follow the creator"
    },
    {
        id: "m5gr12i9",
        amount: -10,
        balance: 180,
        dateTime: new Date().toISOString(),
        type: "Texture Stage"
    },
    {
        id: "m5ds12i9",
        amount: -10,
        balance: 190,
        dateTime: new Date().toISOString(),
        type: "Model Stage"
    },
    {
        id: "m6ds12i9",
        amount: 95,
        balance: 200,
        dateTime: new Date().toISOString(),
        type: "Monthly free credit"
    },
]

export type Payment = {
    id: string
    amount: number
    balance: number
    dateTime: string
    type: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "dateTime",
        header: "Date & time",
        cell: ({row}) => (
            <div className="capitalize">{row.getValue("dateTime")}</div>
        ),
    },
    {
        accessorKey: "type",
        header: "Type",
        cell: ({row}) => <div>{row.getValue("type")}</div>,
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({row}) => <div>{row.getValue("amount")}</div>,
    },
    {
        accessorKey: "balance",
        header: "Balance",
        cell: ({row}) => <div>{row.getValue("balance")}</div>,
    },
]

export function AppUsageHistoryTable() {
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
