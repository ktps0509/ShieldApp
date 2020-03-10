import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine5DetailPage } from './vaccine5-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine5DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine5DetailPageRoutingModule {}
