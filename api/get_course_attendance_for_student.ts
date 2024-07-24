import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios";

export const getCourseAttendance = (id: string) => {
    const url = `student/attendance?course_id=${id}`
    return getRequest<[Attendance]>({ url });
}

export const useGetCourseAttendance = (id:string) => {
    return useQuery({
        queryKey: [`attendance-${id}`],
        queryFn: () => getCourseAttendance(id)
    });
}
