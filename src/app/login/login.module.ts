import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
 declarations: [LoginPage]

})
export class LoginPageModule {}