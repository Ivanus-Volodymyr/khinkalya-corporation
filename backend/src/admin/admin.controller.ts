import { Controller } from "@nestjs/common";
import { DishService } from "../dish/dish.service";

@Controller("admin")
export class AdminController {
  constructor(private dishService: DishService) {}
}
