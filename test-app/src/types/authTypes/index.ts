export interface IAuthRequestLoginData {
  email: string;
  password: string;
}

export interface IAuthResponseLoginData {
  access: string;
  refresh: string;
}

export interface IAuthRequestRegistartionData {
  username: string;
  email: string;
  password: string;
}

export interface IAuthResponseRegistrationData {
  username: string;
  email: string;
  id: number;
}

export interface IAuthRequestAccountActivationData {
  uid: string;
  token: string;
}

export interface IAuthResponseAccountActivationData {
  uid: string;
  token: string;
}

export interface IAuthResponseActivatedUserData {
  username: string;
  id: number;
  email: string;
}

export interface IAuthRequestRefreshToken {
  refresh: string;
}

export interface IAuthResponseRefreshToken {
  access: string;
}
