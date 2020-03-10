import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine6DetailPageRoutingModule } from './vaccine6-detail-routing.module';

import { Vaccine6DetailPage } from './vaccine6-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine6DetailPageRoutingModule
  ],
  declarations: [Vaccine6DetailPage]
})
export class Vaccine6DetailPageModule {}
