import {
  HttpStatus,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { TokenService } from "../token/token.service";

@Injectable()
export class AccessTokenMiddleware implements NestMiddleware {
  constructor(private tokenService: TokenService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.headers.authorization);
      console.log(typeof undefined);
      if (!req.headers.authorization) {
        next(new UnauthorizedException(HttpStatus.UNAUTHORIZED, "hello"));
      }
      const bearer = req.headers.authorization.split(" ")[0];
      const access_token = req.headers.authorization.split(" ")[1];

      console.log(bearer, access_token);
      if (!bearer || !access_token) {
        next(
          new UnauthorizedException(HttpStatus.UNAUTHORIZED, "UNAUTHORIZED")
        );
      }
      const tokenPayload = await this.tokenService.verifyToken(
        access_token,
        "Access"
      );
      if (!tokenPayload) {
        next(
          new UnauthorizedException(
            HttpStatus.FORBIDDEN,
            "invalid token from access"
          )
        );
      }

      const tokenPairFromDb = await this.tokenService.getTokenPairByUserId(
        tokenPayload.id
      );
      if (access_token !== tokenPairFromDb.accessToken) {
        next(
          new UnauthorizedException(
            HttpStatus.FORBIDDEN,
            "invalid token from front"
          )
        );
      }
      next();
    } catch (e) {
      next(e.message);
    }
  }
}
