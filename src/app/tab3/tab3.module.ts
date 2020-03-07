import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ModalSelectVacPage } from '../modal/modal-select-vac/modal-select-vac.page';
import { ModalSelectTimevacPage } from '../modal/modal-select-timevac/modal-select-timevac.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [Tab3Page],
  entryComponents : [ModalSelectVacPage, ModalSelectTimevacPage]
})
export class Tab3PageModule {}
