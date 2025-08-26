import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import { getPasswordStrength } from '../utils/password-strength.util';

@Directive({
  selector: '[appPasswordStrengthValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: forwardRef(() => PasswordStrengthValidatorDirective),
      multi: true
    }
  ]
})
export class PasswordStrengthValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if(control && !control.value) return null;

    const strength  = getPasswordStrength(control.value);

    return strength.score < 3
      ? { invalidPasswordStrength: { score: strength.score, label: strength.label } }
      : null;
  }
}