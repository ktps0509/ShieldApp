import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vaccine4-list/vaccine4-list.module').then( m => m.Vaccine4ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vaccine4-detail/vaccine4-detail.module').then( m => m.Vaccine4DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vaccine4RoutingModule { }
