import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vaccine10-list/vaccine10-list.module').then( m => m.Vaccine10ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vaccine10-detail/vaccine10-detail.module').then( m => m.Vaccine10DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vaccine10RoutingModule { }
