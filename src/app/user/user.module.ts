import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutesModule } from './user.routes.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutesModule
  ],
  declarations: [UserListComponent, UserHomeComponent, UserDetailComponent]
})
export class UserModule { }
