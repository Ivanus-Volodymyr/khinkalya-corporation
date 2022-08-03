import { axiosService } from "./axios.service";

import { urls } from "../constants";
import { IReview } from "../interfaces";


export const reviewService = {
  GetAllReviews: () => axiosService.get<IReview[]>(urls.reviews),
}
