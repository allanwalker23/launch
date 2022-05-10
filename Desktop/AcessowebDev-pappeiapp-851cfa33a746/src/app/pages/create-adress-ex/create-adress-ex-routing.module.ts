import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAdressEXPage } from './create-adress-ex.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAdressEXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAdressEXPageRoutingModule {}
