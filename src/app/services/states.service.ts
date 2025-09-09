import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TStatesListResponse } from '../types/states-list-reponse.type';
import { BrazilianStatesListMock } from '../mocks/brazilian-states-list.mock';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  getStates(): Observable<TStatesListResponse> { 
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(BrazilianStatesListMock);
        observer.complete();
      }, 300);
    });
  }

  getStateDescription(stateId: number): string {
    const stateDescription = BrazilianStatesListMock.find(state => state.id === stateId)?.descricaoContraida;
    return stateDescription || '';
  }
}
