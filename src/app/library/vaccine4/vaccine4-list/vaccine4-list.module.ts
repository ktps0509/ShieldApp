import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine4ListPageRoutingModule } from './vaccine4-list-routing.module';

import { Vaccine4ListPage } from './vaccine4-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine4ListPageRoutingModule
  ],
  declarations: [Vaccine4ListPage]
})
export class Vaccine4ListPageModule {}
