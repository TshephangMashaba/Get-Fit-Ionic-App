import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgilityBoostStatusPageRoutingModule } from './agility-boost-status-routing.module';

import { AgilityBoostStatusPage } from './agility-boost-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgilityBoostStatusPageRoutingModule
  ],
  declarations: [AgilityBoostStatusPage]
})
export class AgilityBoostStatusPageModule {}
