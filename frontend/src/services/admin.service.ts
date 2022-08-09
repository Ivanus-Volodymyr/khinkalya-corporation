import { axiosService } from "./axios.service";
import { urls } from "../constants";
import { IDish, ILocality } from "../interfaces";
import { IRestaurant } from "../interfaces/restaurant.interface";

export const adminService = {
  addDish: (data: IDish) => axiosService.post<IDish>("admin" + urls.dish, data),
  updateDish:(data: Partial<IDish>)=> axiosService.put<IDish>("admin" + urls.dish, data),
  deleteDish:(id: string)=>axiosService.delete<IDish>("admin" + urls.dish + `${id}`),
  getLocality: () => axiosService.get<ILocality[]>(urls.locality),
  addLocality: (data: ILocality) => axiosService.post<ILocality>("admin" + urls.locality, data),
  updateLocality:(id: string, data: Partial<ILocality>)=> axiosService.put<ILocality>("admin" + urls.locality + `${id}`, data),
  deleteLocality:(id: string)=> axiosService.delete<ILocality>("admin" + urls.locality + `${id}`),
  getRestaurant: () => axiosService.get<IRestaurant[]>(urls.restaurant),
  addRestaurant: (data: IRestaurant) => axiosService.post<IRestaurant>("admin" + urls.restaurant, data),
  updateRestaurant:(id: string, data: Partial<IRestaurant>)=> axiosService.put<IRestaurant>("admin" + urls.restaurant + `${id}`, data)
};
