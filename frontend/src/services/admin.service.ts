import { axiosService } from './axios.service';
import { urls } from '../constants';
import {  ILocality } from '../interfaces';
import { IRestaurant } from "../interfaces/restaurant.interface";
import { IPromotion } from "../interfaces/promotion.interface";

export const adminService = {
  addDish: (data: FormData) => axiosService.post<FormData>(urls.dish, data),
  getLocality: () => axiosService.get<ILocality[]>(urls.locality),
  addLocality: (data: FormData) => axiosService.post<FormData>(urls.locality, data),
  getRestaurants: () => axiosService.get<IRestaurant[]>(urls.restaurants),
  addRestaurant: (data: FormData) => axiosService.post<FormData>(urls.restaurants, data),
  addPromotion:(data:FormData)=>axiosService.post<FormData>(urls.promotions,data),
  getPromotions:()=>axiosService.get<IPromotion[]>(urls.promotions),
  getRestaurantByID:(id: string) => axiosService.get<any>(urls.restaurants + id),
};
