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
        accessorKey: "lecturer",
        header: "Lecturer",
        accessorFn: (row) => (row.lecturer.name),
    },
    {
        id: "Actions",
        header: "View Attendance",
        cell: ({ row }) => {
            return <Link
                href={`/student/attendance/?id=${row.original.id}`}
                className="underline">
                View</Link>
        }
    }
]