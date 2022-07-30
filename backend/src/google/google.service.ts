import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TokenPair } from "@prisma/client";

import { UserService } from "../user/user.service";
import { TokenService } from "../auth/token/token.service";
import { GoogleTokenInfo } from "./dto/google.dto";

@Injectable()
export class GoogleService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  async userGoogleLogin(token: string): Promise<TokenPair | undefined | Error> {
    try {
      const tokenInfo = (await this.jwtService.decode(
        token
      )) as GoogleTokenInfo;
      console.log(tokenInfo);
      const user = await this.userService.getUserByEmail(tokenInfo.email);

      if (user) {
        await this.tokenService.deleteTokenPair(user.id);
        const { tokenPair } = await this.tokenService.generateToken(user);
        console.log(tokenPair);
        if (!tokenPair)
          return new HttpException("Bad GoogleLogin", HttpStatus.UNAUTHORIZED);
        else return tokenPair;
      }
    } catch (err) {
      return err;
    }
  }
}
