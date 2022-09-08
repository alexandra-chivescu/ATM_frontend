import {Component, OnInit} from '@angular/core';
import {Client} from "../../models/client.model";
import {ClientService} from "../../services/client.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {WithdrawSuccessDialogComponent} from "../withdraw-success-dialog/withdraw-success-dialog.component";
import {AddClientDialogComponent} from "../add-client-dialog/add-client-dialog.component";

@Component({
  selector: 'app-clients-admin',
  templateUrl: 'clients-admin.component.html',
  styleUrls: ['./clients-admin.component.css']
})
export class ClientsAdminComponent implements OnInit {

  public clients: Client[];
  public client: Client;
  gridColumns: number;

  constructor(private clientService: ClientService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getClients();
    this.gridColumns = 3;
  }

  public getClients(): void {
    this.clientService.getClients().subscribe
    ({
        next: (response: Client[]) =>
          this.clients = response,
        error: (error) =>
          alert(error.message)
      }
    );
  }

  public deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe
    (
      {
        next: _ =>
          this.clients = this.clients.filter(client => client.id != id),
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      }
    );

  };

  openDialog(): void {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      width: '600px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.getClients();
    });
  }

}
