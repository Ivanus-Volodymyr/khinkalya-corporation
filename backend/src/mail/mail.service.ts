import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { Order, User } from "@prisma/client";
import { UserService } from "../user/user.service";

@Injectable()
export class MailService {
  constructor(
    private mailService: MailerService,
    private userService: UserService
  ) {}

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

  public async sendOrderMail(order: Order) {
    const user = await this.userService.getUserById(order.userId.toString());

    await this.mailService.sendMail({
      to: user.email,
      subject: `${user.name}, you order`,
      template: "./order.pug",
      context: {
        name: user.name,
      },
    });
  }
}
