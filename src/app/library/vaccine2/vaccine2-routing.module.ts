import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vaccine2-list/vaccine2-list.module').then( m => m.Vaccine2ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vaccine2-detail/vaccine2-detail.module').then( m => m.Vaccine2DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vaccine2RoutingModule { }
