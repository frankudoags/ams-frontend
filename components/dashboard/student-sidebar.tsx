import React from 'react'
import Link from 'next/link'
import { Icons } from '../icons'

const StudentSidebar = () => {
  return (
    <div className='flex flex-col p-8'>
          <Icons.amsLogo className='h-10' />

          <div className="flex flex-col gap-6 my-6">
            <Link href={'/student/'}>Profile</Link>
            <Link href={'/student/courses'}>Courses</Link>
            <Link href={'/student/attendance'}>Attendance</Link>
          </div>
    </div>
  )
}

export default StudentSidebar
