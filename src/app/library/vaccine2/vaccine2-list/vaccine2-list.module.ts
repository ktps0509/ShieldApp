import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine2ListPageRoutingModule } from './vaccine2-list-routing.module';

import { Vaccine2ListPage } from './vaccine2-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine2ListPageRoutingModule
  ],
  declarations: [Vaccine2ListPage]
})
export class Vaccine2ListPageModule {}
