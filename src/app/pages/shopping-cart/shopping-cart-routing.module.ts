import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../component/components.module';
import { ShoppingCartPage } from './shopping-cart.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule], 
  exports: [RouterModule],
})
export class ShoppingCartPageRoutingModule {}
