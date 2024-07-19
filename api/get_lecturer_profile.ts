import { useQuery } from "@tanstack/react-query";
import { getRequest } from "@/lib/axios";

export const getLecturerProfile = () => {
    const url = "lecturer/profile"
    return getRequest<Lecturer>({ url });
}

export const useGetLecturerProfile = () => {
    return useQuery({
        queryKey: ["lecturer-profile"],
        queryFn: () => getLecturerProfile()
    });
}