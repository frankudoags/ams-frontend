import { Badge } from '../ui/badge'
import React, { Fragment } from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card'
import { useGetCourseSessionDetails } from '@/api/get_course_session_details'
import { formatDate } from '@/lib/utils'
import Camera from './camera'

const CourseCard = ({ course }: { course: Course }) => {
    const { data } = useGetCourseSessionDetails(course.id);
    return (
        <section className='my-8 space-y-6'>
            <CardTitle>{course.name}({course.code})</CardTitle>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data && data.attendance_records.map((details, index) => (
                    <Fragment key={index}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Introduction to Facial Recognition using Computer Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div className="text-sm text-muted-foreground">
                                        {formatDate(details.class_date)}
                                    </div>
                                    <Badge variant="outline" className="px-2 py-1 text-xs">
                                        {details.attendance_ratio} checked in
                                    </Badge>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Camera class_date={details.class_date} course_id={course.id} />
                            </CardFooter>
                        </Card>
                    </Fragment>
                ))}
            </div>
        </section>
    )
}

export default CourseCard
