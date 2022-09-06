import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { User } from "@prisma/client";

@Injectable()
export class MailService {
  constructor(private mailService: MailerService) {}

  public async sendMail(user: User) {
    await this.mailService.sendMail({
      to: user.email,
      subject: "Welcome to Nice App!",
      template: "./welcome.pug",
      context: {
        name: user.name,
      },
    });
  }

  public async sendOrderMail(user: User) {
    await this.mailService.sendMail({
      to: user.email,
      subject: "Welcome to Nice App!",
      template: "./order.pug",
      context: {
        name: user.name,
      },
    });
  }
}
