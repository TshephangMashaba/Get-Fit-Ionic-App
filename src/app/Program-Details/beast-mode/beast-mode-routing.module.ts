import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeastModePage } from './beast-mode.page';

const routes: Routes = [
  {
    path: '',
    component: BeastModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeastModePageRoutingModule {}
