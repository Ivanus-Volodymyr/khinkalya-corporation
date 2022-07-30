import { IsNotEmpty, IsString } from "class-validator";

export class LoginGoogleTokenDto {
  @IsString()
  @IsNotEmpty()
  token: string;
}

export class GoogleTokenInfo{
  @IsString()
  email: string;
  @IsString()
  given_name: string;
  @IsString()
  family_name: string;
  @IsString()
  picture: string;
}
