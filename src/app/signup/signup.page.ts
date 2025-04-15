import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { IonHeader, IonToolbar, IonNote, IonItem, IonInput, IonTitle, IonContent, IonLabel, IonButton, IonSpinner } from "@ionic/angular/standalone";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonHeader, CommonModule,IonToolbar, IonNote,IonicModule, IonItem, IonInput, IonTitle, IonContent, IonLabel, IonButton, IonSpinner,ReactiveFormsModule, FormsModule]  
})
export class SignupPage {
  signupForm: FormGroup;
  isLoading = false;

  constructor(
  private fb: FormBuilder,
  private alertCtrl: AlertController,
  private authService: AuthService,
  private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  async signup() {
    if (this.signupForm.invalid) return;
  
    this.isLoading = true;
  
    try {
      await this.authService.signup(this.signupForm.value);
      this.router.navigate(['/home']);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      this.showAlert('Signup Failed', errorMessage);
    } finally {
      this.isLoading = false;
    }
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}