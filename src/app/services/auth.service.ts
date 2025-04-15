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
  private authState = new BehaviorSubject<boolean>(false);

  constructor(private storage: Storage, private router: Router) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
    this.checkAuth();
  }

  private async checkAuth() {
    const user = await this._storage?.get('currentUser');
    this.authState.next(!!user);
  }

  // Signup new user
  async signup(userData: {email: string, password: string, name: string}) {
    // Get existing users or empty array
    const users = (await this._storage?.get('users')) || [];
    
    // Check if email already exists
    const userExists = users.some((user: any) => user.email === userData.email);
    if (userExists) {
      throw new Error('Email already exists');
    }

    // Add new user (NOTE: In real app, hash password first!)
    users.push(userData);
    await this._storage?.set('users', users);
    
    // Set as logged in user
    await this._storage?.set('currentUser', userData);
    this.authState.next(true);
    return true;
  }

  // Login existing user
  async login(credentials: {email: string, password: string}) {
    const users = (await this._storage?.get('users')) || [];
    const user = users.find((u: any) => 
      u.email === credentials.email && 
      u.password === credentials.password // In real app, compare hashed passwords
    );

    if (!user) {
      throw new Error('Invalid email or password');
    }

    await this._storage?.set('currentUser', user);
    this.authState.next(true);
    return true;
  }

  // Logout current user
  async logout() {
    await this._storage?.remove('currentUser');
    this.authState.next(false);
    this.router.navigate(['/login']);
  }

  // Get current user data
  async getCurrentUser() {
    return await this._storage?.get('currentUser');
  }

  // Check if user is authenticated
  isAuthenticated() {
    return this.authState.value;
  }

  // Auth state observable
  getAuthState() {
    return this.authState.asObservable();
  }
}