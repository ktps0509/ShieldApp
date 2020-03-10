import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine2DetailPageRoutingModule } from './vaccine2-detail-routing.module';

import { Vaccine2DetailPage } from './vaccine2-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine2DetailPageRoutingModule
  ],
  declarations: [Vaccine2DetailPage]
})
export class Vaccine2DetailPageModule {}
