import {HttpClient} from "@angular/common/http";
import {Administrator} from "../models/administrator.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AdministratorService {
  private apiServerUrl= '';

  constructor(private http: HttpClient) {
  }

  public getAdministratorCredentials(administrator: Administrator) : Observable<Administrator> {
       return this.http.post<Administrator>(`${this.apiServerUrl}/administrators/login`, administrator);
  }
}
