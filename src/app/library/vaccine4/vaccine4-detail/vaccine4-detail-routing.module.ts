import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine4DetailPage } from './vaccine4-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine4DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine4DetailPageRoutingModule {}
