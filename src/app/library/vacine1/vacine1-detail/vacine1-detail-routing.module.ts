import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vacine1DetailPage } from './vacine1-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vacine1DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vacine1DetailPageRoutingModule {}
