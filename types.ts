export interface IUserInfo {
  username?: string;
  email?: string;
}

export interface IAlertOptions {
  callback?: () => any;
  title?: string;
  message?: string;
  button_text?: string;
}

export enum routesUrl {
  signup = "/signup",
  signin = "/signin",
  otp = "/otp",
  main = "/",
}

export interface payloadUserCodeI {
  username?: string;
  email?: string;
  code?: string
}

export interface payloadLogInI {
  email: string;
  password: string;
}
