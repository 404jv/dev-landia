interface IUserResponseDTO {
  id: string;
  name: string;
  username: string;
  email: string;
  is_admin: boolean;
  biography: string;
  total_xp: number;
  total_coins: number;
  created_at: Date;
  updated_at: Date;
}

export { IUserResponseDTO };
