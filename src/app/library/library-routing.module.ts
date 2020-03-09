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
      },
      {
        path: 'vacine2',
        loadChildren: () =>
          import('./vaccine2/vaccine2-routing.module').then(m => m.Vaccine2RoutingModule)
      },
      {
        path: 'vacine3',
        loadChildren: () =>
          import('./vaccine3/vaccine3-routing.module').then(m => m.Vaccine3RoutingModule)
      },
      {
        path: 'vacine4',
        loadChildren: () =>
          import('./vaccine4/vaccine4-routing.module').then(m => m.Vaccine4RoutingModule)
      },
      {
        path: 'vacine5',
        loadChildren: () =>
          import('./vaccine5/vaccine5-routing.module').then(m => m.Vaccine5RoutingModule)
      },
      {
        path: 'vacine6',
        loadChildren: () =>
          import('./vaccine6/vaccine6-routing.module').then(m => m.Vaccine6RoutingModule)
      },
      {
        path: 'vacine7',
        loadChildren: () =>
          import('./vaccine7/vaccine7-routing.module').then(m => m.Vaccine7RoutingModule)
      },
      {
        path: 'vacine8',
        loadChildren: () =>
          import('./vaccine8/vaccine8-routing.module').then(m => m.Vaccine8RoutingModule)
      },
      {
        path: 'vacine9',
        loadChildren: () =>
          import('./vaccine9/vaccine9-routing.module').then(m => m.Vaccine9RoutingModule)
      },
      {
        path: 'vacine10',
        loadChildren: () =>
          import('./vaccine10/vaccine10-routing.module').then(m => m.Vaccine10RoutingModule)
      },
      {
        path: 'vacine11',
        loadChildren: () =>
          import('./vaccine11/vaccine11-routing.module').then(m => m.Vaccine11RoutingModule)
      },
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
