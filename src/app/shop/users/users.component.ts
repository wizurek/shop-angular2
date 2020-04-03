import { Component, OnInit } from '@angular/core';


import {Product} from '../products/Product';
import {User} from './User';
import {UserStorageService} from '../../user-storage.service';
import {HttpClientService} from '../../http-client.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private httpClient: HttpClientService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  users: User[] = [];

  getUsers() {
    this.httpClient.getUsers().subscribe(users => this.users = users);


  }

  removeUser(id: number){
    this.httpClient.removeUser(id).subscribe(r => {
      this.getUsers();
    });
  }

}
