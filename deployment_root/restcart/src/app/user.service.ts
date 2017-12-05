import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from'rxjs/observable/of'
import { User } from "./classes/user";
import  { USERS } from "./users/mock-users"
import { MessageService } from './message.service';

@Injectable()
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

}
