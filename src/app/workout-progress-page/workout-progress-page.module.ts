import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutProgressPagePageRoutingModule } from './workout-progress-page-routing.module';

import { WorkoutProgressPagePage } from './workout-progress-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutProgressPagePageRoutingModule
  ],
  declarations: [WorkoutProgressPagePage]
})
export class WorkoutProgressPagePageModule {}
