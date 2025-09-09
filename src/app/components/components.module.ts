import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularMaterialModule } from "../angular-material.module";
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";

import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserBeforeAndAfterDialogComponent } from './user-before-and-after-dialog/user-before-and-after-dialog.component';

@NgModule({
    declarations: [
    UsersCardListComponent,
    UserFormComponent,
    UserBeforeAndAfterDialogComponent
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
        UserFormComponent,
        UserBeforeAndAfterDialogComponent
    ]
})
export class ComponentsModule {}