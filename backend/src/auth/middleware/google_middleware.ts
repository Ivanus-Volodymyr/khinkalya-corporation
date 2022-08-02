import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

import { TokenService } from "../token/token.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class GoogleTokenMiddleware implements NestMiddleware {
  constructor(
    private tokenService: TokenService,
    private jwtService: JwtService
  ) {}
  public async use(req: Request, res: Response, next: NextFunction) {
    try {
      const google_token = req.body.token;
      console.log(google_token);

      const newVar = await this.tokenService.verifyToken(
        google_token,
        "Google"
      );
      console.log(newVar);

      next();
    } catch (e) {
      next(e.message);
    }
  }
}
