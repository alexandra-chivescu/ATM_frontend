export class Administrator {
  public username: string;
  public password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  get getUsername(): string {
    return this.username;
  }

  set setUsername(value: string) {
    this.username = value;
  }

  get getPassword(): string {
    return this.password;
  }

  set setPassword(value: string) {
    this.password = value;
  }
}
