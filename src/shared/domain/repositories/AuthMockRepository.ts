import { Session } from "@/shared";

export interface AuthMockRepository {
  logIn: (email: string, password: string) => Promise<Session>;
  logOut: () => Promise<void>;
}
