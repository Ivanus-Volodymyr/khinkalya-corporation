import { Injectable } from "@nestjs/common";
import { PrismaService } from "../core/prisma.service";
import { Restaurant } from "@prisma/client";
import { S3Service } from "../s3/s3.service";

@Injectable()
export class RestaurantService {
  constructor(private prismaService: PrismaService, private s3: S3Service) {}

  public async getRestaurant(): Promise<Restaurant[]> {
    return this.prismaService.restaurant.findMany();
  }

  public async addRestaurant(data: Restaurant, file): Promise<Restaurant> {
    if (file) {
      const img = await this.s3.uploadFile(file);
      return this.prismaService.restaurant.create({
        data: {
          ...data,
          image: img.Location,
        },
      });
    }
    return this.prismaService.restaurant.create({ data: data });
  }

  public async updateRestaurantById(
    data: Partial<Restaurant>,
    id: string,
    file
  ): Promise<Restaurant> {
    if (file) {
      const img = await this.s3.uploadFile(file);
      return this.prismaService.restaurant.update({
        where: { id: Number(id) },
        data: {
          ...data,
          image: img.Location,
        },
      });
    }

    return this.prismaService.restaurant.update({
      where: { id: Number(id) },
      data: data,
    });
  }

  public async deleteById(id: string) {
    return this.prismaService.restaurant.delete({ where: { id: Number(id) } });
  }
}
