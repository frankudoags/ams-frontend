"use client";

import { useGetStudentCourses } from '@/api/get_student_courses'
import Loader from '@/components/loader';
import { DataTable } from '@/components/ui/data-table';
import React from 'react'
import { courses_column } from './columns';
import { CardHeader, CardTitle, CardDescription, Card } from '@/components/ui/card';

const Courses = () => {
  const { data, isPending } = useGetStudentCourses();
  if (isPending) return <Loader />

  return (
    <Card>
      <CardHeader>
        <CardTitle>Courses Offered</CardTitle>
        <CardDescription>View a detailed list of courses offered.</CardDescription>
      </CardHeader>
      {data && <DataTable data={data} columns={courses_column} />}
    </Card>
  )
}

export default Courses