import {Banknote} from "./banknote.model";

export class BanknoteFund {
  public id: number;
  public banknote: Banknote;
  public amount: number;

  constructor(id: number, banknote: Banknote, amount: number) {
    this.id = id;
    this.banknote = banknote;
    this.amount = amount;
  }
}
