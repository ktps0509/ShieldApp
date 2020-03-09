import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine11ListPage } from './vaccine11-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine11ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine11ListPageRoutingModule {}
