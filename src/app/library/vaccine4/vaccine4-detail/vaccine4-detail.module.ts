import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine4DetailPageRoutingModule } from './vaccine4-detail-routing.module';

import { Vaccine4DetailPage } from './vaccine4-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine4DetailPageRoutingModule
  ],
  declarations: [Vaccine4DetailPage]
})
export class Vaccine4DetailPageModule {}
