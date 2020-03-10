import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vaccine3-list/vaccine3-list.module').then( m => m.Vaccine3ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vaccine3-detail/vaccine3-detail.module').then( m => m.Vaccine3DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vaccine3RoutingModule { }
