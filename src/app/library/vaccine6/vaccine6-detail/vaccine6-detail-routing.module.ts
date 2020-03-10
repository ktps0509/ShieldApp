import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine6DetailPage } from './vaccine6-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine6DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine6DetailPageRoutingModule {}
