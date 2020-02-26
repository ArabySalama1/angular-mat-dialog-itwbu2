import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GenerateComponent }from './generate/generate.component';
import {HnResolver} from './hn.resolver';
import {ExampleComponent} from './example/example.component';
import {BlogComponent} from './blog/blog.component';
@NgModule({
  declarations: [ 

    
  ],
  imports: [
    RouterModule.forRoot([
      {path:'Home', component: ExampleComponent},
      {path: 'blog', component:BlogComponent},
      {path: 'generate', component:GenerateComponent,
      canActivate: [HnResolver]},
      {path:'', redirectTo: 'Home', pathMatch: 'full'}
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


