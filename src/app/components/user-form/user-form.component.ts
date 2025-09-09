import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TGenresListResponse } from '../../types/genres-list-reponse.type';
import { TStatesListResponse } from '../../types/states-list-reponse.type';
import { IUser } from '../../interfaces/user/user.interface';
import { IMusicForm } from '../../interfaces/user/music.interface';

import { getPasswordStrength, PasswordStrength } from '../../utils/password-strength.util';
import { convertDatePtBrToDateObj } from '../../utils/convert-date-pt-br-to-date-obj.util';
import { convertDateObjToDatePtBr } from '../../utils/convert-date-obj-to-date-pt-br.util';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit, OnChanges {
  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;

  passwordStrength: PasswordStrength = getPasswordStrength('');
  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];
  genresListFiltered: TGenresListResponse = [];

  @Input() userSelected: IUser = {} as IUser;
  @Input() genresList: TGenresListResponse = [];
  @Input() statesList: TStatesListResponse = [];

  @Output('onFormSubmited') onFormSubmitedEmitt = new EventEmitter<void>();

  constructor( private _el: ElementRef ) {}

  ngOnInit() {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    const changeUserSelected = changes['userSelected'];
    const isUserSelectedLength = Object.keys(this.userSelected).length;

    if (changeUserSelected && isUserSelectedLength) {
      this.userSelected.musics.forEach(music => music.filteredGenresList = [...this.genresList]);

      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
    }
  }

  onDisplayNameGenre(genreId: number): string {
    const genreFound = this.genresList.find(genre => genre.id === genreId);
    return genreFound ? genreFound?.description : '';
  }

  onFilterGenres(text: string, music: IMusicForm) {
    if (typeof text === 'number') return;

    const searchTerm = (text || '').toLowerCase().trim();
    music.filteredGenresList = this.genresList.filter(genre => genre.description.toLowerCase().includes(searchTerm));
  }

  onGenreSelected(genreId: number, music: IMusicForm) {
    music.genre = genreId;
  }

  onPasswordChange(password: string) {
    this.passwordStrength = getPasswordStrength(password);
  }

  onDateChange(date: Date) {
    this.userSelected.birthDate = convertDateObjToDatePtBr(date);
  }

  onSalveUser(form: NgForm) {
    if(form.invalid) return this.onFocusControlInvalid(form);

    this.onFormSubmitedEmitt.emit();
  }

  onFocusControlInvalid(form: NgForm) {
    const invalidControlName = Object.keys(form.controls).find(name => form.controls[name]?.invalid);
    if(!invalidControlName) return;

    const invalidControl = this._el.nativeElement.querySelector(`[name="${invalidControlName}"]`) as HTMLElement | null;
    invalidControl?.focus();
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
