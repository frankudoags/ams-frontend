import { useMutation } from "@tanstack/react-query";
import axiosClient from "@/lib/axios";
import { useToast } from "@/components/ui/use-toast";
import { title } from "process";
import { queryClient } from "@/components/providers";




export interface AttendancePayload {
    face: File;
    course_id: number;
    class_date: string;
}

const mark_present = async (payload: AttendancePayload): Promise<Student> => {
    const url = 'lecturer/mark_attendance';
    const response = await axiosClient.post(url, payload, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
}

export const useMarkAttendance = (course_id: number) => {
    const { toast } = useToast();


    return useMutation({
        mutationFn: mark_present,
        onSuccess: (data) => {
            const { name } = data;
            toast({
                title: `${name} marked as Present`,
            });
            queryClient.invalidateQueries({ queryKey: [`course-session-${course_id}`] })
        },
        onError: () => {
            toast({
                title: "Failed to mark attendance, try again.",
                variant: "destructive"
            });
        }
    });
};
