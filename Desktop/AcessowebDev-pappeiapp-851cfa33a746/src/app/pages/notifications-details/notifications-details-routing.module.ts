import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationsDetailsPage } from './notifications-details.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationsDetailsPageRoutingModule {}
