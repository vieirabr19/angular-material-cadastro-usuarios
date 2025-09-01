import { Directive, Input, DoCheck } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Directive({
  selector: '[appMusicsFavoriteDisabled]',
  standalone: false
})
export class MusicsFavoriteDisabledDirective implements DoCheck {
  @Input('appMusicsFavoriteDisabled') musics: { isFavorite: boolean }[] = [];

  constructor(private checkbox: MatCheckbox, private ngModel: NgModel) {}

  ngDoCheck() {
    if (!this.musics || !this.ngModel) return;

    const current = !!this.ngModel.model;
    const hasAnyFavorite = this.musics.some(f => f.isFavorite);
    const disabled = hasAnyFavorite && !current;

    this.checkbox.disabled = disabled;
  }
}
