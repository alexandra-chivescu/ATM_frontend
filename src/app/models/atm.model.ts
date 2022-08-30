import {BanknoteFund} from "./banknoteFund.model";

export class Atm {
  public id: number;
  public location: string;
  public banknoteFunds: BanknoteFund[];

  constructor(id: number, location: string, banknoteFunds: BanknoteFund[]) {
    this.id = id;
    this.location = location;
    this.banknoteFunds = banknoteFunds;
  }
}
