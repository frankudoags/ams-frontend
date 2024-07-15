import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios";

export const getCourses = () => {
    const url = "student/courses"
    return getRequest<[Course]>({url});
}

export const useGetStudentCourses = () => {
    return useQuery({
        queryKey: ["student-courses"],
        queryFn: () => getCourses()
    });
}