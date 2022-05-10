import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsDetailsPageRoutingModule } from './notifications-details-routing.module';

import { NotificationsDetailsPage } from './notifications-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationsDetailsPageRoutingModule
  ],
  declarations: [NotificationsDetailsPage]
})
export class NotificationsDetailsPageModule {}
