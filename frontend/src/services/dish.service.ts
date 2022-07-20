import {IDish} from "../interfaces/dish.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const dishService={
    getDish:()=>axiosService.get<IDish[]>(urls.dish),
}