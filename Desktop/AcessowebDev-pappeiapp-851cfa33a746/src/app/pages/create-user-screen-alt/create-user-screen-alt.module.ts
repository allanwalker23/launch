import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateUserScreenAltPageRoutingModule } from './create-user-screen-alt-routing.module';

import { CreateUserScreenAltPage } from './create-user-screen-alt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateUserScreenAltPageRoutingModule
  ],
  declarations: [CreateUserScreenAltPage]
})
export class CreateUserScreenAltPageModule {}
