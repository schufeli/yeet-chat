import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Save username to localstorage
   * @param username Username
   */
  set(username: string) {
    window.localStorage.setItem('username', username)
  }

  /**
   * Get username from localstorage
   */
  get() {
    return window.localStorage.getItem('username');
  }

  /**
   * Check if username is in localstorage
   */
  loggedIn() {
    if (window.localStorage.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * Remove username from localstorage
   */
  logout() {
    window.localStorage.removeItem('username');
  }
}
