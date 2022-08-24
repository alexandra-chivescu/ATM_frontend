import {AccountType} from "./accountType.model";

export class Account {
  public id: number;
  public accountType: AccountType;
  public balance: number;

  constructor(id: number, accountType: AccountType, balance: number) {
    this.id = id;
    this.accountType = accountType;
    this.balance = balance;
  }
}
