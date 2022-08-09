import { Controller, Get } from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";

@Controller("restaurant")
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get()
  GetRestaurant() {
    return this.restaurantService.getRestaurant();
  }
}
