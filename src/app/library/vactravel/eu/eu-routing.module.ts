import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EuPage } from './eu.page';

const routes: Routes = [
  {
    path: '',
    component: EuPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EuPageRoutingModule {}
