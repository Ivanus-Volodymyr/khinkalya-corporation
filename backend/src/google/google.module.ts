import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserService } from "../user/user.service";
import { PrismaService } from "../core/prisma.service";
import { TokenService } from "../auth/token/token.service";
import { GoogleService } from "./google.service";
import { GoogleController } from "./google.controller";

@Module({
  controllers: [GoogleController],
  providers: [
    GoogleService,
    JwtService,
    TokenService,
    UserService,
    PrismaService,
  ],
})
export class AuthGoogleModule {}
