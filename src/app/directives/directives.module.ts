import { NgModule } from "@angular/core";

import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialsValidatorDirective } from "./credentials-validator.directive";

const arrDirectives = [
  EmailPatternValidatorDirective,
  CredentialsValidatorDirective,
];

@NgModule({
    declarations: arrDirectives,
    exports: arrDirectives
})
export class DirectivesModule {}