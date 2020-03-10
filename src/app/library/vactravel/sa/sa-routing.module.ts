import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SAPage } from './sa.page';

const routes: Routes = [
  {
    path: '',
    component: SAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SAPageRoutingModule {}
