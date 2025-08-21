import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TUserPlaceholderListResponse } from '../types/users-list-placeholder-response.type';

@Injectable({
  providedIn: 'root'
})
export class UsersPlaceholderService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getUsers(): Observable<TUserPlaceholderListResponse>{
    return this._http.get<TUserPlaceholderListResponse>('https://jsonplaceholder.typicode.com/users');
  }
}
