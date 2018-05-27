import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'user', pathMatch: 'full' },
            { path: 'user', loadChildren: '../user/user.module#UserModule' }
            // { path: 'equip', loadChildren: '../equipment/equipment.module#EquipmentModule'}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutesModule {}