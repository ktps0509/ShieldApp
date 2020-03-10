import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine7DetailPageRoutingModule } from './vaccine7-detail-routing.module';

import { Vaccine7DetailPage } from './vaccine7-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine7DetailPageRoutingModule
  ],
  declarations: [Vaccine7DetailPage]
})
export class Vaccine7DetailPageModule {}
