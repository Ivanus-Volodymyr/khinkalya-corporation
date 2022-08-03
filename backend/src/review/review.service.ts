import { Injectable } from "@nestjs/common";
import { PrismaService } from "../core/prisma.service";

import { Review } from "./dto/review.dto";

@Injectable()
export class ReviewService {
  constructor(private prismaService: PrismaService) {}

  public async getAllReviews(): Promise<Review[]> {
    return this.prismaService.review.findMany();
  }

  public async CreateReview(review): Promise<Review> {
    return this.prismaService.review.create(review);
  }
}
