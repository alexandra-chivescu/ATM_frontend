import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client.model";
import {ClientAuthDto} from "../models/clientAuthDto.model";
import {ClientDto} from "../models/clientDto.model";

@Injectable({ providedIn: 'root' })
export class ClientService {

  constructor(private http: HttpClient) {
  }

  public getClients() : Observable<Client[]> {
    return this.http.get<Client[]>('/admin/clients');
  }

  public deleteClient(id: number): Observable<number> {
    return this.http.delete<number>('admin/clients/' + id);
  }

  public clientAuth(cardNumber: string, cvv: string, pin: string) : Observable<ClientAuthDto> {
    return this.http.post<ClientAuthDto>('/atms/clients/login', new ClientAuthDto(cardNumber, cvv, pin))
  }

  public withdraw(amount: number, token: string, clientId: number) : Observable<ClientAuthDto> {
    return this.http.patch<ClientAuthDto>('/atms/withdraw', new ClientDto(amount, token, clientId));
  }

  public logout(clientId: number) : Observable<any> {
    return this.http.post('/atms/clients/logout', {clientId: clientId});
  }

  public balance(clientId: number) : Observable<number> {
    return this.http.get<number>('atms/balance/' + clientId);
  }

}
