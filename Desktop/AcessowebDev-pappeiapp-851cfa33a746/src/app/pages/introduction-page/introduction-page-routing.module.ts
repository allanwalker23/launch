import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionPagePage } from './introduction-page.page';

const routes: Routes = [
  {
    path: '',
    component: IntroductionPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroductionPagePageRoutingModule {}
