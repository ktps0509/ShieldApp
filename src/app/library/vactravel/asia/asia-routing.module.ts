import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsiaPage } from './asia.page';

const routes: Routes = [
  {
    path: '',
    component: AsiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsiaPageRoutingModule {}
