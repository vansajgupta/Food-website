import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobliesComponent } from './moblies/moblies.component';
import { DietfoodComponent } from './dietfood/dietfood.component';
import { HomeComponent } from './home/home.component';
import { FastfoodComponent } from './fastfood/fastfood.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MobliesComponent,
    DietfoodComponent,
    HomeComponent,
    FastfoodComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
