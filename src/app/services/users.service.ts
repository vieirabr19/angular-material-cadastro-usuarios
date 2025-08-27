import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TUserListResponse } from '../types/users-list-reponse.type';
import { UserListMock } from '../mocks/users-list.mock';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }

  getUsers(): Observable<TUserListResponse>{
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(UserListMock);
        observer.complete();
      }, 300);
    });
  }
}
