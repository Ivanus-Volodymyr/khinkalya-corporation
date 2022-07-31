import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaService } from "../core/prisma.service";
import { S3Service } from "../s3/s3.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService, S3Service, JwtService],
})
export class UserModule {}
