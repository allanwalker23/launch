import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliationStorePageRoutingModule } from './avaliation-store-routing.module';

import { AvaliationStorePage } from './avaliation-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliationStorePageRoutingModule
  ],
  declarations: [AvaliationStorePage]
})
export class AvaliationStorePageModule {}
