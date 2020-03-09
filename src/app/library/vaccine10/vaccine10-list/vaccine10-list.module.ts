import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine10ListPageRoutingModule } from './vaccine10-list-routing.module';

import { Vaccine10ListPage } from './vaccine10-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine10ListPageRoutingModule
  ],
  declarations: [Vaccine10ListPage]
})
export class Vaccine10ListPageModule {}
