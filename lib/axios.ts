import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie'

export const getToken = () => {
    if (typeof window === "undefined") {
        return null;
    }

    return Cookies.get("access_token");
};

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: { "Content-type": "application/json" }
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = getToken();

        if (token) [
            config.headers.Authorization = `Bearer ${token}`
        ];

        return config;
    }
);

axiosClient.interceptors.response.use(

    (response) => response,
    async (error: AxiosError) => {
        if (error.response && error.response.status === 401) {
            // Clear access token from cookie
            Cookies.remove('access_token');
        }

        return Promise.reject(error);
    }
);


export default axiosClient;






export const postRequest = async<T, P>(params: { url: string; payload?: P }) => {
    const { data } = await axiosClient.post<T>(params.url, params.payload);

    return data;
};

export const deleteRequest = async<T>(params: { url: string }) => {
    const { data } = await axiosClient.delete<T>(params.url);

    return data;
};

export const putRequest = async<T, P>(params: { url: string; payload: P }) => {
    const { data } = await axiosClient.put<T>(params.url, params.payload);

    return data;
};

export const getRequest = async<T>(params: { url: string }) => {
    const { data } = await axiosClient.get<T>(params.url);

    return data;
};

export const patchRequest = async<T, P>(params: { url: string; payload: P }) => {
    const { data } = await axiosClient.patch<T>(params.url, params.payload);

    return data;
};

