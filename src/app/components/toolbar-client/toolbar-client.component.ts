import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-toolbar-client',
  templateUrl: './toolbar-client.component.html',
  styleUrls: ['./toolbar-client.component.css']
})
export class ToolbarClientComponent implements OnInit {

  @Input("clientId")
  private clientId: string;

  constructor(private clientService: ClientService,
              public router: Router) {
  }

  ngOnInit(): void {
  }

  public logout() {
    this.clientService.logout(Number.parseInt(this.clientId))
      .subscribe(value => {
        console.log(value)
        localStorage.removeItem("cardAuthToken");
        this.router.navigate(['/home']);
      });
  }

}
