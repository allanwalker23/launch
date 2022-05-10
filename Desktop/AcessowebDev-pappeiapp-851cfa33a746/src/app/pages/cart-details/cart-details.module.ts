import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartDetailsPageRoutingModule } from './cart-details-routing.module';

import { CartDetailsPage } from './cart-details.page';
import {NgxMaskIonicModule} from 'ngx-mask-ionic'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskIonicModule,
    IonicModule,
    CartDetailsPageRoutingModule
  ],
  declarations: [CartDetailsPage]
})
export class CartDetailsPageModule {}
