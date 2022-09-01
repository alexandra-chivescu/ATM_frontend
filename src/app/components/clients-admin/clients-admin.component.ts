import { Component, OnInit } from '@angular/core';
import {Client} from "../../models/client.model";
import {ClientService} from "../../services/client.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-clients-admin',
  templateUrl: 'clients-admin.component.html',
  styleUrls: ['./clients-admin.component.css']
})
export class ClientsAdminComponent implements OnInit {

 public clients: Client[];
 public client: Client;
 gridColumns: number;

 constructor(private clientService: ClientService) {
 }

 ngOnInit() {
  this.getClients();
  this.gridColumns = 3;
 }

  public getClients() : void {
    this.clientService.getClients().subscribe
    (
      (response: Client[]) => {
        this.clients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public deleteClient(id: number) {
      this.clientService.deleteClient(id).subscribe
      (
        client => {
          this.clients = this.clients.filter(client => client.id != id);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );

    };

}
