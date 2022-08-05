import { axiosService } from './axios.service';
import { urls } from '../constants';
import {  ILocality } from '../interfaces';
import { IRestaurant } from "../interfaces/restaurant.interface";

export const adminService = {
  addDish: (data: FormData) => axiosService.post<FormData>(urls.dish, data),
  getLocality: () => axiosService.get<ILocality[]>(urls.locality),

  addLocality: (data: FormData) => axiosService.post<FormData>(urls.locality, data),
  getRestaurant: () => axiosService.get<IRestaurant[]>(urls.restaurant),
  addRestaurant: (data: FormData) => axiosService.post<FormData>(urls.restaurant, data),
  getRestaurantByID:(id: string) => axiosService.get<any>(urls.restaurants + id),
};
