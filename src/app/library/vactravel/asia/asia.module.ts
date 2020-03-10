import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsiaPageRoutingModule } from './asia-routing.module';

import { AsiaPage } from './asia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsiaPageRoutingModule
  ],
  declarations: [AsiaPage]
})
export class AsiaPageModule {}
