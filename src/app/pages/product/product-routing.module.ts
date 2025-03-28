import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../component/components.module';
import { ProductPage } from './product.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule], 
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
