"use client";

import React from 'react'
import { useSearchParams } from 'next/navigation';
import { useGetStudentCourses } from '@/api/get_student_courses'
import Loader from '@/components/loader';
import { CardHeader, CardTitle, CardDescription, Card } from '@/components/ui/card';
import { useGetCourseAttendance } from '@/api/get_course_attendance_for_student';
import { attendance_column } from './columns';
import { DataTable } from '@/components/ui/data-table';
import { Progress } from '@/components/ui/progress';

const Attendance = () => {
  const params = useSearchParams();
  const id = params.get("id")
  const { data, isPending } = useGetStudentCourses();
  const { data: attendance, isPending: isAttendancePending } = useGetCourseAttendance(id!!);

  if (isPending || isAttendancePending) return <Loader />
  if (!attendance || !data) return <Loader />

  let percent = 0;
  const total = attendance?.length!!;

  attendance?.forEach(attendance => {
    if (attendance.present) percent++
  })

  const attendanceLevel = (percent / total) * 100

  const course = data?.filter(course => course.id == +id!!)[0]!!

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}({course.code}) by {course.lecturer.name}</CardTitle>
        <CardDescription>Attendance records for {course.name}({course.code}) by {course.lecturer.name}</CardDescription>
        <div className="flex flex-row py-8 items-center gap-6">
          <div className="w-[50%]">
            <Progress value={attendanceLevel || 0} />
          </div>
          <div className="w-[30%] font-medium text-sm">
            {attendanceLevel || 0}% attendance
          </div>
        </div>
      </CardHeader>
      {attendance && <DataTable data={attendance} columns={attendance_column} />}
    </Card>
  )
}

export default Attendance
