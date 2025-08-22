import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';

import { TUserListResponse } from './types/users-list-reponse.type';
import { TGenresListResponse } from './types/genres-list-reponse.type';
import { TStatesListResponse } from './types/states-list-reponse.type';
import { IUser } from './interfaces/user/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userSelected: IUser = {} as IUser;
  userSelectedIndex: number | undefined;

  usersList: TUserListResponse = [];
  genresList: TGenresListResponse = [];
  statesList: TStatesListResponse = [];

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

  onUserSelected(userIndex: number){
    const userFound = this.usersList[userIndex];

    if(userFound){
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);
    }
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

  listaOriginal(){
    console.log('usersList:', this.usersList);
    console.log('userSelected:', this.userSelected);
  }
}
