interface ICreateUserDTO {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  biography?: string;
}

export { ICreateUserDTO };
