import { axiosPrivateAuth } from "../../api";
import { 
    IAuthRequestLoginData, 
    IAuthResponseLoginData, 
    IAuthRequestRegistartionData, 
    IAuthResponseRegistrationData, 
    IAuthRequestAccountActivationData, 
    IAuthResponseAccountActivationData, 
    IAuthResponseActivatedUserData,
    IAuthRequestRefreshToken,
    IAuthResponseRefreshToken
} from "../../types/authTypes";

export const login = async ({email, password}: IAuthRequestLoginData) => {
    return await axiosPrivateAuth.post<IAuthResponseLoginData>(`/auth/jwt/create/`, { email, password })
};

export const registration = async ({username, email, password}: IAuthRequestRegistartionData) => {
    return await axiosPrivateAuth.post<IAuthResponseRegistrationData>(`auth/users/`, {username, email, password})
};

export const accountActivation = async ({uid, token}: IAuthRequestAccountActivationData) => {
    return await axiosPrivateAuth.post<IAuthResponseAccountActivationData>(`/auth/users/activation/`, {uid, token})
};

export const getAuthorizedUserInfo = async () => {
    return await axiosPrivateAuth.get<IAuthResponseActivatedUserData>(`/auth/users/me/`);
};

export const refreshToken = async ({refresh}: IAuthRequestRefreshToken) => {
    return await axiosPrivateAuth.post<IAuthResponseRefreshToken>(`/auth/jwt/refresh/`, {refresh});
};


