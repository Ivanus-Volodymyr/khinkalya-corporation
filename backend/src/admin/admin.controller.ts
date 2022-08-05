import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";

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
}
