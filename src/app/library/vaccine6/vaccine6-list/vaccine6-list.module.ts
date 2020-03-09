import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine6ListPageRoutingModule } from './vaccine6-list-routing.module';

import { Vaccine6ListPage } from './vaccine6-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine6ListPageRoutingModule
  ],
  declarations: [Vaccine6ListPage]
})
export class Vaccine6ListPageModule {}
