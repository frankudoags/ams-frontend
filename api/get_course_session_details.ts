import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios";

export const getCourseSessionDetails = (id: number) => {
    const url = `lecturer/get_course_session_details?course_id=${id}`
    return getRequest<CourseSessionResponse>({ url });
}

export const useGetCourseSessionDetails = (id: number) => {
    return useQuery({
        queryKey: ["course-session"],
        queryFn: () => getCourseSessionDetails(id)
    });
}