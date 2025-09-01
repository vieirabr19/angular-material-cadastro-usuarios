import { TGenresListResponse } from "../../types/genres-list-reponse.type";

export interface IMusic {
  title: string;
  band: string;
  genre: number;
  isFavorite: boolean;
}

export interface IMusicForm extends IMusic {
  filteredGenresList?: TGenresListResponse;
}