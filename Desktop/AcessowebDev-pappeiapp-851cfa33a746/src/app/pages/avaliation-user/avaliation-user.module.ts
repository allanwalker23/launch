import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliationUserPageRoutingModule } from './avaliation-user-routing.module';

import { AvaliationUserPage } from './avaliation-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliationUserPageRoutingModule
  ],
  declarations: [AvaliationUserPage]
})
export class AvaliationUserPageModule {}
