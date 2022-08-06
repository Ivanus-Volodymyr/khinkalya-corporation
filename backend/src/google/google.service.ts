import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import generator from "generate-password";

import { UserService } from "../user/user.service";
import { TokenService } from "../auth/token/token.service";
import {
  GoogleResponse,
  GoogleTokenInfo,
  LoginGoogleDto,
} from "./dto/google.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class GoogleService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  public async userGoogleLogin(
    body: LoginGoogleDto
  ): Promise<GoogleResponse | undefined | Error> {
    try {
      const tokenInfo = (await this.jwtService.decode(
        body.token
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
      } else {
        const randomPassword = generator.generate({ length: 8, numbers: true });
        const hashPassword = await bcrypt.hash(randomPassword, 10);
        const googleUser = {
          email: tokenInfo.email,
          name: tokenInfo.given_name,
          password: hashPassword,
          avatar: tokenInfo.picture,
          city: body.city,
          age: 18,
        };
        const savedUser = await this.userService.createUser(googleUser);
        const { tokenPair, user } = await this.tokenService.generateToken(
          savedUser
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
