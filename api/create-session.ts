import { useMutation } from "@tanstack/react-query";
import { postRequest } from "@/lib/axios";
import { queryClient } from "@/components/providers";

interface Payload {
    id: number
    title: string;
    description: string;
}

export const createSession = (payload: Payload) => {
    const url = `lecturer/create_session?course_id=${payload.id}`


    return postRequest<null, null>({ url });
}

export const useCreateSession = () => {
    return useMutation({
        mutationFn: createSession,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["course-session"] })
        },
        onError: () => { }
    });
}
