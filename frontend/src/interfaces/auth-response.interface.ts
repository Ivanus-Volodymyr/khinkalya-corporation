import { IUser } from './user.interface';
import { ITokensPair } from './tokens.interface';

export interface IAuthResponseApi {
    user: IUser,
    tokensPair: ITokensPair,
}

export interface IAuthResponse {
    userData: IAuthResponseApi | undefined;
    status: number;
    error: string | undefined;
}

export interface ILogoutRequest extends Partial<IUser> {
    accessToken?: string;
}
