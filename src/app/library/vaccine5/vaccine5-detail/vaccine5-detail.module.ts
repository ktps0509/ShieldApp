import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine5DetailPageRoutingModule } from './vaccine5-detail-routing.module';

import { Vaccine5DetailPage } from './vaccine5-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine5DetailPageRoutingModule
  ],
  declarations: [Vaccine5DetailPage]
})
export class Vaccine5DetailPageModule {}
