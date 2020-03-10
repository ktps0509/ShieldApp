import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VactravelPage } from './vactravel.page';

const routes: Routes = [
  {
    path: '',
    component: VactravelPage
  },
  {
    path: 'africa',
    loadChildren: () => import('./africa/africa.module').then( m => m.AfricaPageModule)
  },
  {
    path: 'na',
    loadChildren: () => import('./na/na.module').then( m => m.NAPageModule)
  },
  {
    path: 'sa',
    loadChildren: () => import('./sa/sa.module').then( m => m.SAPageModule)
  },
  {
    path: 'aus',
    loadChildren: () => import('./aus/aus.module').then( m => m.AusPageModule)
  },
  {
    path: 'asia',
    loadChildren: () => import('./asia/asia.module').then( m => m.AsiaPageModule)
  },
  {
    path: 'eu',
    loadChildren: () => import('./eu/eu.module').then( m => m.EuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VactravelPageRoutingModule {}
