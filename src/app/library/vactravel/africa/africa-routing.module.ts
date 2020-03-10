import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfricaPage } from './africa.page';

const routes: Routes = [
  {
    path: '',
    component: AfricaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfricaPageRoutingModule {}
