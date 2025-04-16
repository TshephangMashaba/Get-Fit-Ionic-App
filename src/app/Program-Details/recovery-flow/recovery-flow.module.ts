import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoveryFlowPageRoutingModule } from './recovery-flow-routing.module';

import { RecoveryFlowPage } from './recovery-flow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecoveryFlowPageRoutingModule
  ],
  declarations: [RecoveryFlowPage]
})
export class RecoveryFlowPageModule {}
