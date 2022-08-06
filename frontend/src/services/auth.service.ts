import { axiosService } from './axios.service';
import { mapURL, urls } from '../constants';
import { IUser, IAuthResponseApi, ITokensPair } from '../interfaces';

export const authService = {
  registration: (data: IUser) =>
    axiosService.post<IAuthResponseApi>(urls.registration, data),
  login: (data: Partial<IUser>) =>
    axiosService.post<IAuthResponseApi>(urls.login, data),
  refresh: (refresh: string) =>
    axiosService.post<ITokensPair>(urls.refresh, { data: refresh }),
  logout: (accessToken: string) => axiosService.post(urls.logout, accessToken),
  googleLogin: (data: string, city: string) =>
    axiosService.post<IAuthResponseApi>(urls.googleLogin, { token: data, city }),
  // eslint-disable-next-line no-useless-concat
  getGeolocation:(latitude: string, longitude:string) => axiosService.get(mapURL + "&latlng=" + `${latitude},${longitude}`)

};
