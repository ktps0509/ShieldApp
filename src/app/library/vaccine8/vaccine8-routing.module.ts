import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vaccine8-list/vaccine8-list.module').then( m => m.Vaccine8ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vaccine8-detail/vaccine8-detail.module').then( m => m.Vaccine8DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vaccine8RoutingModule { }
