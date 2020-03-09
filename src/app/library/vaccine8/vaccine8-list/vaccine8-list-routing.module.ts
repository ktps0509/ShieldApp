import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine8ListPage } from './vaccine8-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine8ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine8ListPageRoutingModule {}
