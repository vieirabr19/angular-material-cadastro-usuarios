import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const arrModules = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressBarModule,
];

@NgModule({
  imports: arrModules,
  exports: arrModules,
})
export class AngularMaterialModule { }
