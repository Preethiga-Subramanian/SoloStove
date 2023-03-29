import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirepitsComponent } from './firepits/firepits.component';

const routes: Routes = [
  {path:'firepits',component:FirepitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
