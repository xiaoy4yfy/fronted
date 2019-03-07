import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

import { AppRoutesModule } from './app.routes.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import {RegisterComponent} from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './userservice/userService';
import {HomeModule} from './home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutesModule,
    HttpClientModule,
    HomeModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
