import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axiosClient from "@/lib/axios";


interface Token {
    access_token: string;
    role: "LECTURER" | "STUDENT"
}

const login = async (payload: URLSearchParams): Promise<Token> => {
    const url = `token`;
    const response = await axiosClient.post(url, payload, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return response.data;
};

export const useLogin = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            const { access_token, role } = data;

            Cookies.set("access_token", access_token);
            router.push(`${role.toLowerCase()}`);
        },
    });
};
