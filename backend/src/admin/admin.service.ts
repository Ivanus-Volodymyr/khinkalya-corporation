import { Injectable } from "@nestjs/common";
import { Dish, Locality, Restaurant } from "@prisma/client";
import { LocalityService } from "../locality/locality.service";
import { RestaurantService } from "../restaurant/restaurant.service";
import { DishService } from "../dish/dish.service";

@Injectable()
export class AdminService {
  constructor(
    private localityService: LocalityService,
    private restaurantService: RestaurantService,
    private dishService: DishService
  ) {}

  public async addDish(dish: Dish, file: unknown): Promise<Dish> {
    return this.dishService.createDish(dish, file);
  }

  public async updateDish(
    file: unknown,
    dish: Partial<Dish>,
    id: string
  ): Promise<Dish> {
    return this.dishService.updateDishById(id, dish, file);
  }

  public async deleteDish(id: string) {
    return this.dishService.deleteById(id);
  }

  public async addLocality(data: Locality, file: unknown): Promise<Locality> {
    return this.localityService.addLocality(data, file);
  }

  public async updateLocality(
    id: string,
    data: Partial<Locality>,
    file: unknown
  ): Promise<Locality> {
    return this.localityService.updateLocalityById(data, id, file);
  }

  public async deleteLocality(id: string): Promise<Locality> {
    return this.localityService.deleteById(id);
  }

  public async addRestaurant(
    data: Restaurant,
    file: unknown
  ): Promise<Restaurant> {
    return this.restaurantService.addRestaurant(data, file);
  }

  public async updateRestaurant(
    data: Partial<Restaurant>,
    id: string,
    file: unknown
  ): Promise<Restaurant> {
    return this.restaurantService.updateRestaurantById(data, id, file);
  }

  public async deleteRestaurant(id: string): Promise<Restaurant> {
    return this.restaurantService.deleteById(id);
  }
}
