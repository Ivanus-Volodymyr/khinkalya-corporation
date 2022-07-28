import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TokenPair } from "@prisma/client";
import { Auth, google } from "googleapis";
import * as dotenv from "dotenv";

import { UserService } from "../user/user.service";
import { TokenService } from "../auth/token/token.service";

@Injectable()
export class GoogleService {
  private oauthClient: Auth.OAuth2Client;

  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private tokenService: TokenService
  ) {
    dotenv.config();
    const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
    this.oauthClient = new google.auth.OAuth2(clientId, clientSecret);
  }

  async userGoogleLogin(
    token: string
  ): Promise<Promise<TokenPair> | undefined | Error> {
    try {
      const tokenInfo = await this.oauthClient.getTokenInfo(token);
      console.log(tokenInfo);
      const user = await this.userService.getUserByEmail(tokenInfo.email);

      if (user) {
        const { tokenPair } = await this.tokenService.generateToken(user);

        if (!tokenPair)
          return new HttpException("Bad GoogleLogin", HttpStatus.UNAUTHORIZED);
        console.log(tokenPair);
        return tokenPair;
      }
    } catch (err) {
      console.log(err);
      return err.message[0];
    }
  }

  async userGoogleLogout(userEmail: string) {
    try {
      const user = await this.userService.getUserByEmail(userEmail);

      if(user){
        await this.tokenService.deleteTokenPair(user.id);
        console.log("logout back service");
      }
    } catch (err) {
      console.log(err);
      return err.message[0];
    }
  }
}
