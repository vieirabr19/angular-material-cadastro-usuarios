import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { TGenresListResponse } from '../../types/genres-list-reponse.type';
import { TStatesListResponse } from '../../types/states-list-reponse.type';
import { IUser } from '../../interfaces/user/user.interface';

import { getPasswordStrength, PasswordStrength } from '../../utils/password-strength.util';
import { convertDatePtBrToDateObj } from '../../utils/convert-date-pt-br-to-date-obj.util';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToDatePtBr } from '../../utils/convert-date-obj-to-date-pt-br.util';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit, OnChanges {
  passwordStrength: PasswordStrength = getPasswordStrength('');
  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;

  @Input() userSelected: IUser = {} as IUser;
  @Input() genresList: TGenresListResponse = [];
  @Input() statesList: TStatesListResponse = [];

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    const changeUserSelected = changes['userSelected'];

    if (changeUserSelected) {
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatepicker(this.userSelected.birthDate)
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrength = getPasswordStrength(password);
  }

  onDateChange(date: Date) {
    this.userSelected.birthDate = convertDateObjToDatePtBr(date);
  }

  private setMinAndMaxDate() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 100, 0, 1);
    this.maxDate = new Date(currentYear + 0, 11, 31);
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertDatePtBrToDateObj(birthDate);
  }
}
