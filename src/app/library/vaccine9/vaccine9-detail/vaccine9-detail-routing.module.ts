import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vaccine9DetailPage } from './vaccine9-detail.page';

const routes: Routes = [
  {
    path: '',
    component: Vaccine9DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vaccine9DetailPageRoutingModule {}
