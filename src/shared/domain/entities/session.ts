import { Base } from "./base";
import { User } from "./user";

export class Session extends Base {
  readonly user: User;
  readonly userId: string;
  readonly token: string;

  constructor(data?: Partial<Session>) {
    super(data);
    this.token = data?.token || "";
    this.userId = data?.userId || "";
    this.user = data?.user ? new User(data?.user) : new User();
  }

  get bearerToken() {
    return `Bearer ${this.token}`;
  }
}
