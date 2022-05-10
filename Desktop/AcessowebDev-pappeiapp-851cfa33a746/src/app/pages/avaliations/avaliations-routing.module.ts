import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaliationsPage } from './avaliations.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliationsPageRoutingModule {}
