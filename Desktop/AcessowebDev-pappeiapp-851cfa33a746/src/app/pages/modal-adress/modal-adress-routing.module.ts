import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAdressPage } from './modal-adress.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAdressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAdressPageRoutingModule {}
