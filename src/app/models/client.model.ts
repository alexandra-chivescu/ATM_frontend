import {Account} from "./account.model";

export class Client {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public accounts: Account[];


  constructor(id: number, firstName: string, lastName: string, email: string, accounts: Account[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.accounts = accounts;
  }


}
