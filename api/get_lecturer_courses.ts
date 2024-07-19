import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios";

export const getLecturerCourses = () => {
    const url = "lecturer/courses"
    return getRequest<[Course]>({ url });
}

export const useGetLecturerCourses = () => {
    return useQuery({
        queryKey: ["lecturer-courses"],
        queryFn: () => getLecturerCourses()
    });
}