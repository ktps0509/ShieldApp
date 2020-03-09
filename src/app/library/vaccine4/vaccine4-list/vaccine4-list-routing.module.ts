import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine4ListPage } from './vaccine4-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine4ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine4ListPageRoutingModule {}
