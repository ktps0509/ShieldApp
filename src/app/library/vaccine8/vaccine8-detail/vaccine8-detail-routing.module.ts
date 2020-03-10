import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine8DetailPage } from './vaccine8-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine8DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine8DetailPageRoutingModule {}
