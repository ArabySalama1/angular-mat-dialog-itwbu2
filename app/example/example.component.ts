import { Component } from '@angular/core';
import {DialogService}from './dialog.service';
@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {

  animal: string;
  name: string;

  constructor(private dialogService: DialogService) {}

  openDialog(){
    this.dialogService.openDialog();
  }

}
