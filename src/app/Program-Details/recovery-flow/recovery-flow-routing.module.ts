import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoveryFlowPage } from './recovery-flow.page';

const routes: Routes = [
  {
    path: '',
    component: RecoveryFlowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoveryFlowPageRoutingModule {}
