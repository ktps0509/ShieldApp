import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsiaPage } from './asia.page';

const routes: Routes = [
  {
    path: '',
    component: AsiaPage
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
export class AsiaPageRoutingModule {}
