export interface UserReqDto {
  name: string;
  lastName: string;
  email: string;
  password: string;
  roleIds: string[];
}

export interface UserResDto {
  id: string;
  name: string;
  lastName: string;
  email: string;
  roleId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
