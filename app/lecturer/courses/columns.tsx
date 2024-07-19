"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

export const courses_column: ColumnDef<Course>[] = [
    {
        accessorKey: "code",
        header: "Course code"
    },
    {
        accessorKey: "name",
        header: "Course name"
    },
    {
        id: "Actions",
        header: "View Students",
        cell: ({ row }) => {
            return <Link
                href={`/lecturer/courses/students/?id=${row.original.id}`}
                className="underline">
                View</Link>
        }
    }
]