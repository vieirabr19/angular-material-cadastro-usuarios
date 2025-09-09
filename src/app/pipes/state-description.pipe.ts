import { Pipe, PipeTransform } from '@angular/core';
import { StatesService } from '../services/states.service';

@Pipe({
  name: 'stateDescription'
})
export class StateDescriptionPipe implements PipeTransform {
  constructor(private readonly _statesService: StatesService){}

  transform(stateId: number): string {
    return this._statesService.getStateDescription(stateId);
  }
}
