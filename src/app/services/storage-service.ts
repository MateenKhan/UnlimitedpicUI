import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  isUserLoggedIn = false;

  storeUser(user: string) {
    localStorage.setItem("user", user);
    this.isUserLoggedIn = true;
  }

  getUserName():string{
    return localStorage.getItem("user");
  }

  deleteUser() {
    localStorage.removeItem("user");
    this.isUserLoggedIn = false;
  }

  // isUserLoggedIn():boolean {
  //   if (localStorage.user !== undefined && localStorage.user !== null && localStorage.user.trim().length > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
