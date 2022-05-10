import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditCardAvalaiblePage } from './credit-card-avalaible.page';

const routes: Routes = [
  {
    path: '',
    component: CreditCardAvalaiblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCardAvalaiblePageRoutingModule {}
