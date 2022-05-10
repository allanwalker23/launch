import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroductionPagePageRoutingModule } from './introduction-page-routing.module';

import { IntroductionPagePage } from './introduction-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroductionPagePageRoutingModule
  ],
  declarations: [IntroductionPagePage]
})
export class IntroductionPagePageModule {}
