import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramListingPage } from './program-listing.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramListingPageRoutingModule {}
