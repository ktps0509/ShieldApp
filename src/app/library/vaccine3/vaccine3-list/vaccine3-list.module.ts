import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine3ListPageRoutingModule } from './vaccine3-list-routing.module';

import { Vaccine3ListPage } from './vaccine3-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine3ListPageRoutingModule
  ],
  declarations: [Vaccine3ListPage]
})
export class Vaccine3ListPageModule {}
