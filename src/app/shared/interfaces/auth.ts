export interface ISignIn {
  username: string;
  password: string;
}
export interface ISignUp extends ISignIn {
  confirmPsd: string;
}
