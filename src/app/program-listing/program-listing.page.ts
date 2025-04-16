import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-program-listing',
  templateUrl: './program-listing.page.html',
  styleUrls: ['./program-listing.page.scss'],
  standalone: false
})
export class ProgramListingPage {

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
