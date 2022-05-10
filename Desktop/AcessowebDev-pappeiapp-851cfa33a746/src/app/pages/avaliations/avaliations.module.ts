import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliationsPageRoutingModule } from './avaliations-routing.module';

import { AvaliationsPage } from './avaliations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliationsPageRoutingModule
  ],
  declarations: [AvaliationsPage]
})
export class AvaliationsPageModule {}
