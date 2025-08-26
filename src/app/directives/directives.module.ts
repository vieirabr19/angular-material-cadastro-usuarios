import { NgModule } from "@angular/core";

import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from "./credentials-validator.directive";
import { PasswordStrengthValidatorDirective } from "./password-strength-validator.directive";

const arrDirectives = [
  EmailPatternValidatorDirective,
  CredentialsValidatorDirective,
  PasswordStrengthValidatorDirective,
];

@NgModule({
    declarations: arrDirectives,
    exports: arrDirectives
})
export class DirectivesModule {}