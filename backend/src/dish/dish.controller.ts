import { Controller, Get, Param } from "@nestjs/common";
import { DishService } from "./dish.service";

@Controller("dish")
export class DishController {
  constructor(private dishService: DishService) {}

  @Get()
  GetAllDishes() {
    return this.dishService.getAllDishes();
  }

  @Get("locality/:id")
  getDishByLocality(@Param("id") id: string) {
    return this.dishService.dishByLocalityId(id);
  }
}
