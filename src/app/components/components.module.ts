import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularMaterialModule } from "../angular-material.module";
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        AngularMaterialModule,
        DirectivesModule,
        PipesModule,
    ],
    exports: []
})
export class ComponentsModule {}