"use client"

import { ColumnDef } from "@tanstack/react-table"

export const students_column: ColumnDef<CourseStudent>[] = [
    {
        accessorKey: "name",
        header: "Student Name"
    },
    {
        accessorKey: "matric_no",
        header: "Matric Number"
    }
]