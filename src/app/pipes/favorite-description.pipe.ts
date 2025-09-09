import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoriteDescription'
})
export class FavoriteDescriptionPipe implements PipeTransform {

  transform(favorite: boolean): string {
    return favorite ? 'Sim' : 'Não';
  }

}
