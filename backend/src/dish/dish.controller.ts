import {Controller, Get, Param, Patch} from "@nestjs/common";
import {DishService} from "./dish.service";
import {Dish} from "@prisma/client";

@Controller("dish")
export class DishController {
    constructor(private dishService: DishService) {
    }

    @Get()
    GetAllDishes() {
        return this.dishService.getAllDishes();
    }

    @Get("popular/:dishId")
    GetDishById(@Param("dishId") dishId: string) {
        return this.dishService.getDishById(dishId);
    }

    @Get("locality/:id")
    getDishByLocality(@Param("id") id: string) {
        return this.dishService.dishByLocalityId(id);
    }

    @Patch("/:dishId")
    updateDishById(@Param("dishId") dishId: string, data: Partial<Dish>, file?: any) {
        return this.dishService.updateDishById(dishId, data, file);
    }
}
