import {IDish} from '../interfaces';
import {axiosService} from './axios.service';
import {urls} from '../constants';

export const dishService = {
    getAllDishes: () => axiosService.get<IDish[]>(urls.dish),
    getDishById: (dishId: number) =>
        axiosService.get<IDish>(urls.popularDish + `/${dishId}`),
    updateDishById: (dishId: number, dish: Partial<IDish>, file?: any) =>
        axiosService.patch<IDish>(urls.popularDish + `/${dishId}`, dish, file),
};
