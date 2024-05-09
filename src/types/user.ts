export enum LoginType {
  Apple,
  EmailPassword,
  Google,
}

export interface IUserTokens {
  accessToken: string | null;
  refreshToken: string | null;
  accessExpiredAt: string | null;
  refreshExpiredAt: string | null;
}

export interface IBaseUserInfo {
  id: number;
  firstName: string | null;
  lastName: string | null;
  friendlyName: string | null;
  avatar: string | null;
}

export interface IUserState extends IBaseUserInfo {
  isLoading: boolean;
  isAuthorized: boolean;
}
