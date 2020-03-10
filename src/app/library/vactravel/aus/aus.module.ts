import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AusPageRoutingModule } from './aus-routing.module';

import { AusPage } from './aus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AusPageRoutingModule
  ],
  declarations: [AusPage]
})
export class AusPageModule {}
