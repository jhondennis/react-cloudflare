import { User } from "@/shared";
import { UserRepository } from "@/shared/domain";

export class UserMockRepositoryImpl implements UserRepository {
  getUsers(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  getUserById(id: string): Promise<User> {
    throw new Error("Method not implemented." + id);
  }
  postUser(user: User): Promise<User> {
    throw new Error("Method not implemented." + user);
  }
  putUser(user: User): Promise<User> {
    throw new Error("Method not implemented." + user);
  }
  patchUser(user: User): Promise<User> {
    throw new Error("Method not implemented." + user);
  }
  deleteUser(id: string): Promise<void> {
    throw new Error("Method not implemented." + id);
  }
}
