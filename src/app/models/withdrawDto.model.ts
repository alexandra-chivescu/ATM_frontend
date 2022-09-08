import {Banknote} from "./banknote.model";

export class WithdrawDto {
  public banknotes: Map<Banknote, number>;

  constructor(banknotes: Map<Banknote, number>) {
    this.banknotes = banknotes;
  }
}
