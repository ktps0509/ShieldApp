import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NAPage } from './na.page';

const routes: Routes = [
  {
    path: '',
    component: NAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NAPageRoutingModule {}
