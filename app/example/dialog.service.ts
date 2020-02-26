import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import {GuardService}from '.././guard.service';
import { ExampleDialogComponent } from './example-dialog';

@Injectable()
export class DialogService {

  constructor(public dialog: MatDialog, private router: Router, private gService : GuardService) { }
openDialog(): void {
    this.router.navigate(['/Home'])
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: { name: 'name', animal: 'animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog is is closed');
     // this.animal = result;
      console.log(result)
      result ? this.router.navigate(['/generate']): this.gService.open(false);
    });
  }
}