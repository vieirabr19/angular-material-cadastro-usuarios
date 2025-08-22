import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { TUserListResponse } from '../../types/users-list-reponse.type';
import { TGenresListResponse } from '../../types/genres-list-reponse.type';
import { TStatesListResponse } from '../../types/states-list-reponse.type';
import { IUser } from '../../interfaces/user/user-interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() userSelected: IUser = {} as IUser;
  @Input() genresList: TGenresListResponse = [];
  @Input() statesList: TStatesListResponse = [];

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }
}
