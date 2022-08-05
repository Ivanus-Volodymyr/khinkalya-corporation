import { Injectable } from "@nestjs/common";
import { PrismaService } from "../core/prisma.service";
import { Restaurant } from "@prisma/client";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { S3Service } from "../s3/s3.service";

@Injectable()
export class RestaurantService {
  constructor(private prismaService: PrismaService, private s3: S3Service) {}

  public async getRestaurants(): Promise<Restaurant[]> {
    return this.prismaService.restaurant.findMany();
  }

  public async getRestaurantByID(restaurantId: string): Promise<Restaurant> {
    return this.prismaService.restaurant.findUnique({
      where: {
        id: +restaurantId,
      },
    })
  }

  public async addRestaurant(data: Restaurant, file): Promise<Restaurant> {
    const img = await this.s3.uploadFile(file);
    return this.prismaService.restaurant.create({
      data: {
        ...data,
        image: img.Location,
      },
    });
  }

  public async updateRestaurantById(
    data: CreateRestaurantDto,
    id: string
  ): Promise<Restaurant> {
    return this.prismaService.restaurant.update({
      where: { id: Number(id) },
      data: data,
    });
  }

  public async deleteById(id: string) {
    return this.prismaService.restaurant.delete({ where: { id: Number(id) } });
  }
}
