"use client";

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { CreateNewSession } from "@/components/take-attendance/create-new-session-dialog"
import { useGetLecturerCourses } from "@/api/get_lecturer_courses"
import CourseCard from "@/components/take-attendance/course-card";
import Loader from "@/components/loader";

export default function Component() {
  const { data, isPending } = useGetLecturerCourses();
  if (isPending) return <Loader />

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <header className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Icons.PlusIcon className="h-4 w-4" />
            <span className="sr-only">Create New Session</span>
          </Button>
          <h1 className="font-semibold text-lg md:text-xl">Attendance Sessions</h1>
        </div>
        <CreateNewSession courses={data!!} />
      </header>
      {
        data && data.map((course) => (<div className="" key={course.id}>
          <CourseCard course={course} />
        </div>
        ))
      }
    </main>
  )
}

