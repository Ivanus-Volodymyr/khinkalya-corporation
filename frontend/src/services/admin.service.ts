import { axiosService } from "./axios.service";
import { urls } from "../constants";
import { IDish, ILocality } from "../interfaces";
import { IRestaurant } from "../interfaces/restaurant.interface";
import { IPromotion } from "../interfaces/promotion.interface";

export const adminService = {
  addDish: (data: FormData) => axiosService.post<IDish>("admin" + urls.dish, data),
  updateDish:(data: Partial<IDish>)=> axiosService.put<IDish>("admin" + urls.dish, data),
  deleteDish:(id: string)=>axiosService.delete<IDish>("admin" + urls.dish + `${id}`),
  getLocality: () => axiosService.get<ILocality[]>(urls.locality),
  getDishByLocalityId: (id: string) =>
    axiosService.get<IDish[]>(urls.dish + '/locality/' + `${id}`),
  getRestaurantByID: (id: string) =>
    axiosService.get<IRestaurant>(urls.restaurants + id),
  addLocality: (data: FormData) => axiosService.post<ILocality>("admin" + urls.locality, data),
  updateLocality:(id: string, data: Partial<ILocality>)=> axiosService.put<ILocality>("admin" + urls.locality + `${id}`, data),
  deleteLocality:(id: string)=> axiosService.delete<ILocality>("admin" + urls.locality + `${id}`),
  getRestaurants: () => axiosService.get<IRestaurant[]>(urls.restaurants),
  addRestaurant: (data: FormData) => axiosService.post<IRestaurant>("admin" + urls.restaurants, data),
  addPromotion:(data:FormData)=>axiosService.post<FormData>(urls.promotions,data),
  getPromotions:()=>axiosService.get<IPromotion[]>(urls.promotions),
  updateRestaurant:(id: string, data: Partial<IRestaurant>)=> axiosService.put<IRestaurant>("admin" + urls.restaurants + `${id}`, data)

};
