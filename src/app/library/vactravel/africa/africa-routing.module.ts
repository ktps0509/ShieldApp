import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfricaPage } from './africa.page';

const routes: Routes = [
  {
    path: '',
    component: AfricaPage
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
export class AfricaPageRoutingModule {}
