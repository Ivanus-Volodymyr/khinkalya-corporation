export interface IReview {
  id: number;
  body: string;
  rating?:string;
  restaurantId: number;
  userId?: number;
  createdAt: string;
}
