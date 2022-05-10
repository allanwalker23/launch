import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginUserAltPageRoutingModule } from './login-user-alt-routing.module';

import { LoginUserAltPage } from './login-user-alt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginUserAltPageRoutingModule
  ],
  declarations: [LoginUserAltPage]
})
export class LoginUserAltPageModule {}
