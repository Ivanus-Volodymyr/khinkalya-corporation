import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const orderService = {
    getAllOrders: () => axiosService.get(urls.order),
    saveOrders: (data:any) => axiosService.post(urls.order,data)
}