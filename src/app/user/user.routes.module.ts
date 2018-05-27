import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserHomeComponent } from "./user-home/user-home.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";

const userRoutes : Routes = [
    {
        path: '',
        redirectTo: 'userHome',
        pathMatch: 'full'
    },
    {
        path: 'userHome',
        component: UserHomeComponent
    },
    {
        path: 'userList',
        component: UserListComponent
    },
    {
        path: 'userDetail',
        component: UserDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutesModule {}