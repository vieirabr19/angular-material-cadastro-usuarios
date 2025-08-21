import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TUserPlaceholderResponse } from '../types/users-placeholder-reponse.type';

@Injectable({
  providedIn: 'root'
})
export class UsersPlaceholderService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getUsers(): Observable<TUserPlaceholderResponse>{
    return this._http.get<TUserPlaceholderResponse>('https://jsonplaceholder.typicode.com/users');
  }
}
