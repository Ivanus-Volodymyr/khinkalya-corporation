import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

import { TokenService } from "../token/token.service";

@Injectable()
export class AdminMiddleware implements NestMiddleware {
  constructor(private tokenService: TokenService) {}
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const bearer = req.headers.authorization.split(" ")[0];
      const access_token = req.headers.authorization.split(" ")[1];

      const tokenPayload = await this.tokenService.verifyToken(
        access_token,
        "Access"
      );

      console.log(bearer, tokenPayload);
    } catch (e) {
      next(e.message);
    }
  }
}
