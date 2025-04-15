import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonHeader, IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';
import { SignupPage } from './signup.page';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignupPageRoutingModule,
    IonicModule.forRoot(),
    RouterModule
  ],
  declarations: [SignupPage],

})
export class SignupPageModule {}