"use client";

import Loader from '@/components/loader';
import { DataTable } from '@/components/ui/data-table';
import React from 'react'
import { courses_column } from './columns';
import { CardHeader, CardTitle, CardDescription, Card } from '@/components/ui/card';
import { useGetLecturerCourses } from '@/api/get_lecturer_courses';

const LecturerCourses = () => {
  const { data, isPending } = useGetLecturerCourses();
  if (isPending) return <Loader />

  return (
    <Card>
      <CardHeader>
        <CardTitle>Courses you teach</CardTitle>
        <CardDescription>View a detailed list of courses you teach.</CardDescription>
      </CardHeader>
      {data && <DataTable data={data} columns={courses_column} />}
    </Card>
  )
}

export default LecturerCourses