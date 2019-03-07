import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';

import { AppRoutesModule } from './app.routes.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import {RegisterComponent} from './register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './userservice/userService';
import {HomeModule} from './home/home.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {LocalStorageService} from 'ngx-webstorage';
import {AuthInterceptor} from './interceptor/interceptor';



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
  providers: [UserService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
