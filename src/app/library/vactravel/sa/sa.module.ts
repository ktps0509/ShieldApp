import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SAPageRoutingModule } from './sa-routing.module';

import { SAPage } from './sa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SAPageRoutingModule
  ],
  declarations: [SAPage]
})
export class SAPageModule {}
