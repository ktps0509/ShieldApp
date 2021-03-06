import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vaccine9-list/vaccine9-list.module').then( m => m.Vaccine9ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vaccine9-detail/vaccine9-detail.module').then( m => m.Vaccine9DetailPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Vaccine9RoutingModule { }
