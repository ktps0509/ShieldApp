import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine2DetailPage } from './vaccine2-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine2DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine2DetailPageRoutingModule {}
