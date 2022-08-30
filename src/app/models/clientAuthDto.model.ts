export class ClientAuthDto {
  public cardNumber: string;
  public cvv: string;
  public pin: string;
  public clientId: number;

  constructor(cardNumber: string, cvv: string, pin: string, clientId?: number) {
    this.cardNumber = cardNumber;
    this.cvv = cvv;
    this.pin = pin;
    this.clientId = clientId;
  }
}
