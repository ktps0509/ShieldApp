import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EuPageRoutingModule } from './eu-routing.module';

import { EuPage } from './eu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EuPageRoutingModule
  ],
  declarations: [EuPage]
})
export class EuPageModule {}
