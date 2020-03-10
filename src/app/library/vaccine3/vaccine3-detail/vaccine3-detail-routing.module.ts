import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine3DetailPage } from './vaccine3-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine3DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine3DetailPageRoutingModule {}
