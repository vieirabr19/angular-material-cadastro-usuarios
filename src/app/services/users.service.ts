import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TUserResponse } from '../types/users-reponse.type';
import { UserListMock } from '../mocks/users-list.mock';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }

  getUsers(): Observable<TUserResponse>{
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(UserListMock);
        observer.complete();
      }, 3000);
    });
  }
}
