import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine11ListPageRoutingModule } from './vaccine11-list-routing.module';

import { Vaccine11ListPage } from './vaccine11-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine11ListPageRoutingModule
  ],
  declarations: [Vaccine11ListPage]
})
export class Vaccine11ListPageModule {}
