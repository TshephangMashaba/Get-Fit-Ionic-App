import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeastModeStatusPageRoutingModule } from './beast-mode-status-routing.module';

import { BeastModeStatusPage } from './beast-mode-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeastModeStatusPageRoutingModule
  ],
  declarations: [BeastModeStatusPage]
})
export class BeastModeStatusPageModule {}
