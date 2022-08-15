import { IUser } from "./user.interface";

export interface IReview {
  id: number;
  body: string;
  restaurantId: number;
  userId: number;
  user?: IUser;
  createdAt: string;
  rating: number;
}
