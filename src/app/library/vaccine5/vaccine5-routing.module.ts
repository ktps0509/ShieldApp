import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vaccine5-list/vaccine5-list.module').then( m => m.Vaccine5ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vaccine5-detail/vaccine5-detail.module').then( m => m.Vaccine5DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vaccine5RoutingModule { }
