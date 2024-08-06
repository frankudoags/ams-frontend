import { useMutation } from "@tanstack/react-query";
import { postRequest } from "@/lib/axios";
import { queryClient } from "@/components/providers";

interface Payload {
    id: number
    title: string;
}

export const createSession = (payload: Payload) => {
    const url = `lecturer/create_session?course_id=${payload.id}&title=${payload.title}`


    return postRequest<null, null>({ url });
}

export const useCreateSession = (course_id: number) => {
    return useMutation({
        mutationFn: createSession,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [`course-session-${course_id}`] })
        },
        onError: () => { }
    });
}
