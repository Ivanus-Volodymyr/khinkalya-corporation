import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {IOrderFromDbInterface, ISaveOrder} from "../interfaces/orderFromDb.interface";

export const orderService = {
  getAllOrders: () => axiosService.get<IOrderFromDbInterface[]>(urls.order),

}
