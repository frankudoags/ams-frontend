"use client";

import React from 'react'
import { useGetLecturerProfile } from '@/api/get_lecturer_profile'
import Loader from '@/components/loader';
import { CardHeader, CardTitle, CardDescription, Card } from '@/components/ui/card';
import LecturerCourses from './courses/page';

const LecturerHome = () => {
  const { data, isPending } = useGetLecturerProfile();
  if (isPending || !data) return <Loader />

  return (
    <div className='flex flex-col gap-6'>
      <Card>
        <CardHeader>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>{data.email}</CardDescription>
          <CardDescription className='capitalize'>{data.role.toLowerCase()}</CardDescription>
        </CardHeader>
      </Card>
      <LecturerCourses />
    </div>
  )
}

export default LecturerHome
