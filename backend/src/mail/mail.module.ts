import { Module } from "@nestjs/common";

import { MailService } from "./mail.service";
import { ConfigModule } from "@nestjs/config";
import { MailerModule } from "@nestjs-modules/mailer";
import { join } from "path";
import { PugAdapter } from "@nestjs-modules/mailer/dist/adapters/pug.adapter";
import { UserModule } from "../user/user.module";
import { UserService } from "../user/user.service";
import { PrismaService } from "src/core/prisma.service";
import { S3Service } from "src/s3/s3.service";
import { JwtModule } from "@nestjs/jwt";

@Module({
  providers: [MailService, UserService, PrismaService, S3Service],
  imports: [
    UserModule,
    JwtModule,
    ConfigModule.forRoot({
      envFilePath: ".backend/.env",
    }),
    MailerModule.forRoot({
      transport: {
        service: "gmail",
        auth: {
          user: process.env.root_email,
          pass: process.env.root_email_password,
        },
      },
      defaults: {
        from: process.env.root_email,
      },
      template: {
        dir: join(__dirname, "templates"),
        adapter: new PugAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
})
export class MailModule {}
