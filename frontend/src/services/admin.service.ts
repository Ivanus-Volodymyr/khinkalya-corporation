import {axiosService}  from "./axios.service";
import {urls} from "../constants";
import {IDish, ILocality} from "../interfaces";


export const adminService={
    addDish:(data:IDish)=>axiosService.post<any>(urls.dish,data),
    getLocality:()=>axiosService.get<ILocality[]>(urls.locality),
    getDishByLocalityId:(id:string)=>axiosService.get<IDish[]>(urls.dish+'/locality/'+ `${id}`),
    addLocality:(data:any)=>axiosService.post<any>(urls.locality,data),
    getRestaurant:()=>axiosService.get<any>(urls.restaurant),
    addRestaurant:(data:any)=>axiosService.post<any>(urls.restaurant,data)
}
