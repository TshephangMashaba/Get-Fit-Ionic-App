import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeastModePageRoutingModule } from './beast-mode-routing.module';

import { BeastModePage } from './beast-mode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeastModePageRoutingModule
  ],
  declarations: [BeastModePage]
})
export class BeastModePageModule {}
