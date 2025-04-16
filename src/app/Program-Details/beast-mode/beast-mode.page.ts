import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-beast-mode',
  templateUrl: './beast-mode.page.html',
  styleUrls: ['./beast-mode.page.scss'],
  standalone: false
})
export class BeastModePage implements OnInit {
  private _storage: Storage | null = null;

  constructor(
    private storage: Storage,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    this._storage = await this.storage.create();
  }

  async markAsCompleted() {
    const currentUser = await this.authService.getCurrentUser();
    if (!currentUser) {
      this.showAlert('Not Logged In', 'Please log in to track your progress.');
      return;
    }

    const username = currentUser.username;
    const key = `completedPrograms_${username}`;

    const existing = (await this._storage?.get(key)) || [];

    if (!existing.includes('beast-mode')) {
      existing.push('beast-mode');
      await this._storage?.set(key, existing);
    }

    this.showAlert('Success', 'Beast Mode marked as completed!');
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
