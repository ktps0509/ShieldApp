import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'list',
    loadChildren: () => import('./vacine1-list/vacine1-list.module').then( m => m.Vacine1ListPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./vacine1-detail/vacine1-detail.module').then( m => m.Vacine1DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vacine1PageRoutingModule {}
