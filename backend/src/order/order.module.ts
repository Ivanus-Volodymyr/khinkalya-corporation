import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { PrismaService } from "../core/prisma.service";
import { DishService } from "../dish/dish.service";
import { S3Service } from "../s3/s3.service";
import { MailModule } from "../mail/mail.module";
import { MailService } from "../mail/mail.service";
import { UserModule } from "src/user/user.module";
import { UserService } from "src/user/user.service";
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module({
  providers: [OrderService, PrismaService, DishService, S3Service, MailService, UserService, JwtService],
  controllers: [OrderController],
  imports: [MailModule, UserModule, JwtModule],
})
export class OrderModule {}
