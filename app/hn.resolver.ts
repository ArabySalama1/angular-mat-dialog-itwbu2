import { Injectable } from '@angular/core';
import {GuardService} from './guard.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import {tap }from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ExampleDialogComponent } from './example/example-dialog';

@Injectable()
export class HnResolver implements CanActivate {

  isValidate: boolean;

  constructor( private _router: Router, private guardSerive: GuardService, private dialog: MatDialog) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this._router.url)
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: { name: 'name', animal: 'animal' }
    });

    return dialogRef.afterClosed().pipe(  tap(result => {
  
      if (result){
        this.dialog.closeAll();
        this._router.navigate(['/Home'])
        return false;
      }else{
        this._router.navigate(['/Home']);
        return false;
      }
      
    } ));
  }
}