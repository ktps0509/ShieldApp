import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine8DetailPageRoutingModule } from './vaccine8-detail-routing.module';

import { Vaccine8DetailPage } from './vaccine8-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine8DetailPageRoutingModule
  ],
  declarations: [Vaccine8DetailPage]
})
export class Vaccine8DetailPageModule {}
