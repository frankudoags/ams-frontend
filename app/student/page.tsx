"use client";

import React from 'react'
import { CardHeader, CardTitle, CardDescription, Card } from '@/components/ui/card';
import Courses from './courses/page'
import { useGetStudentProfile } from '@/api/get_student_profile'
import Loader from '@/components/loader';


const StudentHome = () => {
    const { data, isPending } = useGetStudentProfile();
    if (isPending || !data) return <Loader />

    return (
        <div className='flex flex-col gap-6'>
            <Card>
                <CardHeader>
                    <CardTitle>{data.name}</CardTitle>
                    <CardDescription>{data.email}</CardDescription>
                    <CardDescription>{data.matric_no}</CardDescription>
                </CardHeader>
            </Card>
            <Courses />
        </div>
    )
}

export default StudentHome
