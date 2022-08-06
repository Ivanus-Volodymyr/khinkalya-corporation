import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";

import { AdminService } from "./admin.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { Dish } from "@prisma/client";

@Controller("admin")
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post("dish")
  @UseInterceptors(FileInterceptor("image"))
  public async addDish(@UploadedFile() file, @Body() dish: Dish) {
    return this.adminService.addDish(dish, file);
  }

  @Put("dish/:id")
  @UseInterceptors(FileInterceptor("image"))
  public async updateDish(
    @UploadedFile() file,
    @Body() dish: Partial<Dish>,
    @Param("id") id: string
  ) {
    return this.adminService.updateDish(file, dish, id);
  }
}
