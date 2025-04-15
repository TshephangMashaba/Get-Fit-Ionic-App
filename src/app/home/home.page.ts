import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { logOutOutline, personCircleOutline, mailOutline } from 'ionicons/icons';
import { IonButtons } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,

})
export class HomePage {
  username: string | null = null;

  constructor(private authService: AuthService) {
    this.loadUser();
  }

  async loadUser() {
    const user = await this.authService.getCurrentUser();
    this.username = user ? user.username : null;
  }

  logout() {
    this.authService.logout();
  }
}