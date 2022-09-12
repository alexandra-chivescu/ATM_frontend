export class NewClientDto {
  public firstName : string;
  public lastName : string;
  public email : string;
  public bankName : string;
  public pin : string;
  public cvv : string;

  constructor(firstName?: string, lastName?: string, email?: string, bankName?: string, pin?: string, cvv?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.bankName = bankName;
    this.pin = pin;
    this.cvv = cvv;
  }

}
