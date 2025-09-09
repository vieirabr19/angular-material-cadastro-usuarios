import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IUser } from '../../interfaces/user/user.interface';

interface UserDialogData {
  originalUser: IUser;
  updateUser: IUser;
}

@Component({
  selector: 'app-user-before-and-after-dialog',
  templateUrl: './user-before-and-after-dialog.component.html',
  styleUrl: './user-before-and-after-dialog.component.scss'
})
export class UserBeforeAndAfterDialogComponent {
  originalUser: IUser;
  updateUser: IUser;

  constructor(
    public dialogRef: MatDialogRef<UserBeforeAndAfterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDialogData
  ){
    this.originalUser = data.originalUser;
    this.updateUser = data.updateUser;
  }
}
