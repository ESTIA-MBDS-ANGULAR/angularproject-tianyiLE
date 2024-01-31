import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users= [
    {
      nom: 'Peter',
      role: 'user',
      password: '123456'
    },
    {
      nom: 'Peter',
      role: 'admin',
      password: '12345678'
    }
  ]

  loggedIn = false

  constructor() { }

  logIn() {
    this.loggedIn = true
  }

  logOut() {
    this.loggedIn = false
  }

  isAdmin() {
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn)
      }
    )
    return isUserAdmin
  }
}
