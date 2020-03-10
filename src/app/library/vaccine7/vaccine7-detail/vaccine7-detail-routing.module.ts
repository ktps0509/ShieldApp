import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine7DetailPage } from './vaccine7-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine7DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine7DetailPageRoutingModule {}
