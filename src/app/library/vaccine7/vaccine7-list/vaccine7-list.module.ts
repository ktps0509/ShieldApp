import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine7ListPageRoutingModule } from './vaccine7-list-routing.module';

import { Vaccine7ListPage } from './vaccine7-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine7ListPageRoutingModule
  ],
  declarations: [Vaccine7ListPage]
})
export class Vaccine7ListPageModule {}
