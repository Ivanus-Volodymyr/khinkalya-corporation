import { Injectable } from "@nestjs/common";
import { Dish, Locality } from "@prisma/client";

import { PrismaService } from "../core/prisma.service";
import { LocalityService } from "../locality/locality.service";
import { RestaurantService } from "../restaurant/restaurant.service";
import { DishService } from "../dish/dish.service";

@Injectable()
export class AdminService {
  constructor(
    private prismaService: PrismaService,
    private localityService: LocalityService,
    private restaurantService: RestaurantService,
    private dishService: DishService
  ) {}

  public async addDish(dish: Dish, file): Promise<Dish> {
    return this.dishService.createDish(dish, file);
  }

  public async updateDish(
    file,
    dish: Partial<Dish>,
    id: string
  ): Promise<Dish> {
    return this.dishService.updateDishById(id, dish, file);
  }

  public async addLocality(data: Locality, file): Promise<Locality> {
    return this.localityService.addLocality(data, file);
  }

  public async updateLocality(
    id: string,
    data: Partial<Locality>,
    file
  ): Promise<Locality> {
    return this.localityService.updateLocalityById(data, id, file);
  }

  public async deleteLocality(id: string): Promise<Locality> {
    return this.localityService.deleteById(id);
  }
}
