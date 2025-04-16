import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-beast-mode-status',
  templateUrl: './beast-mode-status.page.html',
  styleUrls: ['./beast-mode-status.page.scss'],
  standalone: false
})
export class BeastModeStatusPage implements OnInit {
  isCompleted: boolean = false;
  private storageKey: string = '';
  private _storage: Storage | null = null;

  constructor(
    private storageService: Storage,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.initStorage(); // Initialize storage
    const currentUser = await this.authService.getCurrentUser();

    if (currentUser) {
      this.storageKey = `completedPrograms_${currentUser.username}`;
      const list = (await this._storage?.get(this.storageKey)) || [];
      this.isCompleted = list.includes('beast-mode');
    }
  }

  async initStorage() {
    this._storage = await this.storageService.create();
  }

  async resetProgress() {
    if (this._storage && this.storageKey) {
      let list = (await this._storage.get(this.storageKey)) || [];
      list = list.filter((p: string) => p !== 'beast-mode');
      await this._storage.set(this.storageKey, list);
      this.isCompleted = false;
    }
  }
}
