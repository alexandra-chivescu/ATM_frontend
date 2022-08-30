import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-card-auth-success-dialog',
  templateUrl: './card-auth-success-dialog.component.html',
  styleUrls: ['./card-auth-success-dialog.component.css']
})
export class CardAuthSuccessDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CardAuthSuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
