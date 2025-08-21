import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';

import { TUserResponse } from './types/users-reponse.type';
import { TGenresResponse } from './types/genres-reponse.type';
import { TBrazilianStatesResponse } from './types/brazilian-states-reponse.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: TUserResponse = [];
  genresList: TGenresResponse = [];
  statesList: TBrazilianStatesResponse = [];

  constructor(
    private readonly _userService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStatesService,
  ){}

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getBrazilianStates();
  }
  
  private getUsers() {
    this._userService.getUsers().subscribe(users => this.usersList = users);
  }
  
  private getGenres() {
    this._genresService.getGenres().subscribe(genres => this.genresList = genres);
  }

  private getBrazilianStates() {
    this._brazilianStatesService.getStates().subscribe(states => this.statesList = states);
  }
}
