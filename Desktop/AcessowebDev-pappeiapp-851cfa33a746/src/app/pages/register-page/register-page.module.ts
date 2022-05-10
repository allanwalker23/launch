import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgxMaskIonicModule} from 'ngx-mask-ionic'

import { IonicModule } from '@ionic/angular';

import { RegisterPagePageRoutingModule } from './register-page-routing.module';

import { RegisterPagePage } from './register-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxMaskIonicModule,
    RegisterPagePageRoutingModule
  ],
  declarations: [RegisterPagePage]
})
export class RegisterPagePageModule {}
