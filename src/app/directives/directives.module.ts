import { NgModule } from "@angular/core";

import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from "./credentials-validator.directive";
import { PasswordStrengthValidatorDirective } from "./password-strength-validator.directive";
import { PasswordConfirmationValidatorDirective } from "./password-confirmation-validator.directive";
import { MusicsFavoriteDisabledDirective } from "./musics-favorite-disabled.directive";

const arrDirectives = [
  EmailPatternValidatorDirective,
  CredentialsValidatorDirective,
  PasswordStrengthValidatorDirective,
  PasswordConfirmationValidatorDirective,
  MusicsFavoriteDisabledDirective
];

@NgModule({
    declarations: arrDirectives,
    exports: arrDirectives
})
export class DirectivesModule {}