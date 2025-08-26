import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material.module";
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";

import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
    UsersCardListComponent,
    UserFormComponent
  ],
    imports: [
    FormsModule,
    AngularMaterialModule,
    DirectivesModule,
    PipesModule,
    BrowserAnimationsModule
],
    exports: [
        UsersCardListComponent,
        UserFormComponent
    ]
})
export class ComponentsModule {}