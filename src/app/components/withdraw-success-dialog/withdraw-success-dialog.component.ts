import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-withdraw-success-dialog',
  templateUrl: './withdraw-success-dialog.component.html',
  styleUrls: ['./withdraw-success-dialog.component.css']
})
export class WithdrawSuccessDialogComponent implements OnInit {
  public map: Map<string, number>;
  constructor(
    public dialogRef: MatDialogRef<WithdrawSuccessDialogComponent>) {}

  ngOnInit(): void {
  }

}
