import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoveryFlowStatusPage } from './recovery-flow-status.page';

const routes: Routes = [
  {
    path: '',
    component: RecoveryFlowStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoveryFlowStatusPageRoutingModule {}
