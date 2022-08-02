import { Body, Controller, Post } from "@nestjs/common";

import { LoginGoogleTokenDto } from "./dto/google.dto";
import { GoogleService } from "./google.service";

@Controller("auth/google")
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Post("login")
  public async userGoogleLogin(@Body() body: LoginGoogleTokenDto) {
    return this.googleService.userGoogleLogin(body.token);
  }
}
