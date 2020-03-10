import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine11DetailPage } from './vaccine11-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine11DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine11DetailPageRoutingModule {}
