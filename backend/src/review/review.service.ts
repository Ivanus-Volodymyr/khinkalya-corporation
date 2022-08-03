import { Injectable } from "@nestjs/common";
import { PrismaService } from "../core/prisma.service";

import { Review } from "./dto/review.dto";

@Injectable()
export class ReviewService {
  constructor(private prismaService: PrismaService) {}

  public async getAllReviews(): Promise<Review[]> {
    return this.prismaService.review.findMany();
  }

}
