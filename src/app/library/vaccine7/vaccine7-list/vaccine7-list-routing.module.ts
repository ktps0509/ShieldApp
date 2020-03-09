import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine7ListPage } from './vaccine7-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine7ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine7ListPageRoutingModule {}
