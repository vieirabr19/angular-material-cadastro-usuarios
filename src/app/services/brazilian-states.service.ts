import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TBrazilianStatesResponse } from '../types/brazilian-states-reponse.type';
import { BrazilianStatesListMock } from '../mocks/brazilian-states-list.mock';

@Injectable({
  providedIn: 'root'
})
export class BrazilianStatesService {

  getStates(): Observable<TBrazilianStatesResponse> { 
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(BrazilianStatesListMock);
        observer.complete();
      }, 3000);
    });
  }
}
