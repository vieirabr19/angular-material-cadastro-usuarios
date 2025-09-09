import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { StatesService } from './services/states.service';

import { TUserListResponse } from './types/users-list-reponse.type';
import { TGenresListResponse } from './types/genres-list-reponse.type';
import { TStatesListResponse } from './types/states-list-reponse.type';
import { IUser } from './interfaces/user/user.interface';
import { IMusic } from './interfaces/user/music.interface';

import { UserBeforeAndAfterDialogComponent } from './components/user-before-and-after-dialog/user-before-and-after-dialog.component';

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
    private dialog: MatDialog
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

  onFormSubmited() {
    if(!this.userSelectedIndex && this.userSelectedIndex !== 0) return;

    const originalUser = this.usersList[this.userSelectedIndex];
    const updateUser = {
      ...this.userSelected,
      musics: this.userSelected.musics.map(({filteredGenresList, ...music}): IMusic => music)
    };

    this.userBeforeAndAfterDialog(originalUser, updateUser, this.userSelectedIndex);
  }

  private userBeforeAndAfterDialog(originalUser: IUser, updateUser: IUser, userSelectedIndex: number) {
    const dialogRef = this.dialog.open(UserBeforeAndAfterDialogComponent, {
      minWidth: 700,
      data: { originalUser, updateUser }
    });

    dialogRef.afterClosed().subscribe(result => {
      result && this.confirmUserUpdate(updateUser, userSelectedIndex);
    });
  }

  private confirmUserUpdate(updateUser: IUser, userSelectedIndex: number) {
    this.usersList[userSelectedIndex] = structuredClone(updateUser);
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