import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NAPage } from './na.page';

const routes: Routes = [
  {
    path: '',
    component: NAPage
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
export class NAPageRoutingModule {}
