import moment from "moment";

export class Base {
  readonly id: string;
  readonly updatedAt: moment.Moment;
  readonly createdAt: moment.Moment;
  readonly deletedAt: moment.Moment;

  constructor(data?: Partial<Base>) {
    this.id = data?.id || "";
    this.createdAt = data?.createdAt ? moment(data?.createdAt) : moment();
    this.updatedAt = data?.updatedAt ? moment(data?.updatedAt) : moment();
    this.deletedAt = data?.deletedAt ? moment(data?.deletedAt) : moment();
  }

  get updatedAtShort(): string {
    return this.updatedAt.format("l");
  }
  get updatedAtMedium(): string {
    return this.updatedAt.format("DD/MM/YYYY HH:mm");
  }
  get updatedAtLong(): string {
    return this.updatedAt.format("LLL");
  }

  get createdAtShort(): string {
    return this.createdAt.format("l");
  }
  get createdAtMedium(): string {
    return this.createdAt.format("DD/MM/YYYY HH:mm");
  }
  get createdAtLong(): string {
    return this.createdAt.format("LLL");
  }

  get deletedAtShort(): string {
    return this.deletedAt.format("l");
  }
  get deletedAtMedium(): string {
    return this.deletedAt.format("DD/MM/YYYY HH:mm");
  }
  get deletedAtLong(): string {
    return this.deletedAt.format("LLL");
  }
}
