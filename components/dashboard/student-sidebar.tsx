"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Icons } from '../icons';

const StudentSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const isActive = (href: string) => pathname === href;

  const logout = () => {
    router.push('/login')
  }

  return (
    <div className='flex flex-col p-8'>
      <Icons.amsLogo className='h-8' />

      <div className="flex flex-col gap-6 my-10 font-normal">
        <Link href={'/student/'} className={`rounded-md py-2 px-3 ${isActive('/student') ? "text-slate-200 bg-black" : "text-gray-700"}`}>
          Profile
        </Link>
        <Link href={'/student/courses'} className={`rounded-md py-2 px-3 ${isActive('/student/courses') ? "text-slate-200 bg-black" : "text-gray-700"}`}>
          Courses
        </Link>
        <Link href={'/student/attendance'} className={`rounded-md py-2 px-3 ${isActive('/student/attendance') ? "text-slate-200 bg-black" : "text-gray-700"}`}>
          Attendance
        </Link>
      </div>

      <div onClick={logout} className="flex items-center gap-2 px-3 py-2 mt-32 text-base cursor-pointer">
        <Icons.logout className='w-4 h-4' />
        Logout
      </div>
    </div>
  );
};

export default StudentSidebar;
