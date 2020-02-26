import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCommonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { ExampleComponent } from './example.component';
import { ExampleDialogModule } from './example-dialog';
import {DialogService }from './dialog.service';
@NgModule({
  declarations: [ExampleComponent],
  exports: [ExampleComponent],
  imports: [
    ExampleDialogModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers:[DialogService]
})
export class ExampleModule {}
