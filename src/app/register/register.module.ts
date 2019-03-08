import { NgModule } from '@angular/core';
import {  } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {RegisterComponent} from './register.component';
import {RegisterRoutesModule} from './register.routes.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from '../userservice/userService';

@NgModule({
  imports: [
    SharedModule,
    RegisterRoutesModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
