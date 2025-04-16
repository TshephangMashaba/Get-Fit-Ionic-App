import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutProgressPagePage } from './workout-progress-page.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutProgressPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutProgressPagePageRoutingModule {}
