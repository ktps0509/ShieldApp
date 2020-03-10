import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine10DetailPageRoutingModule } from './vaccine10-detail-routing.module';

import { Vaccine10DetailPage } from './vaccine10-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine10DetailPageRoutingModule
  ],
  declarations: [Vaccine10DetailPage]
})
export class Vaccine10DetailPageModule {}
