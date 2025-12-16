import { Session } from "@/models";
import { AuthMockRepository } from "@/shared/domain";

export class AuthMockRepositoryImpl implements AuthMockRepository {
  logIn(email: string, password: string): Promise<Session> {
    throw new Error("Method not implemented." + email + password);
  }
  logOut(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
