import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine3ListPage } from './vaccine3-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine3ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine3ListPageRoutingModule {}
