import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TStatesListResponse } from '../types/states-list-reponse.type';
import { BrazilianStatesListMock } from '../mocks/brazilian-states-list.mock';

@Injectable({
  providedIn: 'root'
})
export class BrazilianStatesService {

  getStates(): Observable<TStatesListResponse> { 
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(BrazilianStatesListMock);
        observer.complete();
      }, 3000);
    });
  }
}
