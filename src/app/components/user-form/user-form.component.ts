import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { TGenresListResponse } from '../../types/genres-list-reponse.type';
import { TStatesListResponse } from '../../types/states-list-reponse.type';
import { IUser } from '../../interfaces/user/user-interface';

import { getPasswordStrength, PasswordStrength } from '../../utils/password-strength.util';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges {
  passwordStrength: PasswordStrength = getPasswordStrength('');

  @Input() userSelected: IUser = {} as IUser;
  @Input() genresList: TGenresListResponse = [];
  @Input() statesList: TStatesListResponse = [];

  ngOnChanges(changes: SimpleChanges) {
    const changeUserSelected = changes['userSelected'];
    changeUserSelected && this.onPasswordChange(this.userSelected.password);
  }

  onPasswordChange(password: string){
    this.passwordStrength = getPasswordStrength(password);
  }
}
