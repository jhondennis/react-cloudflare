import { Base } from "./base";

export class Role extends Base {
  readonly name: string;
  readonly description: string;

  constructor(data?: Partial<Role>) {
    super(data);
    this.name = data?.name || "";
    this.description = data?.description || "";
  }
}
