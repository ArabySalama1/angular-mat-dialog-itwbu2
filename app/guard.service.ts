import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

import {DialogService} from './example/dialog.service';

@Injectable()
export class GuardService {
   isLoad: BehaviorSubject <boolean> = new BehaviorSubject<boolean>(false);
   isLoad$ = this.isLoad.asObservable();
   animal: string;
  name: string;
  constructor(private dialog: MatDialog) { 
    //this.isLoad.next (false);
  }
  public next = (data) => {
    console.log('pass before', this.isLoad.getValue())
      this.isLoad.next(data); 
    
          console.log('pass after', this.isLoad.getValue())

    }
 
open(result){
  //let result = window.confirm('Are you sure want to move?')
  console.log(result);
  //this.isLoad = result;
//  return this.isLoad;
}
}