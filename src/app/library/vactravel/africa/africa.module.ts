import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfricaPageRoutingModule } from './africa-routing.module';

import { AfricaPage } from './africa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfricaPageRoutingModule
  ],
  declarations: [AfricaPage]
})
export class AfricaPageModule {}
