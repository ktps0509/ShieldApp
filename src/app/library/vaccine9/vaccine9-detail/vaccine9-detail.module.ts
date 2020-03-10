import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine9DetailPageRoutingModule } from './vaccine9-detail-routing.module';

import { Vaccine9DetailPage } from './vaccine9-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine9DetailPageRoutingModule
  ],
  declarations: [Vaccine9DetailPage]
})
export class Vaccine9DetailPageModule {}
