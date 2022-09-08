import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-withdraw-success-dialog',
  templateUrl: './withdraw-success-dialog.component.html',
  styleUrls: ['./withdraw-success-dialog.component.css']
})
export class WithdrawSuccessDialogComponent implements OnInit {
  public map: Map<string, number>;
  constructor() {}

  ngOnInit(): void {
  }

}
