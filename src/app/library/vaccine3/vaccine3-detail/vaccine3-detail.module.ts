import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine3DetailPageRoutingModule } from './vaccine3-detail-routing.module';

import { Vaccine3DetailPage } from './vaccine3-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine3DetailPageRoutingModule
  ],
  declarations: [Vaccine3DetailPage]
})
export class Vaccine3DetailPageModule {}
