import { NgModule } from '@angular/core';
import {  } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutesModule } from './home.routes.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {WorkComponent} from '../work/work.component';
import {TypeComponent} from '../type/type.component';
import {GrideComponent} from '../gride/gride.component';
import {StepsComponent} from '../steps/steps.component';
import {NoticeComponent} from '../notice/notice.component';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../userservice/userService';
import {EvaluationComponent} from '../evaluation/evaluation.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutesModule,
    NgZorroAntdModule,
  ],
  declarations: [HomeComponent, WorkComponent, TypeComponent, GrideComponent, StepsComponent, NoticeComponent,
                 EvaluationComponent ],
})
export class HomeModule { }
