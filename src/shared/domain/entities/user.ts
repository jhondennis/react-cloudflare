import { Base } from "./base";
import { Role } from "./role";

export class User extends Base {
  readonly name: string;
  readonly lastName: string;
  readonly email: string;
  readonly roles: Role[];

  constructor(data?: Partial<User>) {
    super(data);
    this.name = data?.name || "";
    this.lastName = data?.lastName || "";
    this.email = data?.email || "";
    this.roles = data?.roles?.map(role => new Role(role)) || [];
  }

  get fullName() {
    return `${this.name} ${this.lastName}`.trim();
  }
}
