import { axiosService } from './axios.service';
import { urls } from '../constants';
import { IUser, IAuthResponseApi, ITokensPair } from '../interfaces';
import { AxiosResponse } from "axios";

export const authService = {
  registration: (data: IUser) =>
    axiosService.post<IAuthResponseApi>(urls.registration, data),
  login: (data: Partial<IUser>) =>
    axiosService.post<IAuthResponseApi>(urls.login, data),
  refresh: (refresh: string) =>
    axiosService.post<ITokensPair>(urls.refresh, { data: refresh }),
  logout: (accessToken: string) => axiosService.post(urls.logout, accessToken),
  googleLogin: (data: string) =>
    axiosService.post<IAuthResponseApi>(urls.googleLogin, { token: data }),
};
