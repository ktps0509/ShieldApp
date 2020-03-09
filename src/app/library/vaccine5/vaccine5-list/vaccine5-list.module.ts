import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine5ListPageRoutingModule } from './vaccine5-list-routing.module';

import { Vaccine5ListPage } from './vaccine5-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine5ListPageRoutingModule
  ],
  declarations: [Vaccine5ListPage]
})
export class Vaccine5ListPageModule {}
