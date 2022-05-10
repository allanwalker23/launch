import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditCardAvalaiblePageRoutingModule } from './credit-card-avalaible-routing.module';

import { CreditCardAvalaiblePage } from './credit-card-avalaible.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditCardAvalaiblePageRoutingModule
  ],
  declarations: [CreditCardAvalaiblePage]
})
export class CreditCardAvalaiblePageModule {}
