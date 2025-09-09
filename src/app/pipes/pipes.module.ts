import { NgModule } from "@angular/core";

import { GenreDescriptionPipe } from './genre-description.pipe';
import { FavoriteDescriptionPipe } from './favorite-description.pipe';
import { StateDescriptionPipe } from './state-description.pipe';

@NgModule({
  declarations: [
    GenreDescriptionPipe,
    FavoriteDescriptionPipe,
    StateDescriptionPipe
  ],
  exports: [
    GenreDescriptionPipe,
    FavoriteDescriptionPipe,
    StateDescriptionPipe
  ]
})
export class PipesModule { }