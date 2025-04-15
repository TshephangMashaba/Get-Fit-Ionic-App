import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, from, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage, private router: Router) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async signUp(username: string, password: string): Promise<boolean> {
    const users = await this._storage?.get('users') || [];
    const userExists = users.some((user: any) => user.username === username);
    
    if (userExists) {
      return false;
    }
    
    users.push({ username, password });
    await this._storage?.set('users', users);
    await this._storage?.set('currentUser', username);
    return true;
  }

  async login(username: string, password: string): Promise<boolean> {
    const users = await this._storage?.get('users') || [];
    const user = users.find((u: any) => u.username === username && u.password === password);
    
    if (user) {
      await this._storage?.set('currentUser', username);
      return true;
    }
    return false;
  }

  async logout() {
    await this._storage?.remove('currentUser');
    this.router.navigate(['/login']);
  }

  async isLoggedIn(): Promise<boolean> {
    const username = await this._storage?.get('currentUser');
    return !!username;
  }

  async getCurrentUser(): Promise<string | null> {
    return await this._storage?.get('currentUser');
  }

}