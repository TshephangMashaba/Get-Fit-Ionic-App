import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { IonHeader, IonNote, IonToolbar, IonInput } from "@ionic/angular/standalone";
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  loginForm: FormGroup;
  isLoginMode = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.loginForm = this.fb.group({
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit() {
    if (this.loginForm.invalid) return;

    const { username, email, password } = this.loginForm.value;

    try {
      if (this.isLoginMode) {
        const success = await this.authService.login(email, password);
        if (success) {
          this.router.navigate(['/home']);
        } else {
          this.showAlert('Login Failed', 'Invalid credentials');
        }
      } else {
        const success = await this.authService.signUp(username, email, password);
        if (success) {
          this.router.navigate(['/home']);
        } else {
          this.showAlert('Sign Up Failed', 'Username already exists');
        }
      }
    } catch (error) {
      this.showAlert('Error', 'An error occurred. Please try again.');
    }
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  
    if (this.isLoginMode) {
      this.loginForm.removeControl('username');
    } else {
      this.loginForm.addControl(
        'username',
        this.fb.control('', [Validators.required, Validators.minLength(3)])
      );
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