import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationProductPageRoutingModule } from './creation-product-routing.module';

import { CreationProductPage } from './creation-product.page';
import { ComponentsModule } from "../../component/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationProductPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CreationProductPage]
})
export class CreationProductPageModule {}
