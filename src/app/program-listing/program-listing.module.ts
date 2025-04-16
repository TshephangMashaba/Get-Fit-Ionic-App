import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramListingPageRoutingModule } from './program-listing-routing.module';

import { ProgramListingPage } from './program-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramListingPageRoutingModule
  ],
  declarations: [ProgramListingPage]
})
export class ProgramListingPageModule {}
