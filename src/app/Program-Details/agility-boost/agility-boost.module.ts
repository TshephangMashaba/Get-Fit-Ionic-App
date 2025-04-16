import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgilityBoostPageRoutingModule } from './agility-boost-routing.module';

import { AgilityBoostPage } from './agility-boost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgilityBoostPageRoutingModule
  ],
  declarations: [AgilityBoostPage]
})
export class AgilityBoostPageModule {}
