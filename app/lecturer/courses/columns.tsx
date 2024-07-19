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
                href={`/lecturer/courses/students/?id=${row.original.id}&course_code=${row.original.code}&course_name=${row.original.name}`}
                className="underline">
                View</Link>
        }
    }
]