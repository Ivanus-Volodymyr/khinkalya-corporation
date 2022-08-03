import { Controller } from "@nestjs/common";
import { DishService } from "../dish/dish.service";
import { LocalityService } from "../locality/locality.service";
import { RestaurantService } from "../restaurant/restaurant.service";

@Controller("admin")
export class AdminController {
  constructor(
    private dishService: DishService,
    private localityService: LocalityService,
    private restaurantService: RestaurantService
  ) {}
}
