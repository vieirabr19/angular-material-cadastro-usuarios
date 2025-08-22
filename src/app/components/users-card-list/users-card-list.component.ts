import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TUserListResponse } from '../../types/users-list-reponse.type';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrl: './users-card-list.component.scss'
})
export class UsersCardListComponent {
  @Input() usersList: TUserListResponse = [];
  @Output('userSelected') userSelectedEmitt = new EventEmitter<number>()

  trackByUser(index: number, user: any): number | string {
    return user.id ?? index;
  }

  onUserSelected(userIndex: number){
    this.userSelectedEmitt.emit(userIndex);
  }
}
