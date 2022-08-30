export class ClientDto {
  public amount: number;
  public token: string
  public clientId: number;
  public amountToWithdraw: number;

  constructor(amount: number, token: string, clientId: number) {
    this.amount = amount;
    this.amountToWithdraw = amount;
    this.token = token;
    this.clientId = clientId;
  }
}
