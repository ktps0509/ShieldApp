import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vacine1ListPageRoutingModule } from './vacine1-list-routing.module';

import { Vacine1ListPage } from './vacine1-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vacine1ListPageRoutingModule
  ],
  declarations: [Vacine1ListPage]
})
export class Vacine1ListPageModule {}
