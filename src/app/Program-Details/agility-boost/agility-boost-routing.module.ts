import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgilityBoostPage } from './agility-boost.page';

const routes: Routes = [
  {
    path: '',
    component: AgilityBoostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgilityBoostPageRoutingModule {}
