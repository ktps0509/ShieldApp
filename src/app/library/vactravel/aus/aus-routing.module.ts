import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AusPage } from './aus.page';

const routes: Routes = [
  {
    path: '',
    component: AusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AusPageRoutingModule {}
