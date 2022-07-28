import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";

import { LoginGoogleTokenDto } from "./dto/google.dto";
import { GoogleService } from "./google.service";

@Controller("auth/google")
export class GoogleController {
  constructor(private readonly GoogleService: GoogleService) {}

  @Post("login")
  async userGoogleLogin(@Body() body: LoginGoogleTokenDto) {
    return await this.GoogleService.userGoogleLogin(body.token);
  }

  @Post("logout")
  async userGoogleLogout(@Body() userEmail: string) {
    await this.GoogleService.userGoogleLogout(userEmail);
  }
}
