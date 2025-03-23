import { NgModule } from "@angular/core";
import {ListProductComponent} from "./list-product/list-product.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [ListProductComponent],
    exports: [ListProductComponent],
    imports: [CommonModule, IonicModule],
})

export class ComponentsModule{}