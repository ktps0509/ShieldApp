import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vacine1DetailPageRoutingModule } from './vacine1-detail-routing.module';

import { Vacine1DetailPage } from './vacine1-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vacine1DetailPageRoutingModule
  ],
  declarations: [Vacine1DetailPage]
})
export class Vacine1DetailPageModule {}
