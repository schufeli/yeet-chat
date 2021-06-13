import { Injectable } from '@angular/core';
import { User } from '../classes/user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new User();

  constructor() { 
    
  }

  /**
   * Initialize User
   * @param username Username
   */
  set(username: string) {
    this.user.username = username;
  }

  get() {
    return this.user;
  }
}
