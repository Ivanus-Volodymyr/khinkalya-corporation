import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserService } from "../user/user.service";
import { UserModule } from "../user/user.module";
import { PrismaService } from "../core/prisma.service";
import { TokenModule } from "./token/token.module";
import { TokenService } from "./token/token.service";
import { JwtService } from "@nestjs/jwt";
import { S3Service } from "src/s3/s3.service";
import { MailModule } from "../mail/mail.module";
import { MailService } from "../mail/mail.service";

@Module({
  imports: [UserModule, TokenModule, MailModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    UserService,
    TokenService,
    JwtService,
    S3Service,
    MailService,
  ],
})
export class AuthModule {}
