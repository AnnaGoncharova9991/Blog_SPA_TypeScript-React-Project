import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { access } from "fs";
import { config } from "process";

export const BASE_API = 'https://studapi.teachmeskills.by';

export const axiosPrivateAuth = axios.create(
    {
        baseURL: BASE_API,
        withCredentials: true,
    }
);

axiosPrivateAuth.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('accessToken');
if (token){
    config.headers!.authorization = `Bearer ${token}`;
}

        return config;
    },
    (error: AxiosError) => {
        Promise.reject(error)
    }
);

