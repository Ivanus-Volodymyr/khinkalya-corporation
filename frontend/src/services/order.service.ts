import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IOrderFromDbInterface} from "../interfaces/orderFromDb.interface";

export const orderService = {
    getAllOrders: () => axiosService.get<IOrderFromDbInterface[]>(urls.order),
    saveOrders: (data:any) => axiosService.post(urls.order,data)
}