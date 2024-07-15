"use client"

import { TableCell } from "@/components/ui/table"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

export const attendance_column: ColumnDef<Attendance>[] = [
    {
        accessorKey: "timestamp",
        header: "Date",
        cell: ({ row }) => {
            return <TableCell>
                {new Date( row.original.timestamp.split("T")[0]).toDateString()}
            </TableCell>
        }
    },
    {
        accessorKey: "present",
        header: "Status",
        cell: ({ row }) => {
            return <TableCell
                className={`
                    ${row.original.present ? "text-green-500" : "text-red-500"}
                    `}
            >
                {row.original.present ? "Present" : "Absent"}
            </TableCell>
        }
    },

]