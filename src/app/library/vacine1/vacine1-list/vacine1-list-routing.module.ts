import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vacine1ListPage } from './vacine1-list.page';

const routes: Routes = [
  {
    path: '',
    component: Vacine1ListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vacine1ListPageRoutingModule {}
