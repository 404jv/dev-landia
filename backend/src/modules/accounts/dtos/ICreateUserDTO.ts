interface ICreateUserDTO {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  biography?: string;
  is_admin?: boolean;
  total_xp?: number;
  total_coins?: number;
}

export { ICreateUserDTO };
