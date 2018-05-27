import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

/** 路由项 */
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
        // loadChildren:'./user/user.module#UserModule'
    },
    {
        path: '**',
        component: LoginComponent
    }
]

/** 路由组件 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule {}