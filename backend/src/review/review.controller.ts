import {
  Controller,
  Get,
} from "@nestjs/common";

import { ReviewModule } from "./review.module";


@Controller("reviews")
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get()
  GetAllReviews() {
    return this.reviewService;
  }
}
