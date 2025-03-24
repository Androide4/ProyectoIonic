import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../component/components.module';
import { CreationProductPage } from './creation-product.page';

const routes: Routes = [
  {
    path: '',
    component: CreationProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ComponentsModule],
  exports: [RouterModule],
})
export class CreationProductPageRoutingModule {}
