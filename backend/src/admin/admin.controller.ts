import {Body, Controller, Delete, Param, Post, Put, UploadedFile, UseInterceptors,} from "@nestjs/common";

import {AdminService} from "./admin.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {Dish, Locality, Restaurant} from "@prisma/client";

@Controller("admin")
export class AdminController {
    constructor(private adminService: AdminService) {
    }

    @Post("dish")
    @UseInterceptors(FileInterceptor("image"))
    public async addDish(@UploadedFile() file: unknown, @Body() dish: Dish) {
        return this.adminService.addDish(dish, file);
    }

    @Put("dish/:id")
    @UseInterceptors(FileInterceptor("image"))
    public async updateDish(
        @UploadedFile() file: unknown,
        @Body() dish: Partial<Dish>,
        @Param("id") id: string
    ) {
        return this.adminService.updateDish(file, dish, id);
    }

    @Delete("dish/:id")
    public async deleteDish(@Param("id") id: string) {
        return this.adminService.deleteDish(id);
    }

    @Post("locality")
    @UseInterceptors(FileInterceptor("image"))
    AddLocality(@Body() data: Locality, @UploadedFile() file: unknown) {
        return this.adminService.addLocality(data, file);
    }

    @Put("locality/:id")
    @UseInterceptors(FileInterceptor("image"))
    updateLocality(
        @Body() data: Locality,
        @UploadedFile() file: unknown,
        @Param("id") id: string
    ) {
        return this.adminService.updateLocality(id, data, file);
    }

    @Delete("locality/:id")
    deleteLocality(@Param("id") id: string) {
        return this.adminService.deleteLocality(id);
    }

    @Post("restaurants")
    @UseInterceptors(FileInterceptor("image"))
    AddRestaurant(@Body() data: Restaurant, @UploadedFile() file: unknown) {
        return this.adminService.addRestaurant(data, file);
    }

    @Put("restaurant/:id")
    @UseInterceptors(FileInterceptor("image"))
    updateById(
        @Param("id") id: string,
        @Body() data: Restaurant,
        @UploadedFile() file: unknown
    ) {
        return this.adminService.updateRestaurant(data, id, file);
    }

    @Delete("restaurant/:id")
    deleteById(@Param("id") id: string) {
        return this.adminService.deleteRestaurant(id);
    }
}
