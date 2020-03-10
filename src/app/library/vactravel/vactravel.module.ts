import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VactravelPageRoutingModule } from './vactravel-routing.module';

import { VactravelPage } from './vactravel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VactravelPageRoutingModule
  ],
  declarations: [VactravelPage]
})
export class VactravelPageModule {}
