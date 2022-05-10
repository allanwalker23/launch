import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaliationUserPage } from './avaliation-user.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliationUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliationUserPageRoutingModule {}
