import { NgModule } from '@angular/core';
import {  } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutesModule } from './home.routes.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutesModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
