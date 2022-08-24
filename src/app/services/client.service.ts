import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client.model";

@Injectable({ providedIn: 'root' })
export class ClientService {

  constructor(private http: HttpClient) {
  }

  public getClients() : Observable<Client[]> {
    return this.http.get<Client[]>('/admin/clients');
  }

  public deleteClient(id: number): Observable<void> {
    return this.http.delete<void>('admin/clients');
  }

}
