import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vaccine9ListPageRoutingModule } from './vaccine9-list-routing.module';

import { Vaccine9ListPage } from './vaccine9-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vaccine9ListPageRoutingModule
  ],
  declarations: [Vaccine9ListPage]
})
export class Vaccine9ListPageModule {}
