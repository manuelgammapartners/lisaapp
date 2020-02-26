import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  SESSION_KEY = 'session'
  constructor() { }


  cleanLocalStorage() {
    localStorage.clear()
  }

  /*
    SET
  */
  storeSession(session) {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
  }

  /*
    GET
  */
  getSession() {
    return JSON.parse(localStorage.getItem(this.SESSION_KEY));
  }
}
