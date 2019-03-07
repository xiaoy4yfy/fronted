import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import {WorkComponent} from '../work/work.component';
import {TypeComponent} from '../type/type.component';
import {GrideComponent} from '../gride/gride.component';
import {StepsComponent} from '../steps/steps.component';
import {NoticeComponent} from '../notice/notice.component';

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'user', pathMatch: 'full' },
            { path: 'user', loadChildren: '../user/user.module#UserModule' },
            {path: 'work', component: WorkComponent},
            {path: 'type', component: TypeComponent},
            {path: 'gride', component: GrideComponent},
            {path: 'steps', component: StepsComponent},
            {path: 'notice', component: NoticeComponent},
            // { path: 'equip', loadChildren: '../equipment/equipment.module#EquipmentModule'}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutesModule {}
