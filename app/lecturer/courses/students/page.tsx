"use client";

import Loader from '@/components/loader';
import { DataTable } from '@/components/ui/data-table';
import React from 'react'
import { students_column } from './columns';
import { CardHeader, CardTitle, CardDescription, Card } from '@/components/ui/card';
import { useGetStudentsForACourse } from '@/api/get_students_for_a_course';
import { useSearchParams } from 'next/navigation';

const LecturerCourses = () => {
    const params = useSearchParams();
    const id = params.get("id")
    const course_code = params.get("course_code")
    const course_name = params.get("course_name")
    const { data, isPending } = useGetStudentsForACourse(id!!);
    if (isPending) return <Loader />

    return (
        <Card>
            <CardHeader>
                <CardTitle>Students</CardTitle>
                <CardDescription>View a detailed list of students offering {course_code}({course_name})</CardDescription>
            </CardHeader>
            {data && <DataTable data={data} columns={students_column} />}
        </Card>
    )
}

export default LecturerCourses