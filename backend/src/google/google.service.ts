import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserService } from "../user/user.service";
import { TokenService } from "../auth/token/token.service";
import { GoogleResponse, GoogleTokenInfo } from "./dto/google.dto";

@Injectable()
export class GoogleService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  public async userGoogleLogin(
    token: string
  ): Promise<GoogleResponse | undefined | Error> {
    try {
      const tokenInfo = (await this.jwtService.decode(
        token
      )) as GoogleTokenInfo;
      const userDB = await this.userService.getUserByEmail(tokenInfo.email);

      if (userDB) {
        const tokensDB = await this.tokenService.getTokenPairByUserId(
          userDB.id
        );
        tokensDB && (await this.tokenService.deleteTokenPair(userDB.id));
        const { tokenPair, user } = await this.tokenService.generateToken(
          userDB
        );

        if (!tokenPair)
          return new HttpException("Bad GoogleLogin", HttpStatus.UNAUTHORIZED);
        else return { user, tokenPair };
      }
    } catch (err) {
      return err;
    }
  }
}
