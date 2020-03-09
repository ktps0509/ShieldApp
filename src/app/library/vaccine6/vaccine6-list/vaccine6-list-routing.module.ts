import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine6ListPage } from './vaccine6-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine6ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine6ListPageRoutingModule {}
