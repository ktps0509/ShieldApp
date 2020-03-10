import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EuPage } from './eu.page';

const routes: Routes = [
  {
    path: '',
    component: EuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EuPageRoutingModule {}
