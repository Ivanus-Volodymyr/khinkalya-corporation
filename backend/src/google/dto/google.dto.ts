import { IsNotEmpty, IsString } from "class-validator";
import { TokenPair, User } from "@prisma/client";

export class LoginGoogleTokenDto {
  @IsString()
  @IsNotEmpty()
  token: string;
}

export class GoogleTokenInfo {
  @IsString()
  email: string;
  @IsString()
  given_name: string;
  @IsString()
  family_name: string;
  @IsString()
  picture: string;
}

export class GoogleResponse {
  user: User;
  tokenPair: TokenPair;
}
