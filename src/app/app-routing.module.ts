import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextBoxComponent } from './ComponentsRegisteration/text-box/text-box.component';

const routes: Routes = [
  // {
  //   path : '',
  //   redirectTo : "inputbox",
  //   pathMatch : 'full',
  // },
  // {
  //   path : 'inputbox',
  //   component : TextBoxComponent
  // },
  // {

  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
