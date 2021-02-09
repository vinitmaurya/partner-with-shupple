import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerWithShuppleComponent } from './partner-with-shupple/partner-with-shupple.component';

const routes: Routes = [
  {path:"",redirectTo:"partner-with-shupple",pathMatch:"full"},
  {path:"partner-with-shupple",component:PartnerWithShuppleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
