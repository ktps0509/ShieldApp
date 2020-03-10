import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NAPageRoutingModule } from './na-routing.module';

import { NAPage } from './na.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NAPageRoutingModule
  ],
  declarations: [NAPage]
})
export class NAPageModule {}
