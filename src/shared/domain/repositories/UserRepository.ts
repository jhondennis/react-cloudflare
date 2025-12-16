import { User } from "@/models";

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User>;

  postUser(user: Partial<User>): Promise<User>;
  putUser(user: Partial<User>): Promise<User>;
  patchUser(user: Partial<User>): Promise<User>;

  deleteUser(id: string): Promise<void>;
}
