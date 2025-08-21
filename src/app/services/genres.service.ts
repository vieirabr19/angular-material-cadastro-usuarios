import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TGenresListResponse } from '../types/genres-list-reponse.type';
import { GenresListMock } from '../mocks/genres-list.mock';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  getGenres(): Observable<TGenresListResponse> { 
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(GenresListMock);
        observer.complete();
      }, 3000);
    });
  }
}
