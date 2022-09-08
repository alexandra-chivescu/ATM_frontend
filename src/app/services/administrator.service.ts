import {HttpClient} from "@angular/common/http";
import {Administrator} from "../models/administrator.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Client} from "../models/client.model";
import {Atm} from "../models/atm.model";
import {BanknoteFund} from "../models/banknoteFund.model";
import {ClientDto} from "../models/clientDto.model";
import {NewClientDto} from "../models/newClientDto.model";

@Injectable({providedIn: 'root'})
export class AdministratorService {

  constructor(private http: HttpClient) {
  }

  public login(administrator: Administrator) : Observable<Administrator> {
       return this.http.post<Administrator>('/admin/login', administrator);
  }

  public getAtms() : Observable<Atm[]> {
    return this.http.get<Atm[]>('/atms/');
  }

  public addFunds(atm: Atm) : Observable<BanknoteFund[]> {
    return this.http.patch<BanknoteFund[]>('/atms/funds', atm);
  }

  public addClient(firstName : string, lastName : string, email: string, bankName : string , pin : string, cvv : string) : Observable<any> {
    return this.http.post<any> ('/admin/clients', new NewClientDto(firstName, lastName, email, bankName, pin, cvv));
  }


}
