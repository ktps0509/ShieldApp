import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine10DetailPage } from './vaccine10-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine10DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine10DetailPageRoutingModule {}
