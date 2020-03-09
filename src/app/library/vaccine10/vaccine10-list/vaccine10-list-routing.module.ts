import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine10ListPage } from './vaccine10-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine10ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine10ListPageRoutingModule {}
