import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine11DetailPageRoutingModule } from './vaccine11-detail-routing.module';

import { Vaccine11DetailPage } from './vaccine11-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine11DetailPageRoutingModule
  ],
  declarations: [Vaccine11DetailPage]
})
export class Vaccine11DetailPageModule {}
