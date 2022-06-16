import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietfoodComponent } from './dietfood/dietfood.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobliesComponent } from './moblies/moblies.component';

const routes: Routes = [
  {path:"mobiles", component:MobliesComponent },
  {path:'home',component:HomeComponent},
  {path:'dietfood',component:DietfoodComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
