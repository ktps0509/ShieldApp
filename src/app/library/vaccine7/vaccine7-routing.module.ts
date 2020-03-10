import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vaccine7-list/vaccine7-list.module').then( m => m.Vaccine7ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vaccine7-detail/vaccine7-detail.module').then( m => m.Vaccine7DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vaccine7RoutingModule { }
