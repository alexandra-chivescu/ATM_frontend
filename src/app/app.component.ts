import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent {
  /*
  title = 'atm';


  constructor(private http:HttpClient) {
  }

   ngOnInit() {
    this.fetchDataFromServer();
  }

  onFetchPosts() {
    this.fetchDataFromServer();
  }

  private fetchDataFromServer() {
      this.http.get('/clients').subscribe(posts => {
        console.log(posts);
      });
  } */
}
