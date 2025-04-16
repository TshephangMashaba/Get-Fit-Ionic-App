import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoveryFlowStatusPageRoutingModule } from './recovery-flow-status-routing.module';

import { RecoveryFlowStatusPage } from './recovery-flow-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoveryFlowStatusPageRoutingModule
  ],
  declarations: [RecoveryFlowStatusPage]
})
export class RecoveryFlowStatusPageModule {}
