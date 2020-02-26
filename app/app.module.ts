import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {ExampleDialogModule} from './example/example-dialog/example-dialog.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { ExampleModule } from './example';
import { GenerateComponent } from './generate/generate.component';
import {HnResolver}from './hn.resolver';
import { GuardService } from './guard.service';
import { BlogComponent } from './blog/blog.component';
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, GenerateComponent, BlogComponent],
  imports: [
    CoreModule,
    ExampleModule,
    AppRoutingModule,
    
  ],
  providers :[HnResolver, GuardService],
  entryComponents:[]
})
export class AppModule {}
