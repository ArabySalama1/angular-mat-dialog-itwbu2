import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from "@angular/material";
import { ExampleDialogComponent } from "../example/example-dialog";



@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
data;
constructor(public dialog: MatDialog, private route: ActivatedRoute) {}
  ngOnInit() {
      // this.open();
  }

  open(){
   this.dialog.open(ExampleDialogComponent, {
     disableClose: true,
     width: "650px",
     height: "480px"
   });
   return false;
   }

}