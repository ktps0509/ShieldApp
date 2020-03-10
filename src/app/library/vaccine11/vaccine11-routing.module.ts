import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vaccine11-list/vaccine11-list.module').then( m => m.Vaccine11ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vaccine11-detail/vaccine11-detail.module').then( m => m.Vaccine11DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vaccine11RoutingModule { }
