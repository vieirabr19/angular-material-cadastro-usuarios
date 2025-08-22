import { Directive, forwardRef, Input } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";

import { UsersPlaceholderService } from "../services/users-placeholder.service";

@Directive({
  selector: '[appCredentialsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CredentialsValidatorDirective),
      multi: true
    }
  ]
})
export class CredentialsValidatorDirective implements AsyncValidator {
  @Input('appCredentialsValidator') propToCheck: 'username' | 'email' = 'username';

  constructor(private readonly _usersPlaceholderService: UsersPlaceholderService){}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._usersPlaceholderService.getUsers().pipe(
      map(users => {
        const hasUser = users.find(user => user[this.propToCheck] === control.value);
        const validatorKey = this.propToCheck === 'username' ? 'invalidUserName' : 'invalidUserEmail';

        return hasUser ? { [validatorKey]: true } : null;
      })
    );
  }
}