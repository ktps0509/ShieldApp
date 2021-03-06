import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vaccine6-list/vaccine6-list.module').then( m => m.Vaccine6ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vaccine6-detail/vaccine6-detail.module').then( m => m.Vaccine6DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vaccine6RoutingModule { }
