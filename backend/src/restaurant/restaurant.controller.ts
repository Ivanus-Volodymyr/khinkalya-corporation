
import { Controller, Get } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
@Controller("restaurants")
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get()
  GetRestaurants() {
    return this.restaurantService.getRestaurants();
  }

  @Get("/:id")
  GetRestaurantByID(@Param("id") id: string) {
    return this.restaurantService.getRestaurantByID(id);
  }
}
