import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios";

export const getStudentsForACourse = (id: string) => {
    const url = `lecturer/get_students_for_a_course?course_id=${id}`
    return getRequest<[CourseStudent]>({ url });
}

export const useGetStudentsForACourse = (id: string) => {
    return useQuery({
        queryKey: ["course-students"],
        queryFn: () => getStudentsForACourse(id)
    });
}