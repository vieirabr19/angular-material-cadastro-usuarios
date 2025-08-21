import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TGenresResponse } from '../types/genres-reponse.type';
import { GenresListMock } from '../mocks/genres-list.mock';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  getGenres(): Observable<TGenresResponse> { 
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(GenresListMock);
        observer.complete();
      }, 3000);
    });
  }
}
