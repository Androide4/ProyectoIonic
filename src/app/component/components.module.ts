import { NgModule } from "@angular/core";
import {ListProductComponent} from "./list-product/list-product.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [ListProductComponent,RegistrationFormComponent],
    exports: [ListProductComponent,RegistrationFormComponent],
    imports: [CommonModule, IonicModule, ReactiveFormsModule ],
})

export class ComponentsModule{}