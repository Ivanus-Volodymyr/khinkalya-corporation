import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { RestaurantService } from "./restaurant.service";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Restaurant } from "@prisma/client";

@Controller("restaurant")
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Get()
  GetRestaurant() {
    return this.restaurantService.getRestaurant();
  }

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  AddRestaurant(@Body() data: Restaurant, @UploadedFile() file) {
    return this.restaurantService.addRestaurant(data, file);
  }

  @Put("/:id")
  updateById(@Param("id") id: string, @Body() data: CreateRestaurantDto) {
    return this.restaurantService.updateRestaurantById(data, id);
  }

  @Delete("/:id")
  deleteById(@Param("id") id: string) {
    return this.restaurantService.deleteById(id);
  }
}
