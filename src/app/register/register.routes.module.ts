import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {RegisterComponent} from './register.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,

  }
]

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class RegisterRoutesModule {}
