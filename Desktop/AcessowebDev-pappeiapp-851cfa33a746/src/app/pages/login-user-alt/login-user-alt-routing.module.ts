import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginUserAltPage } from './login-user-alt.page';

const routes: Routes = [
  {
    path: '',
    component: LoginUserAltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginUserAltPageRoutingModule {}
