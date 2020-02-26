import { Component } from '@angular/core';
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { ExampleDialogComponent } from "./example/example-dialog";

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  constructor(private router: Router, public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result ? this.router.navigate(['/blog']): this.router.navigate(['/Home']);
    });
  }
}
/**
 * So when the user searches "generate" I want the dialog to open
 * but still staying on the "Home" page. 
 */
