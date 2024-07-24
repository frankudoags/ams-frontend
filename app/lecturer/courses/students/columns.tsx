"use client"

import { Progress } from "@/components/ui/progress"
import { TableCell } from "@/components/ui/table"
import { ColumnDef } from "@tanstack/react-table"

export const students_column: ColumnDef<CourseStudent>[] = [
    {
        accessorKey: "name",
        header: "Student Name"
    },
    {
        accessorKey: "matric_no",
        header: "Matric Number"
    },
    {
        accessorKey: "attendance_level",
        header: "Attendance",
        cell: ({ row }) => {
            let attendance_level = row.original.attendance_level
            return <TableCell>
                <div className="flex flex-row items-center gap-4">
                    <div className="w-[50%] min-w-[150px]">
                        <Progress value={attendance_level || 0} />
                    </div>
                    <div className={`w-[30%] font-medium text-sm
                ${attendance_level < 40 && "text-red-500"}
                ${attendance_level >= 40 && attendance_level < 60 && "text-yellow-500"}
                ${attendance_level >= 60 && attendance_level < 100 && "text-green-500"}
        `}>
                        {attendance_level || 0}%
                    </div>
                </div>
            </TableCell>
        }
    },
]