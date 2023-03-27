export interface IReqTokenUser {
  id: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  telefone: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  telefone: string;
  createdAt: Date;
}
export interface IUserResponse {
  id?: string;
  name?: string;
  email?: string;
  telefone?: string;
  createdAt?: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  telefone?: string;
}

// ----------------------------CONTACT_------------------------------

export interface IContactRequest {
  name:string;
  email?:string;
  telefone:string;
}

export interface IContactResponse extends IContactRequest{
  id:string;
  createdAt:Date;
}


export interface IContactUpdateRequest {
  name?:string;
  email?:string;
  telefone?:string;
}

