import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SAPage } from './sa.page';

const routes: Routes = [
  {
    path: '',
    component: SAPage
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
export class SAPageRoutingModule {}
