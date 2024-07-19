import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios";

export const getProfile = () => {
    const url = "student/profile"
    return getRequest<Student>({ url });
}

export const useGetStudentProfile = () => {
    return useQuery({
        queryKey: ["student-profile"],
        queryFn: () => getProfile()
    });
}