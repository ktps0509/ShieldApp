import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine5ListPage } from './vaccine5-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine5ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine5ListPageRoutingModule {}
