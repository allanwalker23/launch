import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAdressEXPageRoutingModule } from './create-adress-ex-routing.module';

import { CreateAdressEXPage } from './create-adress-ex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAdressEXPageRoutingModule
  ],
  declarations: [CreateAdressEXPage]
})
export class CreateAdressEXPageModule {}
