import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgilityBoostStatusPage } from './agility-boost-status.page';

const routes: Routes = [
  {
    path: '',
    component: AgilityBoostStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgilityBoostStatusPageRoutingModule {}
