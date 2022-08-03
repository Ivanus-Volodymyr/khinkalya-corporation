import {
  Controller,
  Get,
  Post,
  Body
} from "@nestjs/common";

import { ReviewService } from "./review.service";
import { Review } from "./dto/review.dto";

@Controller("reviews")
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get()
  GetAllReviews() {
    return this.reviewService.getAllReviews();
  }

  @Post()
  CreateReview(@Body() review: Review) {
    return this.reviewService.CreateReview(review);
  }
}
