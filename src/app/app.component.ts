import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { IonApp } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    await this.platform.ready();
    const isLoggedIn = await this.authService.isLoggedIn();
    this.router.navigate([isLoggedIn ? '/home' : '/login']);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // You can add splash screen hide calls here if needed
    });
  }
}