import { Component, Inject ,ChangeDetectionStrategy} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {GuardService} from '../../guard.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-example-dialog',
  templateUrl: 'example-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private gService: GuardService, private router: Router ) { }

  onNoClick(): void {
  //  this.gService.isLoad =  false; 
    this.dialogRef.close();
  }
  isLoad(){
    //this.gService.isLoad= true;
      console.log('isLoad');
      return true;
  // return this.gService.isLoad= true;
  }

}