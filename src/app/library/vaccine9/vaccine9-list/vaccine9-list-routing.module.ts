import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine9ListPage } from './vaccine9-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine9ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine9ListPageRoutingModule {}
