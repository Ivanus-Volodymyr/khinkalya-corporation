import { Injectable } from "@nestjs/common";
import { Dish } from "@prisma/client";

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

  public async updateDish(file, dish: Partial<Dish>, id: string) {
    return this.dishService.updateDishById(id, dish, file);
  }
}
