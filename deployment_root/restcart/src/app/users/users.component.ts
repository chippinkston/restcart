import { Component, OnInit } from '@angular/core';
import {User} from "../classes/user";
//import {USERS} from "./mock-users";
import {UserService} from "../user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})


export class UsersComponent implements OnInit {

  selectedUser: User;
  users: User[];

  constructor(private userService: UserService) { }

  // getUsers(): void {
  //   this.users = this.userService.getUsers();
  // }

  getUsers(): void {
    console.log('~~~ call to load users ~~~');
    this.userService.getUsers()
      .subscribe(users => this.users = users);
    console.log('~~~ users returned ~~~');
  }

  ngOnInit() {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
