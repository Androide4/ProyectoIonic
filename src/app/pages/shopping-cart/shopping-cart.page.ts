import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.model';
import { CreatingListService } from 'src/app/services/creating-list.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
  standalone: false
})
export class ShoppingCartPage implements OnInit  {

  listadosProductos: Product[] = [];

  constructor(private creatingListService: CreatingListService) {}

  ngOnInit() {
    this.actualizarCarrito();
  }

  actualizarCarrito() {
    this.listadosProductos = this.creatingListService.obtenerCarrito();
  }

  eliminarProducto(id: number) {
    this.creatingListService.eliminarDelCarrito(id);
    this.actualizarCarrito();
  }
}
