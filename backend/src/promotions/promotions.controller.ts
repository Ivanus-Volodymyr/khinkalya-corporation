import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { PromotionsService } from "./promotions.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { Promotions } from "@prisma/client";

@Controller("promotions")
export class PromotionsController {
  constructor(private promotionService: PromotionsService) {}

  @Get()
  GetAllPromotions() {
    return this.promotionService.getAllPromotions();
  }
  @Post()
  @UseInterceptors(FileInterceptor("image"))
  CreatePromotion(@Body() data: Promotions, @UploadedFile() file) {
    return this.promotionService.createPromotion(data, file);
  }
}
