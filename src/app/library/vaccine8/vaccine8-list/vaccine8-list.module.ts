import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine8ListPageRoutingModule } from './vaccine8-list-routing.module';

import { Vaccine8ListPage } from './vaccine8-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine8ListPageRoutingModule
  ],
  declarations: [Vaccine8ListPage]
})
export class Vaccine8ListPageModule {}
