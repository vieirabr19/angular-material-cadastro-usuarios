import { Component, OnInit } from '@angular/core';

import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { StatesService } from './services/states.service';

import { TUserListResponse } from './types/users-list-reponse.type';
import { TGenresListResponse } from './types/genres-list-reponse.type';
import { TStatesListResponse } from './types/states-list-reponse.type';
import { IUser } from './interfaces/user/user.interface';
import { IMusic } from './interfaces/user/music.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  userSelectedIndex: number | undefined;  
  userSelected: IUser = {} as IUser;
  usersList: TUserListResponse = [];
  genresList: TGenresListResponse = [];
  statesList: TStatesListResponse = [];

  constructor(
    private readonly _userService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _statesService: StatesService,
  ){}

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  onUserSelected(userIndex: number){
    const userFound = this.usersList[userIndex];

    if(userFound){
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound);
    }
  }

  onSaveUser() {
    const payload = {
      ...this.userSelected,
      musics: this.userSelected.musics.map(({filteredGenresList, ...music}): IMusic => music)
    };

    console.log('usersList:', this.usersList);    
    console.log('userSelected:', this.userSelected);
    console.log('payload:', payload);
  }
  
  private getUsers() {
    this._userService.getUsers().subscribe(users => this.usersList = users);
  }
  
  private getGenres() {
    this._genresService.getGenres().subscribe(genres => this.genresList = genres);
  }

  private getStates() {
    this._statesService.getStates().subscribe(states => this.statesList = states);
  }
}