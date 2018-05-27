import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router/src/router_module';

import { NgZorroAntdModule } from 'ng-zorro-antd';
// 注册语言包
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

// import { MatButtonModule } from '@angular/material'; // 之前的写法
import {MatButtonModule} from '@angular/material/button'; // angular5 集成 material5 后的写法
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    MatButtonModule,
    MatCardModule,    
    MatInputModule
  ], 
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: []
}) 
export class SharedModule { }
