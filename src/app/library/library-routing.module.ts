import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryPage } from './library.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryPage
  },
  {
    path: '',
    children: [
      {
        path: 'vacine1',
        loadChildren: () =>
          import('./vacine1/vacine1-routing.module').then(m => m.Vacine1PageRoutingModule)
      }
    ]
  },
  // {
  //   path: 'library-list',
  //   loadChildren: () => import('./library-list/library-list.module').then( m => m.LibraryListPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryPageRoutingModule {}
