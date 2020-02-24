import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine2ListPage } from './vaccine2-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine2ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine2ListPageRoutingModule {}
