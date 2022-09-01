export class ClientAuthDto {
  public cardNumber: string;
  public cvv: string;
  public pin: string;
  public clientId: number;
  public token: string;
  public id: number;

  constructor(cardNumber: string, cvv: string, pin: string, clientId?: number, token?: string, id?: number) {
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.pin = pin;
    this.clientId = clientId;
    this.token = token;
    this.id = id;
  }
}
