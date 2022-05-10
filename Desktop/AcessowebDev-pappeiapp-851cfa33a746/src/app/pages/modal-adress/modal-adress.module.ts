import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAdressPageRoutingModule } from './modal-adress-routing.module';

import { ModalAdressPage } from './modal-adress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAdressPageRoutingModule
  ],
  declarations: [ModalAdressPage]
})
export class ModalAdressPageModule {}
