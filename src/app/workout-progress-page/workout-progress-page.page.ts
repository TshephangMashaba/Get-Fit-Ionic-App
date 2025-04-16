import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-workout-progress-page',
  templateUrl: './workout-progress-page.page.html',
  styleUrls: ['./workout-progress-page.page.scss'],
  standalone: false
})
export class WorkoutProgressPagePage implements OnInit {

  agilityBoostCompleted: boolean = false;
  beastModeCompleted: boolean = false;
  recoveryFlowCompleted: boolean = false;

  private _storage: Storage | null = null;
  private storageKey: string = '';

  constructor(
    private storageService: Storage,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.initStorage();
    const currentUser = await this.authService.getCurrentUser();

    if (currentUser) {
      this.storageKey = `completedPrograms_${currentUser.username}`;
      const completedList: string[] = (await this._storage?.get(this.storageKey)) || [];

      this.agilityBoostCompleted = completedList.includes('agility-boost');
      this.beastModeCompleted = completedList.includes('beast-mode');
      this.recoveryFlowCompleted = completedList.includes('recovery-flow');
    }
  }

  async initStorage() {
    this._storage = await this.storageService.create();
  }
}
