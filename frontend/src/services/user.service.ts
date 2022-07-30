import { IUser } from '../interfaces';
import { axiosService } from './axios.service';
import { urls } from '../constants';

export const userService = {
  getAllUsers: () => axiosService.get<IUser[]>(urls.user),
  getUserById: (id: string) => axiosService.get<IUser>(urls.user + `/${id}`),
  getUserByToken: (token:string) => axiosService.post<IUser>(urls.user, token),
};
