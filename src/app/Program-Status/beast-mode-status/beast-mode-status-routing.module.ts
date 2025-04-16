import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeastModeStatusPage } from './beast-mode-status.page';

const routes: Routes = [
  {
    path: '',
    component: BeastModeStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeastModeStatusPageRoutingModule {}
