import { Injectable } from '@angular/core';
import {User} from "./shop/users/User";
import {Product} from "./shop/products/Product";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() {
  }

  private users: User[] = [
    {id: 1, login: 'Wiola', email: 'wizurek@wszib.edu.pl', age: 33, country: 'Polska', active: true},
    {id: 1, login: 'Wioleta', email: 'wioletaz@student.wszib.edu.pl', age: 34, country: 'Niemcy', active: false}
  ];
  getUser(id: number) {
    const productIndex = this.users.findIndex(p => p.id === id);
    return {...this.users[productIndex]};
  }

  saveUser(user: User) {

    if (user.id) {
      const productIndex = this.users.findIndex(p => p.id === user.id);
      this.users[productIndex] = user;
    } else {
      user.id = this.idCount;
      this.users.push(user);
      this.idCount++;
    }

  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  removeProduct(id: number) {
    const productIndex = this.users.findIndex(p => p.id === id);
    this.users.splice(productIndex, 1);
  }
  private idCount: number = 3;

  removeUser(id: number) {
    const productIndex = this.users.findIndex(p => p.id === id);
    this.users.splice(productIndex, 1);
  }
}
