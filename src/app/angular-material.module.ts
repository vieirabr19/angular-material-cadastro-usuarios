import { NgModule } from '@angular/core';

import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

const arrModules = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressBarModule,
  MatDatepickerModule
];

@NgModule({
  imports: arrModules,
  exports: arrModules,
  providers: [
    provideNativeDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
})
export class AngularMaterialModule { }
